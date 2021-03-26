import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';

export class Card extends Component {
    constructor(props){
        super(props)        
    }

    render(){
        const {name, address, uri, bedrooms, bathrooms, size, price} = this.props

        return(
        <View style={styles.container}>
            <View style={styles.leftBox}>
                <Image source={{uri: `${uri}`}} style={styles.card}></Image>
                <Text style={styles.score}>4.7</Text>
            </View>
            <View style={styles.rightBox}>
                <Text style={{fontSize: 20}}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
                <View style={styles.specs}>
                    <Text>{bedrooms}</Text>
                    <Text>{bathrooms}</Text>
                    <Text>{size} ft²</Text>
                </View>
                <Text style={{fontSize: 20}}>${price}/m</Text>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        height: 110,
        width: 110,
        borderRadius: 10
    },
    container:{
        height:150,
        flexDirection: 'row',
        backgroundColor: '#E9f6f9',
        margin: 10,
        borderRadius: 10,
        paddingTop: 15,
        paddingBottom: 15,
    },
    leftBox:{
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',     
    },
    rightBox:{
        flex: 4,
        justifyContent: 'space-evenly'
    },
    address:{
        color: '#737373'
    },
    specs:{
        flexDirection: 'row',
    },
    score:{
        position: 'absolute',
        color: '#826b32',
        fontWeight: '700',
        backgroundColor: '#fbedb7',
        padding: 7,
        borderRadius: 10,
        top: 75
    }
  })