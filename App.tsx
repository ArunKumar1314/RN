import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './Components/Home';
import DumpingScreen from "./Components/DumpingScreen";
import Spinner from "./GenericComponents/Spinner";
import QRCodeGenerator from './GenericComponents/QRCodeGenerator';
import QRCodeScannerComponent from './Components/QRCodeScannerComponent';
import LoadingAtSiding from "./Components/LoadingAtSiding";
//import { StackScreenProps } from '@react-navigation/stack';


export type RootStackParamList = {
  Home: undefined;
  DumpingScreen:undefined;
  LoadingAtSiding:undefined;
  //Spinner:undefined;
  QRCodeGen: {data:string};
  QRCodeScannerComponent:undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DumpingScreen" component={DumpingScreen} />
        <Stack.Screen name="LoadingAtSiding" component={LoadingAtSiding} />
        {/* <Stack.Screen name="Spinner" component={Spinner} /> */}
        <Stack.Screen name="QRCodeGen" component={QRCodeGenerator} />
        <Stack.Screen name="QRCodeScannerComponent" component={QRCodeScannerComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
