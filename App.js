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
  return(
    <View style={styles.container}>
      <ContentScreen navigation={navigation}/>
    </View>
  )
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

/* <StatusBar style="auto" /> */


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerTitle: () => <NavSearchBarScreen/> }}
        />
        <Stack.Screen 
        name="Details"
        component={DetailsScreen}
        options={{
          headerTitle: () =>  <NavSearchBarScreen/>, 
          headerLeft: null}}
        />
      </Stack.Navigator>
      <FooterScreen/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});