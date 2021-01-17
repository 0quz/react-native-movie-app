import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const FooterScreen = props => {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Resim</Text>
                    <Text style={styles.text}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Resim</Text>
                    <Text style={styles.text}>Browse</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container1}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Resim</Text>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Resim</Text>
                    <Text style={styles.text}>Register</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container1}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Resim</Text>
                    <Text style={styles.text}>Requests</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Resim</Text>
                    <Text style={styles.text}>Suggestions</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#696969'
    },
    container1: {
        justifyContent: 'center',
    },
    button: {
        marginHorizontal: 38
    },
    text: {
        color: 'white'
    }
})

export default FooterScreen
