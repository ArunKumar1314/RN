import React, { useState } from "react";
import { KeyboardAvoidingView,StyleSheet,View,Image,Platform,Button,TextInput,Text} from "react-native";
import Inputs from "../GenericComponents/Inputs";
import QRCode from 'react-native-qrcode-svg';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
type QRCodeProps = StackScreenProps<RootStackParamList, 'QRCodeGen'>;
const QRCodeGenerator=({navigation}:QRCodeProps)=>{
    const [QRInputText,setQRInputText]=useState<string>('');

    return(
        <KeyboardAvoidingView style={Styles.homeContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={80}>
            <View>
                <Image source={require('../assets/logo.png')} style={Styles.logoImage} />
            </View>
            <Text style={{marginHorizontal:120,fontSize:20}}>Generate QRCode</Text>
            <TextInput
                placeholder="Enter text data to generate QR Code"
                value={QRInputText}
                onChangeText={setQRInputText}
            />
           <View style={Styles.qrContainer}>
            {
                QRInputText?
                (<QRCode
                value={QRInputText}
                size={200}
                color="black"
                backgroundColor="white"
                
                />)
                :null
            }
            </View>
             <View style={Styles.But}>
            <Button
                    title="Scan"
                    onPress={()=>navigation.navigate('QRCodeScannerComponent')}
            />
            </View> 
        </KeyboardAvoidingView>
    )
}
const Styles=StyleSheet.create({
homeContainer:{
    //flex:1,
   marginTop:50,
},
logoImage:{
    marginTop:50,
    width:200,
    height:200,
    marginHorizontal:100,
    marginBottom:20,
},
userData:{
    width:'100%',
    marginTop:100,
},
qrContainer:{
    marginHorizontal:100,
},
But:{
    marginTop:20,
    width:200,
    marginHorizontal:100
}
})
export default QRCodeGenerator;