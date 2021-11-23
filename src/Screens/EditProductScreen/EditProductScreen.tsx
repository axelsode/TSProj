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
import { EntryField } from './components/EntryField';
import { DemoContext } from '../../context/DemoContext';

interface IEditProductScreen

  extends NativeStackScreenProps<StackScreens, "EditProductScreen"> {nameId: string , price: number, type: string}
  

export const EditProductScreen: React.FC<IEditProductScreen> = (props) => {
  const listItems = useContext(DemoContext)
  const params = props.route.params;
  const [name, setName] = useState(params.nameId);
  const [price, setPrice] = useState(params.price);
  const [selectedValue, setSelectedValue] = useState(params.type);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.text}>Edit product</Text>
      <EntryField label="Name" defaultValue={params.nameId} OnTextChanged={(text) => setName(text)} />
      <EntryField label="Price" defaultValue={params.price.toString()} OnTextChanged={(text) => setPrice(text)}/>

      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        
      >
        <Picker.Item label='Please select an option...' value='0' />
        <Picker.Item label="Integrated" value="Integrated" />
        <Picker.Item label="Peripheral" value="Peripheral" />
      </Picker>
        <View style={styles.buttonConatiner}>
        <AddButton 
          onPress={() => {console.log(name),
            console.log(price)
            console.log(selectedValue)
            const list = listItems?.simpleText.map((item: { name: string; }) => { if (item.name !== params.nameId){
              return item
            }})
            listItems?.setSimpleText([...list, { name:name, price:price, type:selectedValue}])
            props.navigation.navigate("MainScreen")
         }} >
        </AddButton>
        <CancelButton onPress={() => {
        props.navigation.navigate("MainScreen");
      }} ></CancelButton>
        
      </View>
      <View style={styles.buttonConatiner}>
      <DeleteButton
        onPress={() => {console.log(params.nameId),
            listItems?.setSimpleText([...listItems.simpleText, { name:name, price:price, type:selectedValue}])
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
    fontSize: 20,
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