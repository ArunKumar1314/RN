import React from "react";
import { KeyboardAvoidingView, StyleSheet,View,Platform,ScrollView } from "react-native";
import QRCode from 'react-native-qrcode-svg';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type QRCodeProps = StackScreenProps<RootStackParamList, 'QRCodeGen'>;

const QRCodeGenerator = ({route}: QRCodeProps) => {
    const data=route.params?.data || '';
    return (
        <KeyboardAvoidingView
            style={Styles.homeContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={100}>
        <ScrollView contentContainerStyle={Styles.scrollViewConatiner}>
            <View style={Styles.dataContainer}>
                { data?
                (<QRCode
                value={data}
                size={200}
                color="black"
                backgroundColor="white"
                />
                 ) : null
            }
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
        justifyContent:'center',
        alignContent:'center',
        marginHorizontal:70,
        marginVertical:300,
    },
   
});

export default QRCodeGenerator;
