import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackScreens } from '../../helpers/StackScreens';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FAB } from 'react-native-paper';
import { ListItem, IListItem } from './components/ListItem';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

interface IMainScreen

extends NativeStackScreenProps<StackScreens, "MainScreen"> {}


export const MainScreen: React.FC<IMainScreen> = (props) => {
  const Items: IListItem[] =[
    { name:"bil", price:11, type:"Peripheral" },
    { name:"hus", price:22, type:"Peripheral"},
    { name:"båt", price:33, type:"Peripheral"}
  ]
const render = ({item}: {item: IListItem}) =>{
  <ListItem  name={item.name} price={item.price} type={item.type}/>
}
  
  return (
    <View style={styles.container}>
      <Text>Main screen</Text>
      
      <StatusBar style="auto" />
      <ScrollView>
        <ListItem name= "bil" price={23} type="Peripheral" onPress={()=>{}}></ListItem>
      </ScrollView> 
      
      <FlatList 
      data={Items} 
      renderItem={({item, index})=> (<ListItem key={index} name={item.name}
      price={item.price} type={item.type}/>)} 
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
});