import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
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
            <TextInput
                placeholder="Quick search"
                onChangeText={search => setSearch(search)}
                style={styles.searchBar}
            />
        </View>
          <View>
              {search ? (filterList(list).map((listItem, index) => (
                  <Item key={index} movie={listItem.movie} />
              ))) : null}
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'gray',
      alignItems: 'center',
    },
    searchBar: {
      fontSize: 12,
      margin: 10,
      width: '90%',
      height: 30,
      backgroundColor: 'white',
    },
    itemText: {
      margin: 10,
      color: 'white',
      fontSize: 24,
      backgroundColor: 'blue',
      width: '30%',
      height: 50
    }
  });

export default NavSearchBar