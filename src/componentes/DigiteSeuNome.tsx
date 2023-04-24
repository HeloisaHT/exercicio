import React, {useState}from "react";
import { Text, TextInput } from "react-native";
import padrao from "../estilo/padrao";

export default (props: any) =>{
    let [nome, setNome] = useState ('Teste')
    return(
        <>
            <Text>{nome}</Text>
            <TextInput style= {padrao.input} placeholder="Digite seu nome" value={nome}
            onChangeText={nome => setNome (nome)}
            />
        </>
    )
}