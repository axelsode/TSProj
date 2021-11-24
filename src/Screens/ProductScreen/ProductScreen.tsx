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
import { EntryFieldNumber } from './components/EntryFieldNumber';


interface IProductScreen

  extends NativeStackScreenProps<StackScreens, "ProductScreen"> { }
  

export const ProductScreen: React.FC<IProductScreen> = (props) => {
  const listItems = useContext(DemoContext)
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [selectedValue, setSelectedValue] = useState("Integrated");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.text}>Create new product</Text>
      <EntryField label="Name" OnTextChanged={(text) => setName(text)} />
      <EntryFieldNumber label="Price" OnValueChanged={(value: number) => setPrice(value)}/>

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
          onPress={() => {
            if ((price >= 0 ) && (selectedValue==="Intergrated")){
              listItems?.setSimpleText([...listItems.simpleText, { name:name, price:price, type:selectedValue}])
            props.navigation.navigate("MainScreen")
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
    
  }
});