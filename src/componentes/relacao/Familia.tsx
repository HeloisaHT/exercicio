import React from "react";
import { Text } from "react-native";
import padrao from "../../estilo/padrao";

export default (props: any) =>{

    return (

    <>
    <Text style={padrao.txtG}>Membros da Familia</Text>
    {props.children}
    </>
     
    )
}