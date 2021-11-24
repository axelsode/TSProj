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
import { translate } from '../../helpers/translation/translations';
import { tokens } from '../../helpers/translation/appStructure';

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

      <Text style={styles.text}>{translate(tokens.screens.screenMain.NewProductText)}</Text>
      <EntryField label={translate(tokens.screens.screenProduct.NameText)}  defaultValue={translate(tokens.screens.screenProduct.NameText)}  OnTextChanged={(text) => setName(text)} />
      <Text style={styles.error}>{errorName}</Text>
      <EntryField label={translate(tokens.screens.screenProduct.PriceText)} defaultValue= {translate(tokens.screens.screenProduct.PriceText)}  OnTextChanged={(text) => setPrice(text)}/>
      <Text style={styles.error}>{errorPrice}</Text>
      <Picker style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>

        <Picker.Item label={translate(tokens.screens.screenMain.TypeType1)} value="Peripheral" />  
        <Picker.Item label={translate(tokens.screens.screenMain.TypeType2)} value="Integrated" />
        
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
              setErrorName(translate(tokens.screens.screenProduct.ErrorName))
              setErrorPrice("")
            } else if(selectedValue == 'Peripheral'){
              setErrorPrice(translate(tokens.screens.screenProduct.ErrorPrice1))
              setErrorName("")
            } else{
              setErrorPrice(translate(tokens.screens.screenProduct.ErrorPrice2))
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
    marginTop: 20,
    marginBottom: 30,
    backgroundColor: '#ecf0ee',
    
  },
  error:{
    color: 'red',
    fontSize: 10
  }
});