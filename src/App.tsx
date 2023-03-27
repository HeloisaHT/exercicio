
import React, {Component}from "react";
import { View,Text,StyleSheet, useColorScheme} from "react-native";
import Simples from "./componentes/Simples";
export default class App extends Component{
render(){
  return(
    <View style={estilos.container}>
      <Simples/>
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
    fontSize:150
  }
});
