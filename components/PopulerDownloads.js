import React, { useState } from 'react'
import { View, Image, StyleSheet } from 'react-native'

import MovieDetail from './MovieDetail'

const PopulerDownloads = props => {

    return(
        <View style={styles.container}>
            <View>
                <MovieDetail navigation={props.navigation}/>
            </View>
            <View>
                <MovieDetail navigation={props.navigation}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
        marginRight: 10
    }
})

export default PopulerDownloads