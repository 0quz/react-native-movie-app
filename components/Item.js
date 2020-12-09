import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Item = props => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.movie}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'blue',
      alignItems: 'center',
      height: 90,
      margin: 10,
      width: '90%'
    },
    text: {
        color: 'white',
        fontSize: 24,
    }
  });

  export default Item