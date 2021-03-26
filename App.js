import React, { Component } from 'react';
import {View, SafeAreaView, FlatList, Text, StyleSheet, TextInput, Image, StatusBar} from 'react-native';
import {Card} from './src/components/card'
import { DATA } from "./src/data/data";

class App extends Component {
  render(){
    
    const renderItem = ({ item }) => {
        <Card name={DATA[0].name} address={DATA[0].address} uri={DATA[0].uri} bedrooms={DATA[0].bedrooms} bathrooms={DATA[0].bathrooms} size={DATA[0].size} price={DATA[0].price}></Card>
    }

    return(
      <SafeAreaView style={styles.container}>
        <Text>{DATA[0].name}</Text>
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
      marginTop: StatusBar.currentHeight || 0,
  },
})

export default App;
