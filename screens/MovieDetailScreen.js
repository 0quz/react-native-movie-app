import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Text, Button, Image, ImageBackground } from 'react-native'
import NavSearchBarScreen from './NavSearchBarScreen'
import { ScrollView } from 'react-native-gesture-handler';
import axios from "axios"

const MovieDetailScreen = props => {
    const [movieDetail, setMovieDetail] = useState([])
    const {originalTitle} = props.route.params

    useEffect(() => {
        axios.get('http://www.omdbapi.com/?t='+originalTitle+'&apikey=db666f83')
        .then(response => {
            console.log(response.data)
            setMovieDetail(response.data)
        })
    }, [originalTitle])

    return (
        <ScrollView>
            <NavSearchBarScreen navigation={props.navigation}/>
            <ImageBackground source={require("../img/background.jpg")}
                style={{
                    height: 500,
                    width: 400,
                    opacity: 1,
                    alignItems:'center',
                    resizeMode: 'stretch'
                    }}
                >
                <Text style={styles.text}>{movieDetail.Title}</Text>
                <Text style={styles.text}>{movieDetail.Year}</Text>
                <Text style={styles.text}>{movieDetail.Genre}</Text>
                <Image style={{width: 150, height: 150}} source={{uri: movieDetail.Poster}}/>
                <Text style={styles.text}>{movieDetail.imdbRating}</Text>
                <Text style={styles.text}>{movieDetail.Plot}</Text>
                <Text style={styles.text}>{movieDetail.Director}</Text>
                <Text style={styles.text}>{movieDetail.Actors}</Text>
            </ImageBackground>
            <Button title="Go to Home" onPress={() => props.navigation.navigate('Home')} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    text: {
        color: 'white'
    }
})

export default MovieDetailScreen