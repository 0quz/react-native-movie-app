import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Item = props => {
    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => 
                    props.navigation.push('Details',
                    {originalTitle: props.Title ? props.Title : False})}
            >
                <Text style={styles.text}>{props.Title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      maxHeight: 20,
      marginHorizontal: 100,
      marginVertical: 10
    },
    text: {
        color: 'white',
        fontSize: 12,
    }
  });

  export default Item