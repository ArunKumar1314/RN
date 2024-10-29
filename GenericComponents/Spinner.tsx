import React from "react";
import {View,Text, StyleSheet}from 'react-native';
import { ActivityIndicator } from "react-native-paper";
const Spinner=()=>{
    return(
        <View style={Styles.spinner}>
        <ActivityIndicator
            animating={true}
            size={100}
        />
    </View>
    )
  
}
const Styles=StyleSheet.create({
   spinner:{
    marginHorizontal:150,
    marginVertical:200,
   } 
});
export default Spinner;