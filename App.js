import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from 'react-native-elements';
import * as Speech from "expo-speech" ;

import HomeScreen from "./Screens/homeScreen" 
import Screen1 from "./Screens/2020"
import Screen2 from "./Screens/2021"
import Covid from "./Screens/covid"
import BLM from "./Screens/blm"
import ClimateChange from "./Screens/climateChange"
import StockMarket from "./Screens/stockMarket" 
import BackToSchool from "./Screens/backtoschool" 
import PPV from "./Screens/prideparade"  
import TC from "./Screens/TC"  
   
const Stack = createStackNavigator();  
  
      
function App() {   
  return (    
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false 
      }}> 
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="2020 Screen" component={Screen1} />
        <Stack.Screen name="2021 Screen" component={Screen2} />
        <Stack.Screen name = "Covid" component = {Covid}/>
        <Stack.Screen name = "BLM" component = {BLM}/>
        <Stack.Screen name = "Climate Change" component = {ClimateChange}/>
        <Stack.Screen name = "Stock Market" component = {StockMarket}/>
        <Stack.Screen name = "School" component = {BackToSchool}/>
        <Stack.Screen name = "PPV" component = {PPV}/>
        <Stack.Screen name = "Taliban" component = {TC}/>

      </Stack.Navigator> 
    </NavigationContainer>  

    
  );
}

export default App;