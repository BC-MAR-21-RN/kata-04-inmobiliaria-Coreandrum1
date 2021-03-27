import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';

// get our fontawesome imports
import { Icon } from 'react-native-elements'

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
                <View style={styles.score}>
                    <Icon size={18} name='star' color='#eeba00' style={styles.scoreIcon}/>
                    <Text style={styles.scoreText}>4.7</Text>
                </View>
            </View>
            <View style={styles.rightBox}>
                <Text style={{fontSize: 20}}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
                <View style={styles.specs}>
                    <Icon size={18} name='bed' type='font-awesome' color='#80838f' style={styles.scoreIcon}/>
                    <Text style={styles.scoreText2}>{bedrooms}</Text>
                    <Icon size={18} name='shower' type='font-awesome' color='#80838f' style={styles.scoreIcon}/>
                    <Text style={styles.scoreText2}>{bathrooms}</Text>
                    <Icon size={18} name='square' type='font-awesome' color='#80838f' style={styles.scoreIcon}/>
                    <Text style={styles.scoreText2}>{size} ft²</Text>
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
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: '#fbedb7',
        padding: 7,
        borderRadius: 10,
        top: 75
    },
    scoreText: {
        fontWeight: '700',
        color: '#826b32',

    },
    scoreText2: {
        paddingRight: 20
    },
    scoreItem:{
        height: 3,
        width: 3,
    },
    scoreIcon:{
        paddingRight: 4
    }
  })