import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const InfoPart = props => {
    return(
        <View style={styles.container}>
            <View style={{marginLeft: 130}}>
                <Text style={styles.text}>Populer Downloads</Text>
            </View>
            <View style={{marginLeft: 65}}>
                <Button title="more..."/>
            </View>
            <View
            style={{
                borderBottomColor: 'red',
                borderBottomWidth: 1,
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    }
})

export default InfoPart