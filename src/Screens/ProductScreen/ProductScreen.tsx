import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackScreens } from '../../helpers/StackScreens';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FAB } from 'react-native-paper';
import { CancelButton } from './components/CancelButton';
import { AddButton } from './components/AddButton';
import { EntryField } from './components/EntryField';

interface IProductScreen

  extends NativeStackScreenProps<StackScreens, "ProductScreen"> { }


export const ProductScreen: React.FC<IProductScreen> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Product screen</Text>
      <StatusBar style="auto" />
      <EntryField label="test"/>
        <View style={styles.buttonConatiner}>
        <AddButton 
          onPress={() => {console.log("Add")
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