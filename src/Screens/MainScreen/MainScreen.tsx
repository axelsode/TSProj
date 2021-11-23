import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackScreens } from '../../helpers/StackScreens';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FAB } from 'react-native-paper';
import { ListItem, IListItem } from './components/ListItem';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { DemoContext } from '../../context/DemoContext';

interface IMainScreen

extends NativeStackScreenProps<StackScreens, "MainScreen"> {}


export const MainScreen: React.FC<IMainScreen> = (props) => {
  const listItems = useContext(DemoContext)
  

  
  return (
    <View style={styles.container}>
      <Text>Main screen</Text>
      
      <StatusBar style="auto" />
      
      <FlatList 
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
});