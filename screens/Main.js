import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Text, ScrollView } from 'react-native';
//import { useRoute } from '@react-navigation/native';

import NavSearchBar from '../components/NavSearchBar';
import InfoPart from '../components/InfoPart';
import PopulerDownloads from '../components/PopulerDownloads';
import LastestMovies from '../components/LatestMovies';
import UpcomingMovies from '../components/UpcomingMovies';
import Footer from '../components/Footer'

import Content from '../screens/Content'


const Main = props => {
  const [content, setContent] = useState(false)

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.navSearchBar}>
          <NavSearchBar/>
        </View>
        <View>
          <Content/>
        </View>
        <View>
          <Footer/>
        </View>
      </ScrollView>
    </View>
  );
}

/* <StatusBar style="auto" /> */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 60
  },
  navSearchBar: {
    backgroundColor: '#696969'
  },
  latestYifyMovies: {
    backgroundColor: '#171717'
  }
});

export default Main