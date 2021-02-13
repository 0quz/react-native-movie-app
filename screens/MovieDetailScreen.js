import React, { useEffect, useCallback, useState } from 'react'
import { View, StyleSheet, Text, Button, Image, ImageBackground } from 'react-native'
import NavSearchBarScreen from './NavSearchBarScreen'
import { ScrollView } from 'react-native-gesture-handler';
import axios from "axios"
// import YoutubePlayer from "react-native-youtube-iframe";

const MovieDetailScreen = props => {
    const [movieDetail, setMovieDetail] = useState([])
    const { originalTitle } = props.route.params
    
    // const [playing, setPlaying] = useState(false);

    // const onStateChange = useCallback((state) => {
    //     if (state === "ended") {
    //         setPlaying(false);
    //         Alert.alert("video has finished playing!");
    //     }
    // }, []);

    // const togglePlaying = useCallback(() => {
    //     setPlaying((prev) => !prev);
    // }, []);


    useEffect(() => {
        axios.get('http://www.omdbapi.com/?t=' + originalTitle + '&apikey=db666f83')
            .then(response => {
                // console.log(response.data)
                setMovieDetail(response.data)
            })
    }, [originalTitle])

    return (
        <ScrollView>
            <NavSearchBarScreen navigation={props.navigation} />
            <ImageBackground source={require("../img/background.jpg")}
                style={{
                    height: 621,
                    width: '100%',
                    opacity: 1,
                    alignItems: 'center',
                    resizeMode: 'stretch',
                }}
            >

                <View style={styles.container}>
                    <View style={{ flex: 1 }}>
                        <Image style={styles.imageFrame} source={{ uri: movieDetail.Poster }} />
                    </View>
                    <View style={styles.infoBox}>
                        <Text style={styles.text}>{movieDetail.Title}</Text>
                        <Text style={styles.text}>{movieDetail.Year}</Text>
                        <Text style={styles.text}>{movieDetail.Genre}</Text>
                        <Text style={styles.text}>{movieDetail.imdbRating}</Text>
                    </View>
                </View>
                <View style={styles.container2}>
                    {/* <YoutubePlayer
                        height={300}
                        play={playing}
                        videoId={"iee2TATGMyI"}
                        onChangeState={onStateChange}
                    />
                    <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
                    <Text style={styles.detailsTitle}>Synopsis</Text>
                    <Text style={styles.detailsText}>{movieDetail.Plot}</Text>
                    <Text style={styles.detailsTitle}>Director</Text>
                    <Text style={styles.detailsText}>{movieDetail.Director}</Text>
                    <Text style={styles.detailsTitle}>Cast</Text>
                    {/* <Text style={styles.detailsText}>{movieDetail.Actors}</Text> */}
                    {movieDetail.Actors && movieDetail.Actors.split(', ').map((item, key) => (
                        <Text key={key} style={styles.detailsText}> {item} </Text>)
                    )}
                </View>
            </ImageBackground>
            <Button title="Go to Home" onPress={() => props.navigation.navigate('Home')} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: .8,
        backgroundColor: 'rgba( 25, 25, 25, 0.8)',
        padding: 10,
        width: '100%',
        // backgroundColor: 'red',
        // justifyContent: 'space-between',
        flexDirection: 'row', borderBottomColor: 'silver',
        borderBottomWidth: 1,
    },
    container2: {
        flex: 1,
        height: 150,
        padding: 10,
        // justifyContent: 'space-around',
        backgroundColor: 'rgba(25, 25, 25, 0.8)',
    },
    infoBox: {
        alignItems: 'flex-end',
        flex: 2,
        maxWidth: 200,
        justifyContent: 'space-around',
    },
    text: {
        color: 'white',
        textAlign: 'right',

    },
    detailsText: {
        margin: 5,
        color: 'silver',
        textAlign: 'left',
    },
    detailsTitle: {
        margin: 5,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left',
    },
    imageFrame: {
        width: 150,
        height: 250,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 3,
        // background: rgba(76, 175, 80, 0.3)
    }

})

export default MovieDetailScreen