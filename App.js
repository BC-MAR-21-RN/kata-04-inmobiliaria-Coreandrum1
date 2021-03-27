import React, { Component } from 'react';
import {View, SafeAreaView, FlatList, Text, StyleSheet, TextInput, Image, StatusBar} from 'react-native';
import {Card} from './src/components/card'
import { DATA } from "./src/data/data";
// get our fontawesome imports

class App extends Component {
  render(){

    return(
      <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item})=>(
          <Card name={item.name} address={item.address} uri={item.uri} bedrooms={item.bedrooms} bathrooms={item.bathrooms} size={item.size} price={item.price}></Card>
          )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  card: {
  },
  container:{
      flex:1,
  },
})

export default App;
