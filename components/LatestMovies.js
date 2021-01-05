import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const LastestMovies = props => {
    return(
        <View style={styles.cotainer}>
            <Text style = {styles.text}>Latest Yify Movies</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cotainer: {
        marginHorizontal: 10
    },
    text: {
        color: 'white'
    }
})

export default LastestMovies