import { StatusBar } from 'expo-status-bar';
import React, {useContext, useState} from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { StackScreens } from '../../helpers/StackScreens';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FAB } from 'react-native-paper';
import { CancelButton } from './components/CancelButton';
import { AddButton } from './components/AddButton';
import { EntryField } from './components/EntryField';
import { DemoContext } from '../../context/DemoContext';
import { EntryFieldNumber } from '../EditProductScreen/components/EntryFieldNumber';
//integrated products may be anywhere within the range of 1000 to 2600 dollars
interface IProductScreen

  extends NativeStackScreenProps<StackScreens, "ProductScreen"> { }
  

export const ProductScreen: React.FC<IProductScreen> = (props) => {
  const listItems = useContext(DemoContext)
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const[errorName, setErrorName] = useState("");
  const[errorPrice, setErrorPrice] = useState("");
  const [selectedValue, setSelectedValue] = useState("Peripheral");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.text}>Create new product</Text>
      <EntryField label="Name" defaultValue="Name" OnTextChanged={(text) => setName(text)} />
      <Text style={styles.error}>{errorName}</Text>
      <EntryField label="Price" defaultValue= "Price"  OnTextChanged={(text) => setPrice(text)}/>
      <Text>{errorPrice}</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>

        <Picker.Item label="Peripheral" value="Peripheral" />  
        <Picker.Item label="Integrated" value="Integrated" />
        
      </Picker>
        <View style={styles.buttonConatiner}>
        <AddButton 
          onPress={() => {console.log(name),
            console.log(price)
            console.log(selectedValue)
            
            const checkName = listItems?.simpleText.some((el: { name: string; }) => el.name == name)
            console.log(checkName)
            if((name != "") && !checkName && ((parseFloat(price) > 0) && (selectedValue=='Peripheral') && (parseFloat(price) < 1000) ||
             ((parseFloat(price) >= 1000) && (selectedValue=='Integrated') && (parseFloat(price) < 2600)))){
              listItems?.setSimpleText([...listItems.simpleText, { name:name, price:price, type:selectedValue}])
              props.navigation.navigate("MainScreen")
            } else if(checkName || (name == "")) {
              setErrorName("Name is error")
              setErrorPrice("")
            } else if(selectedValue == 'Peripheral'){
              setErrorPrice("Peripheral products may be anywhere within the range of 1 to 999 dollars")
              setErrorName("")
            } else{
              setErrorPrice("Integrated products may be anywhere within the range of 1000 to 2600 dollars")
              setErrorName("")
            }
            
            
         }} >
        </AddButton>
        <CancelButton onPress={() => {
        props.navigation.navigate("MainScreen");
      }} ></CancelButton>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonConatiner:{
    flexDirection: 'row'
  },
  picker:{
    height: 50, 
    width: '80%', 
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: '#ecf0ee',
    
  },
  error:{
    color: 'red',
    fontSize: 10
  }
});