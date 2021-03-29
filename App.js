import React, { Component } from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import { Card } from "./src/components/card";
import { DATA } from "./src/data/data";

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Card
              name={item.name}
              address={item.address}
              uri={item.uri}
              bedrooms={item.bedrooms}
              bathrooms={item.bathrooms}
              size={item.size}
              price={item.price}
              score={item.score}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  card: {},
  container: {
    flex: 1,
  },
});

export default App;
