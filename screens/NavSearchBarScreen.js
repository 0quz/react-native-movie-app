import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image, Button, Text, ScrollView } from 'react-native';
import Item from '../components/Item'
import axios from "axios";

const NavSearchBarScreen = props => {
    const [search, setSearch] = useState('')

    const filterSearch = search => {
      axios.get('http://www.omdbapi.com/?s='+search+'&apikey=db666f83')
      .then(reponse => {
        if (reponse.data.Response == "True"){
          setSearch(reponse.data.Search)
        } else {
          setSearch('')
        }
      })
    }

    const cleanFilter = () => {
      setSearch('')
    }

    return(
      <View>
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={require('../img/logo.png')}
          />
          <TextInput
              placeholder="Quick search"
              onChangeText={filterSearch}
              style={styles.searchBar}
          />
          <Button title="4K" onPress={() => console.log("4K")}/>
          <Button title="TR" onPress={() => console.log("TR")}/>
          <Button title="BM" onPress={() => console.log("BM")}/>
          <Button title="LG" onPress={() => console.log("LG")}/>
        </View>
          <View styles={{alignItems: 'stretch'}}>
          {search ? (search.map((result) => (
            <Item navigation={props.navigation} key={result.imdbID} Title={result.Title} onClean={cleanFilter}/>
          ))) : null}
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#696969',
      alignItems: 'center', // yukarıda ve aşağıdan centerlıyor
      justifyContent: 'center', // sağdan soldan centerlıyor
      flexDirection: 'row',
      flex: 1
    },
    searchBar: {
      fontSize: 12,
      margin: 10,
      width: '40%',
      height: 35,
      backgroundColor: 'white',
    },
    img: {
      height: 25,
      width: 80
    }
  });

export default NavSearchBarScreen
