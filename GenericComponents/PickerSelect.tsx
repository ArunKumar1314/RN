import React from "react";
import { StyleSheet } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
interface pickerItemType{
    value:string;
    label:string;
}
interface PickerDataType{
    value:string;
    placeholder :{label:string,value:string};
    items:pickerItemType[];
    onValueChange:(text:string)=>void;
}

const PickerSelect:React.FC<PickerDataType>=({value,placeholder,items,onValueChange})=>{
    return(
        <RNPickerSelect
        placeholder={placeholder}
        items={items}
        value={value}
        onValueChange={onValueChange}
        style={PickerSelectStyle}
    />
    )
   
}
const PickerSelectStyle=StyleSheet.create({
    dropdownContainer:{
        marginHorizontal:50,
    },
    InputAndroid:{
        borderWidth:2,
        backgroundColor:'#CCD5AE',
    },
    placeholder:{
        fontSize:20
    }
})
export default PickerSelect;