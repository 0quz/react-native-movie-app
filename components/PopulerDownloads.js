import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import MovieDetail from './MovieDetail'

const PopulerDownloads = props => {
    return(
        <View style={styles.container}>
            <View>
                <MovieDetail/>
            </View>
            <View>
                <MovieDetail/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5
    }
})

export default PopulerDownloads