import React from "react";
import {View,Text,StyleSheet}from 'react-native';
import { Checkbox, TextInput } from "react-native-paper";
import Home from "../Components/Home";
interface CheckDataTypes{
    status:'checked' | 'unchecked';
    label:string;
    onPress:()=>void;
}
const Inputs:React.FC <CheckDataTypes>=({status,onPress,label})=>{
    return(
        <View style={Styles.check}>
         <Checkbox
             status={status}
             onPress={onPress}
        />
        <Text style={Styles.labelStyle}>{label}</Text>
        
        </View>
       
    )
}
const Styles=StyleSheet.create({
    check:{
        flexDirection:"row"
    },
    labelStyle:{
        marginTop:5,
    }
})
export default Inputs;