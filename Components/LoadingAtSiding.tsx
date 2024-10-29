import React from "react";
import {View,StyleSheet,Text}from 'react-native';
import Inputs from "../GenericComponents/Inputs";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
type LoadingAtSidingProps=StackScreenProps<RootStackParamList,"LoadingAtSiding">
const LoadingAtSiding=({navigation}:LoadingAtSidingProps)=>{
    return(
        <View>
           <Text>
            Arunkumar
            CSE-B
            msec 
            SIVAKASI
           </Text>
        </View>
    )
}
export default LoadingAtSiding;