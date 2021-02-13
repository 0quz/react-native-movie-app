import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NavSearchBarScreen from './screens/NavSearchBarScreen'
import ContentScreen from './screens/ContentScreen'
import FooterScreen from './screens/FooterScreen'
import MovieDetailScreen from './screens/MovieDetailScreen'
import MovieDetail from './components/MovieDetail'


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ContentScreen navigation={navigation} />
    </View>
  )
}

function DetailsScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <MovieDetailScreen navigation={navigation} route={route} />
    </View>
  );
}

const Stack = createStackNavigator();

/* <StatusBar style="auto" /> */

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => null, headerShown: false
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerTitle: () => null, headerShown: false
          }}
        />
      </Stack.Navigator>
      {/* <FooterScreen/> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});