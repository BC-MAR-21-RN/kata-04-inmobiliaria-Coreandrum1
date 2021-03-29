import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";

export class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fav: false,
    };
  }

  render() {
    const {
      name,
      address,
      uri,
      bedrooms,
      bathrooms,
      size,
      price,
      score,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.leftBox}>
          <Image source={{ uri: `${uri}` }} style={styles.card}></Image>
          <View style={styles.score}>
            <Icon
              size={18}
              name="star"
              color="#eeba00"
              style={styles.scoreIcon}
            />
            <Text style={styles.scoreText}>{score}</Text>
          </View>
        </View>
        <View style={styles.rightBox}>
          <Text style={{ fontSize: 20 }}>{name}</Text>
          <View style={styles.specs}>
            <Icon
              size={18}
              name="map-marker"
              type="font-awesome"
              color="#80838f"
              style={styles.scoreIcon}
            />
            <Text style={styles.address}>{address}</Text>
          </View>
          <View style={styles.specs}>
            <Icon
              size={18}
              name="bed"
              type="font-awesome"
              color="#80838f"
              style={styles.scoreIcon}
            />
            <Text style={styles.scoreText2}>{bedrooms}</Text>
            <Icon
              size={18}
              name="shower"
              type="font-awesome"
              color="#80838f"
              style={styles.scoreIcon}
            />
            <Text style={styles.scoreText2}>{bathrooms}</Text>
            <Icon
              size={18}
              name="square"
              type="font-awesome"
              color="#80838f"
              style={styles.scoreIcon}
            />
            <Text style={styles.scoreText2}>{size} ft²</Text>
          </View>
          <View style={styles.specs}>
            <Text style={{ fontSize: 20 }}>${price}/m</Text>
            <TouchableOpacity
              style={styles.fav}
              onPress={() => {
                this.setState((prevState) => ({
                  fav: !prevState.fav,
                }));
              }}
            >
              <Icon
                size={20}
                name="heart"
                type="font-awesome"
                color={this.state.fav ? "#ff5050" : "#ffff"}
                style={styles.favIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    height: 110,
    width: 110,
    borderRadius: 10,
  },
  container: {
    height: 150,
    flexDirection: "row",
    backgroundColor: "#E9f6f9",
    margin: 10,
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  leftBox: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  rightBox: {
    flex: 4,
    justifyContent: "space-evenly",
  },
  address: {
    color: "#737373",
    paddingLeft: 5,
  },
  specs: {
    flexDirection: "row",
  },
  score: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "#fbedb7",
    padding: 7,
    borderRadius: 13,
    top: 75,
    paddingRight: 10,
  },
  scoreText: {
    fontWeight: "700",
    color: "#826b32",
  },
  scoreText2: {
    paddingRight: 20,
  },
  scoreItem: {
    height: 3,
    width: 3,
  },
  scoreIcon: {
    paddingRight: 4,
  },
  fav: {
    borderRadius: 50,
    backgroundColor: "#00b074",
    padding: 10,
    position: "absolute",
    left: 180,
  },
  favIcon: {},
});
