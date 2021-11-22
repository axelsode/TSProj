import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DemoContextProvider } from './src/context/DemoContext';
import { NavigationContainer } from '@react-navigation/native';
import { MainScreen } from './src/Screens/MainScreen/MainScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreens } from './src/helpers/StackScreens';
import { ProductScreen } from './src/Screens/ProductScreen/ProductScreen';

const Stack = createNativeStackNavigator<StackScreens>();

const App = () =>
  <DemoContextProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  </DemoContextProvider>
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

