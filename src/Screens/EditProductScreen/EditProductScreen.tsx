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
import { Context } from '../../context/Context';
import { EntryFieldNumber } from './components/EntryFieldNumber';
import { translate } from '../../helpers/translation/translations';
import { tokens } from '../../helpers/translation/appStructure';

interface IEditProductScreen

  extends NativeStackScreenProps<StackScreens, "EditProductScreen"> {nameId: string , price: number, type: string}
  

export const EditProductScreen: React.FC<IEditProductScreen> = (props) => {
  const listItems = useContext(Context)
  const params = props.route.params;
  const [name, setName] = useState(params.nameId);
  const [price, setPrice] = useState(params.price);
  const [selectedValue, setSelectedValue] = useState(params.type);
  const[errorName, setErrorName] = useState("");
  const[errorPrice, setErrorPrice] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.text}>{translate(tokens.screens.screenEditProduct.HeaderName)}</Text>
      <EntryField label={translate(tokens.screens.screenProduct.NameText)} defaultValue={params.nameId} OnTextChanged={(text) => setName(text)} />
      <Text style={styles.error}>{errorName}</Text>
      <EntryField label={translate(tokens.screens.screenProduct.PriceText)} defaultValue={params.price.toString()} OnTextChanged={(text) => setPrice(text)}/>
      <Text style={styles.error}>{errorPrice}</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        
      >
        <Picker.Item label={translate(tokens.screens.screenMain.TypeType1)} value="Peripheral" />
        <Picker.Item label={translate(tokens.screens.screenMain.TypeType2)} value="Integrated" />
        
      </Picker>
        <View style={styles.buttonConatiner}>
        <AddButton 
          onPress={() => {console.log(name),
            console.log(price)
            console.log(selectedValue)

            
            
            if((name != "") && ((price > 0) && (selectedValue=='Peripheral') && (price < 1000)) ||
             (price >= 1000) && (selectedValue=='Integrated')){
              listItems.updateItem({name:name, price:price, type:selectedValue}, params.nameId)
              props.navigation.navigate("MainScreen")
          } else if((name == "")) {
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
      <View style={styles.buttonConatiner}>
      <DeleteButton
        onPress={() => {console.log(params.nameId)
          listItems.removeItem(params.nameId)
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
    marginTop: 20,
    marginBottom: 30,
    borderWidth: 2,
    backgroundColor: '#ecf0ee',
    
  },
  error:{
    color: 'red',
    fontSize: 10
  }
});