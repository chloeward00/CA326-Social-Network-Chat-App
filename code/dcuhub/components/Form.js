import React from 'react';
import { StyleSheet, Text, Image, View, StatusBar, TextInput } from 'react-native';

export default function Logo() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.inputBox}/>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputBox: {
        width: 300,
        height: 50,
        borderWidth: 2,
        borderColor: '#25afcd',
        borderRadius: 25,
    }
});
  