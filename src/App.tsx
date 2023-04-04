
import React, {Component}from "react";
import { View,Text,StyleSheet} from "react-native";
import Simples from "./componentes/Simples";
import Frag from "./componentes/Frag";
import ParImpar from "./componentes/ParImpar";
import Familia from "./componentes/relacao/Familia";
import Membro from "./componentes/relacao/Membro";

export default class App extends Component{
render(){
  return(
    <View style={estilos.container}>

      {/*<Simples texto ='Teodoro'/>*/}
     {/* <Frag titulo="cadastro" 
            subTitulo= "Tela de cadastro de produto"/>*/}
      {/*<ParImpar numero = {12}/>*/}

      <Familia>
        <Membro nome ="Ana" sobreNome ="Silva"/>
        <Membro nome = "Jose" sobreNome = "Silva"/>
        </Familia>
    </View>
  );
  }
}
const estilos = StyleSheet.create({
  container:{ 
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fonte:{
    fontSize: 50
  }
});
