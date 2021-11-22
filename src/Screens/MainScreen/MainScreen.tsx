import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackScreens } from '../../helpers/StackScreens';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FAB } from 'react-native-paper';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

interface IMainScreen

extends NativeStackScreenProps<StackScreens, "MainScreen"> {}


export const MainScreen: React.FC<IMainScreen> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Main screen</Text>
      <StatusBar style="auto" />
      <ScrollView>
        
      </ScrollView>
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