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
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      height: 16,
      marginHorizontal: 100,
      marginVertical: 10
    },
    text: {
        color: 'white',
        fontSize: 12,
    }
  });

  export default Item