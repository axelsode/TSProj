import { StatusBar } from 'expo-status-bar';
import React, {useContext, useState} from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { StackScreens } from '../../helpers/StackScreens';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FAB } from 'react-native-paper';
import { CancelButton } from './components/CancelButton';
import { AddButton } from './components/EditButton';
import {DeleteButton} from './components/DeleteButton'
import { EntryField } from './components/EntryFieldText';
import { DemoContext } from '../../context/DemoContext';
import { EntryFieldNumber } from './components/EntryFieldNumber';

interface IEditProductScreen

  extends NativeStackScreenProps<StackScreens, "EditProductScreen"> {nameId: string , price: number, type: string}
  

export const EditProductScreen: React.FC<IEditProductScreen> = (props) => {
  const listItems = useContext(DemoContext)
  const params = props.route.params;
  const [name, setName] = useState(params.nameId);
  const [price, setPrice] = useState(params.price);
  const [selectedValue, setSelectedValue] = useState(params.type);
  const[errorName, setErrorName] = useState("");
  const[errorPrice, setErrorPrice] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.text}>Edit product</Text>
      <EntryField label="Name" defaultValue={params.nameId} OnTextChanged={(text) => setName(text)} />
      <Text>{errorName}</Text>
      <EntryFieldNumber label="Price" defaultValue={params.price} OnTextChanged={(text) => setPrice(text)}/>
      <Text>{errorPrice}</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        
      >
        
        <Picker.Item label="Integrated" value="Integrated" />
        <Picker.Item label="Peripheral" value="Peripheral" />
      </Picker>
        <View style={styles.buttonConatiner}>
        <AddButton 
          onPress={() => {console.log(name),
            console.log(price)
            console.log(selectedValue)

            const newList = listItems?.simpleText.filter(function (el: any) {
              return el.name != params.nameId    
            })
            const checkName = newList.some((el: { name: string; }) => el.name == name)
            if(!checkName && ((price > 0) && (selectedValue=='Integrated') && (price < 1000)) ||
             (price >= 1000) && (selectedValue=='Peripheral')){
              
              listItems?.setSimpleText([...newList, { name:name, price:price, type:selectedValue}])
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
      <View style={styles.buttonConatiner}>
      <DeleteButton
        onPress={() => {console.log(params.nameId)
          const newList = listItems?.simpleText.filter(function (el: any) {
            return el.name != params.nameId    
          })
          listItems?.setSimpleText([...newList])
            props.navigation.navigate("MainScreen")
          }} >
        </DeleteButton>
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
    
  }
});