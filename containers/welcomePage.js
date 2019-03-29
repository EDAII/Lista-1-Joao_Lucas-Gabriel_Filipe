import React, {Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class WelcomePage extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style = {styles.header}>
          <Text> Bem Vindo ! </Text>
        </View>

        <View style={styles.center}>
          <Text>    O Objetivo desse app é demostrar a diferença de velocidade </Text>
          <Text> entre tres algoritmos de busca para vetores com cem, dez mil</Text>
          <Text> e um milhão de itens. Para isso é mostrado um gráfico comparando</Text>
          <Text> o tempo de execução dos algotimos.</Text>
          <Text>    Para usar clique no botão de comparação, ao ser redirecionado selecione</Text>
          <Text> o tamho do vetor</Text>
        </View>
      </View>
    );
  }

};

export default WelcomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    marginTop: 50
  },
  center: {

  }
})