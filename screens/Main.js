import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NavSearchBar from '../components/NavSearchBar';
import InfoPart from '../components/InfoPart';
import PopulerDownloads from '../components/PopulerDownloads';
import LastestMovies from '../components/LatestMovies';
import UpcomingMovies from '../components/UpcomingMovies';
import Footer from '../components/Footer'


const Main = props => {
  return (
    <View>
      <View style={styles.navSearchBar}>
        <NavSearchBar/>
      </View>
      <View>
        <InfoPart/>
      </View>
      <View>
        <PopulerDownloads/>
      </View>
      <View>
        <LastestMovies/>
      </View>
      <View>
        <UpcomingMovies/>
      </View>
      <View>
        <Footer/>
      </View>
    </View>
  );
}

/* <StatusBar style="auto" /> */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navSearchBar: {
    height: '50%'
  }
});

export default Main