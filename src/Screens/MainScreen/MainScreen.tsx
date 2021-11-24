import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackScreens } from '../../helpers/StackScreens';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FAB } from 'react-native-paper';
import { ListItem } from './components/ListItem';
import { FlatList} from 'react-native-gesture-handler';
import { DemoContext } from '../../context/DemoContext';
import { translate } from '../../helpers/translation/translations';
import { tokens } from '../../helpers/translation/appStructure'

interface IMainScreen

extends NativeStackScreenProps<StackScreens, "MainScreen"> {}


export const MainScreen: React.FC<IMainScreen> = (props) => {
  const listItems = useContext(DemoContext)
  

  
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>{translate(tokens.screens.screenMain.MainText)}</Text>
      </View>
      <View style={styles.menu}>
        <Text>{translate(tokens.screens.screenMain.NameText)}</Text>
        <Text>{translate(tokens.screens.screenMain.TypeText)}</Text>
        <Text>{translate(tokens.screens.screenMain.PriceText)}</Text>
        
      </View>
      
      <StatusBar style="auto" />
      
      <FlatList
      style = {styles.flatlist} 
      data={listItems?.simpleText} 
      keyExtractor={listItems?.simpleText.nameId}
      renderItem={({item, index})=> (<ListItem key={index} name={item.name}
      price={item.price} type={item.type} onPress={() => props.navigation.navigate("EditProductScreen", {nameId: item.name, price: item.price, type: item.type})}/>)} 
     />
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => props.navigation.navigate("ProductScreen")}
      />
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  headerText:{
    color: 'white',
    fontSize: 25,
    margin: 15
  },
  headerView: {
    backgroundColor: 'green',
    height: 60,
    width: "100%",

  },
  flatlist: {
    width: "90%"
  },
  menu: {
    width: "100%",
    height: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 2
  }
});