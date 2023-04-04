import React from "react";
import { Text } from "react-native";
import padrao from "../estilo/padrao";

function getParImpar(num:any){
    
    const resultado = num % 2 == 0 ?'PAR' : 'IMPAR'

        return <Text style ={padrao.ex}>{resultado}</Text>
}



export default(props: any) =>(
    <>
        {
            getParImpar(props.numero)
        }
    </>
)