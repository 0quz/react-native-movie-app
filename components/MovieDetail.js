import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MovieDetail = props => {
    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => 
                    props.navigation.navigate('Details',
                    {originalTitle: props.originalTitle ? props.originalTitle : props.originalTitle2})}
            >
                <Image
                    source={props.poster ? props.poster : props.poster2}
                    style={styles.imageFrame}
                />
            </TouchableOpacity>
            <Text style={styles.text}>{props.originalTitle ? props.originalTitle : props.originalTitle2}</Text>
            <Text style={styles.text}>{props.year ? props.year : props.year2}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    imageFrame: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        maxHeight: 257,
        maxWidth: 180,
        marginHorizontal: 8
    },
    text: {
        color: 'white'
    }
})

export default MovieDetail