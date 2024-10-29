import React from "react";
import {View,Text}from 'react-native';
import { ActivityIndicator } from "react-native-paper";
const LoadingSpinner=()=>{
    <View>
        <ActivityIndicator
    animating={true}
        />
    </View>
}
export default LoadingSpinner;