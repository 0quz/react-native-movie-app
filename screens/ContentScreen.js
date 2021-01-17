import React, { useEffect, useRef, useState } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import InfoPart from '../components/InfoPart';
import PopulerDownloads from '../components/PopulerDownloads';
import LastestMovies from '../components/LatestMovies';
import UpcomingMovies from '../components/UpcomingMovies';
import { ScrollView } from 'react-native-gesture-handler';
import axios from "axios";

const ContentScreen = props => {
    return(
        <ScrollView>
            <ImageBackground source={require("../img/background.jpg")}
                style={{
                    height: 500,
                    width: 400,
                    opacity: 1,
                    alignItems:'center',
                    resizeMode: 'stretch'
                    }}
                >
                <View>
                    <InfoPart/>
                </View>
                <View>
                    <PopulerDownloads navigation={props.navigation}/>
                    <PopulerDownloads navigation={props.navigation}/>
                </View>
            </ImageBackground>
            <View style={styles.latestYifyMovies}>
                <LastestMovies/>
                <PopulerDownloads navigation={props.navigation}/>
                <PopulerDownloads navigation={props.navigation}/>
            </View>
            <View>
                <UpcomingMovies/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    latestYifyMovies: {
        backgroundColor: '#171717',
    }
  });

export default ContentScreen