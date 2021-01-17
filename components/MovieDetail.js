import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MovieDetail = props => {
    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.navigation.navigate('Details')}
            >
            <Image
                source={require("../img/medium-cover.jpg")}
                style={styles.content}
            />
            </TouchableOpacity>
            <Text style={styles.text}>Movie Name</Text>
            <Text style={styles.text}>Year</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    content: {
        resizeMode: 'stretch',
        maxHeight: 180,
        maxWidth: 180,
        marginHorizontal: 8
    },
    text: {
        color: 'white'
    }
})

export default MovieDetail