import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './Components/Home';
import QRCodeGenerator from './Components/QRCodeGenerator';
import QRCodeScannerComponent from './Components/QRCodeScannerComponent';
//import { StackScreenProps } from '@react-navigation/stack';


export type RootStackParamList = {
  Home: undefined;
  QRCodeGen: undefined;
  QRCodeScannerComponent:undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="QRCodeGen" component={QRCodeGenerator} />
        <Stack.Screen name="QRCodeScannerComponent" component={QRCodeScannerComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
