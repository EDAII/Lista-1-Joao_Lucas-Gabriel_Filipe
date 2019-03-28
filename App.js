import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import BarGraph from './components/chart';

global.arr = []
export default class App extends React.Component {

  state = {
    checked: "first",
    array: [],
    fill: 'rgb(134, 65, 244)',
    data: [0 ,0, 0]
  };
  
  makeArray = (tamanho) => {
    global.arr = [...Array(tamanho).keys()]
  }
  
  amandaUm = (tam, radio) => {
    let vector = [];
    this.makeArray(tam);
    this.setState({ checked: radio });
    const ar = global.arr;
    let sequencial = this.seqSearch(ar);
    let binario = this.binarySearch(ar);
    let inter = this.interpolationSearch(ar);
    this.setState({ array: vector });
    console.log('ASS: '+sequencial)
    return [sequencial, binario, inter];
  };
  
  compilador = (tam, radio) => {
    let estado = this.amandaUm(tam, radio)
    this.chamaADois(estado)
  }

  chamaADois = (estado) => {
    this.amandaDois(estado);
  }
  amandaDois = (estado) => {
    console.log("entrou amanda 2");
    console.log(estado)
    this.setState({fill: 'rgb(134, 65, 244)', data: estado});  
  }

  seqSearch = array => {
    let begin = global.nativePerformanceNow();
    let item = array[array.length - 1]
    for (let i = 0; i < array.length; i++) {
      if (array[i] == item) {
        let fim = global.nativePerformanceNow();
        console.log("--------- Sequencial--------");
        console.log("Posição " + i + " Tempo: " + (fim - begin));
        console.log("---------------------------");
        let tempo = fim - begin;
        return tempo;
      }
    }
  };

  
  binarySearch = array => {
    let begin = global.nativePerformanceNow();
    let start = 0;
    let stop = array.length - 1;
    let value = array[array.length - 1];
    let middle = Math.floor((start + stop) / 2);

    while (array[middle] !== value && start < stop) {
      if (value < array[middle]) {
        stop = middle - 1;
      } else {
        start = middle + 1;
      }
      middle = Math.floor((start + stop) / 2);
    }

    let fim = global.nativePerformanceNow();
    console.log(" --------- Binaria ---------");
    console.log("Posição: " + middle + " Tempo: " + (fim - begin));
    console.log("----------------------------");
    return array[middle] !== value ? -1 : fim - begin;
  };

  interpolationSearch = array => {
    let begin = global.nativePerformanceNow();
    let start = 0;
    let stop = array.length - 1;
    let value = array[array.length - 1];
    let middle =
      start +
      (stop - start) * ((value - array[start]) / (array[stop] - array[start]));

    while (array[middle] !== value && start < stop) {
      if (value < array[middle]) {
        stop = middle - 1;
      } else {
        start = middle + 1;
      }

      middle = Math.floor((start + stop) / 2);
    }

    let fim = global.nativePerformanceNow();
    console.log(" --------- Interpolada ---------");
    console.log("Posição: " + middle + " Tempo: " + (fim - begin));
    console.log("----------------------------");
    return array[middle] !== value ? -1 : fim - begin;
  };

  render() {
    const { checked } = this.state;
    console.log("dentro do render "+this.state.data)
    return (
      <View style={styles.container}>
        <View style={styles.titulo}>
          <Text style={{ fontSize: 18 }}> Qual tamanho do seu vetor ?</Text>
        </View>

        <View style={styles.radioButton}>
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => {
              this.compilador(100, "first");
            }}
          />
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => {
              this.compilador(10000, "second");
            }}
          />
          <RadioButton
            value="third"
            status={checked === "third" ? "checked" : "unchecked"}
            onPress={() => {
              this.compilador(1000000, "third");
            }}
          />
        </View>
        <View style={styles.radioText}>
          <Text style={{ fontSize: 16 }}> 100 </Text>
          <Text style={{ fontSize: 16 }}> 10K </Text>
          <Text style={{ fontSize: 16 }}> 1M </Text>
        </View>
        <BarGraph data={() =>this.state.data} svg={()=>this.state.fill}/>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  radioButton: {
    backgroundColor: "#fff",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  titulo: {
    marginTop: 80,
    alignItems: "center"
  },
  radioText: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});
