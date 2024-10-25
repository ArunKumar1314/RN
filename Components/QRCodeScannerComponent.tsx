import React, { useState } from "react";
import { KeyboardAvoidingView,StyleSheet,View,Image,Platform,Button,TextInput,Text,Alert} from "react-native";
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import QRCodeScanner from "react-native-qrcode-scanner";

type QRCodeScannerComponentsProps = StackScreenProps<RootStackParamList, 'QRCodeScannerComponent'>;
const QRCodeGenerator=({navigation}:QRCodeScannerComponentsProps)=>{
    const readQRData =(e:{data:string})=>{
        Alert.alert('QR Code Scanned successfully',`Data :${e.data}`)
    }
    return(
        <KeyboardAvoidingView style={Styles.homeContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={80}>
            <View>
                <Image source={require('../assets/logo.png')} style={Styles.logoImage} />
            </View>
            <Text style={{marginHorizontal:120,fontSize:20}}>Scan QRCode</Text>
           <View style={Styles.qrContainer}>
              <QRCodeScanner
                 onRead={readQRData}
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
}
})
export default QRCodeGenerator;