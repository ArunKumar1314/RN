import React from "react";
import {View,Text,StyleSheet}from 'react-native';
import { TextInput } from "react-native-paper";
import Home from "../Components/Home";
interface InputDataTypes{
    label:string;
    value :string;
    onChangeText :(text:string)=>void;
}
const Inputs:React.FC <InputDataTypes>=({label,value,onChangeText})=>{
    return(
        <TextInput
            mode={"outlined"}
            label={label}
            value={value}
            onChangeText={onChangeText}
             style={Styles.inputContainer}
        />
    )
}
const Styles=StyleSheet.create({
   inputContainer:{
        width:'90%',
        height:50,
        marginTop:15,
        marginHorizontal:30,
    }
})
export default Inputs;