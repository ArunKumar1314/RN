import React from "react";
import { Button } from "react-native";
interface ButttonDataType{
    title:string;
    onPress:()=>void;
}
const Buttons:React.FC <ButttonDataType>=({title,onPress})=>{
return(
    <Button
        title={title}
    />
)
}
export default Buttons;