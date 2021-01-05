import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import InfoPart from '../components/InfoPart';
import PopulerDownloads from '../components/PopulerDownloads';
import LastestMovies from '../components/LatestMovies';
import UpcomingMovies from '../components/UpcomingMovies';

const Content = props => {
    return(
        <View>
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
                    <PopulerDownloads/>
                    <PopulerDownloads/>
                </View>
            </ImageBackground>
            <View style={styles.latestYifyMovies}>
                <LastestMovies/>
                <PopulerDownloads/>
                <PopulerDownloads/>
            </View>
            <View>
                <UpcomingMovies/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    latestYifyMovies: {
      backgroundColor: '#171717'
    }
  });

export default Content