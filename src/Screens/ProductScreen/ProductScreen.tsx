import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { StackScreens } from '../../helpers/StackScreens';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FAB } from 'react-native-paper';
import { CancelButton } from './components/CancelButton';
import { AddButton } from './components/AddButton';
import { EntryField } from './components/EntryField';

interface IProductScreen

  extends NativeStackScreenProps<StackScreens, "ProductScreen"> { }
  

export const ProductScreen: React.FC<IProductScreen> = (props) => {
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [selectedValue, setSelectedValue] = useState();
  return (
    <View style={styles.container}>
      <Text>Product screen</Text>
      <StatusBar style="auto" />
      <Text>Create new product</Text>
      <EntryField label="Name" defaultValue="Name" OnTextChanged={(text) => setName(text)} />
      <EntryField label="Price" defaultValue="Price"  OnTextChanged={(text) => setPrice(text)}/>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonConatiner:{
    flexDirection: 'row'
  }
});