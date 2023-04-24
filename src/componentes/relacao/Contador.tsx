import React,{useState} from "react";
import { Text, Button} from 'react-native'
import padrao from "../../estilo/padrao";

export default (props:any) =>{
    const[numero, setNumero] = useState(props.valorInicial)
    const incremento =() => setNumero(numero+1)
    const decremento = () => setNumero(numero-1)
    
    return(
        <>
            <Text style={padrao.txtG}>{numero}</Text>
            <Button title="+" onPress={incremento}/>
            <Button title="-" onPress={decremento}/>

        </>
    )
}
