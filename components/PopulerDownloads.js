import React, { useState } from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

import MovieDetail from './MovieDetail'

const PopulerDownloads = props => {

    return(
        <View style={styles.container}>
            <View>
                <MovieDetail navigation={props.navigation} originalTitle={props.originalTitle} year={props.year} poster={props.poster}/>
            </View>
            <View>
                <MovieDetail navigation={props.navigation} originalTitle2={props.originalTitle2} year={props.year2} poster2={props.poster2}/>
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