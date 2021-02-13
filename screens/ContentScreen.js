import React, { useEffect, useRef, useState } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import InfoPart from '../components/InfoPart';
import PopulerDownloads from '../components/PopulerDownloads';
import LastestMovies from '../components/LatestMovies';
import UpcomingMovies from '../components/UpcomingMovies';
import { ScrollView } from 'react-native-gesture-handler';
import axios from "axios";
import NavSearchBarScreen from './NavSearchBarScreen'

const top250Movie = require('../data/movie-json-data/json/top-rated-movies-01.json');

const ContentScreen = props => {

    return (
        <ScrollView>
            <NavSearchBarScreen navigation={props.navigation} />
            <ImageBackground source={require("../img/background.jpg")}
                style={{
                    // height: 681,
                    flex: 1,
                    // width: 400,
                    opacity: 1,
                    alignItems: 'center',
                    resizeMode: 'stretch'
                }}
            >
                <View style={{marginVertical: 10}}>
                    <InfoPart />
                </View>
                <View>
                    <PopulerDownloads navigation={props.navigation} originalTitle={"The Matrix"} originalTitle2={"Se7en"} year={"1999"} year2={"1995"} poster={require('../img/the-matrix.jpg')} poster2={require('../img/se7en.jpg')} />
                    <PopulerDownloads navigation={props.navigation} originalTitle={"The Godfather"} originalTitle2={"Star Wars"} year={"1972"} year2={"1977"} poster={require('../img/the-godfather.jpg')} poster2={require('../img/star-wars.jpg')} />
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

});

export default ContentScreen