import React, { useState } from "react";
import { KeyboardAvoidingView,StyleSheet,View,Image,Platform,Button} from "react-native";
import Inputs from "../GenericComponents/Inputs";
//import Buttons from '../GenericComponents/Buttons';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;
const Home=({navigation}:HomeProps)=>{
    const [UserName,setUserName]=useState<string>('');
    const [Password,setPassword]=useState<string>('');

    const changeName=(value:string)=>{
        setUserName(value);
    }
    const changePwd=(value:string)=>{
        setPassword(value);
    }

    return(
        <KeyboardAvoidingView style={Styles.homeContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={80}>
            <View>
                <Image source={require('../assets/logo.png')} style={Styles.logoImage} />
            </View>
            <View style={Styles.userData}>
                    <Inputs
                    label="UserName"
                    value={UserName}
                    onChangeText={changeName}
                    />
                    <Inputs
                    label="Password"
                    value={Password}
                    onChangeText={changePwd}
                    />
            </View>
            <View style={Styles.But}>
            <Button
                     title="Sign UP"
                
                    onPress={()=>
                        // {console.log("testing onPress");
                        navigation.navigate('DumpingScreen')}
                   
            />
            </View>
        </KeyboardAvoidingView>
    )
}
const Styles=StyleSheet.create({
homeContainer:{
    //flex:1,
   // marginTop:350,
},
logoImage:{
    marginTop:100,
    width:200,
    height:200,
    marginHorizontal:100,
    marginBottom:20,
},
But:{
    marginTop:20,
    width:200,
    marginHorizontal:100
},
userData:{
    width:'100%',
    marginTop:100,
}
})
export default Home;