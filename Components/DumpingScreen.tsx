import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View, Image, Platform, Button,  TextInput, Text, ScrollView } from "react-native";
import Inputs from "../GenericComponents/Inputs";
import PickerSelect from "../GenericComponents/PickerSelect";
import CheckBox from '../GenericComponents/CheckBox';
import QRCode from 'react-native-qrcode-svg';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { Checkbox } from "react-native-paper";


type DumpingScreenProps = StackScreenProps<RootStackParamList, 'DumpingScreen'>;

const DumpingScreen = ({ navigation }: DumpingScreenProps) => {
    const [QRInputText1, setQRInputText1] = useState<string>('');
    const [QRInputText2, setQRInputText2] = useState<string>('');
    const [TokenNumber, setTokenNumber] = useState<string>('');
    const [DumpingArea, setDumpingArea] = useState<string>('');
    const [StatusChecked, setStatusChecked] = useState(false);
    const [checked, setChecked] = React.useState(false);
    const dropDownOptions=[
        {id:"1",label:'1',value: '1'},
        {id:"2",label:'2',value: '2'},
        {id:"3",label:'3',value: 'High'}
    ]
    const qrGen=()=>{
        const data=`\nNo of Bags: ${QRInputText1}
        \nMiller Name:${QRInputText2}
        \nToken Number:${TokenNumber}
        \nDumping Area:${DumpingArea}
        \nStatus:${StatusChecked}\n`;
        navigation.navigate("QRCodeGen",{data});
    };

    return (
        <KeyboardAvoidingView
            style={Styles.homeContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={100}>
        <ScrollView contentContainerStyle={Styles.scrollViewConatiner}>
            <View style={Styles.dataContainer}>
                <TextInput style={Styles.title}>Dumping Screen</TextInput>
                <Inputs
                    label={"No of Bags"}
                    value={QRInputText1}
                    onChangeText={setQRInputText1}
                />
                {/* <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    /> */}
                <Inputs
                    label={"Miller Name"}
                    value={QRInputText2}
                    onChangeText={setQRInputText2}
                />
                <PickerSelect
                    placeholder={{label:"Token Number",value:'' }}
                    items={dropDownOptions}
                    value={TokenNumber}
                    onValueChange={setTokenNumber}
                    //style={Styles.dropdown}
                />
                 <PickerSelect
                    placeholder={{label:"Dumping Area",value:'' }}
                    items={dropDownOptions}
                    value={DumpingArea}
                    onValueChange={setDumpingArea}
                    //style={Styles.dropdown}
                />
                <CheckBox
                status={StatusChecked ? 'checked' : 'unchecked'}
                onPress={()=>{setStatusChecked(!StatusChecked)}}
                label="Accepting Terms and Conditions"
                />
            <Button
                title="Submit"
                onPress={qrGen}
            />
            </View>
        </ScrollView>
        </KeyboardAvoidingView>
    );
};

const Styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
    },
    scrollViewConatiner:{
        flexGrow:1,
    },
    dataContainer:{
        padding:20,
    },
    dropdown:{
        fontSize:15,
        padding:10,
        marginHorizontal:10,
      },
      title:{
        marginHorizontal:70,
        fontSize:25,
      }
});

export default DumpingScreen;
