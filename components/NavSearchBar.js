import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import Item from './Item'

const NavSearchBar = props => {
    const [search, setSearch] = useState('')

    const filterList = list => {
        return list.filter(
            listItem =>
                listItem.movie
                .toLowerCase()
                .includes(search.toLowerCase())
        )
    }

    const list = [
        {movie: 'Harry Potter'},
        {movie: 'The Fast And Furious'},
        {movie: 'The Lord of the Rings'},
        {movie: 'Batman'},
      ];

    return(
      <View>
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={require('../img/logo-YTS.png')}
          />
          <TextInput
              placeholder="Quick search"
              onChangeText={search => setSearch(search)}
              style={styles.searchBar}
          />
          <Button title="4K" onPress={() => console.log("4K")}/>
          <Button title="TR" onPress={() => console.log("TR")}/>
          <Button title="BM" onPress={() => console.log("BM")}/>
          <Button title="LG" onPress={() => console.log("LG")}/>
        </View>
        {search ? (filterList(list).map((listItem, index) => (
            <Item key={index} movie={listItem.movie} />
        ))) : null}
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#696969',
      alignItems: 'center', // yukarıda ve aşağıdan centerlıyor
      justifyContent: 'center', // sağdan soldan centerlıyor
      flexDirection: 'row'
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

export default NavSearchBar