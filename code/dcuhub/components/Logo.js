import React from 'react';
import { StyleSheet, Text, Image, View, StatusBar } from 'react-native';

export default function Logo() {
    return (
        <View style={styles.container}>
            <Image 
            source={require("../assets/images/dcuhub_logo.png")}
            resizeMode="contain" 
            style={{width:350}}>
            </Image>
            <Text style={styles.logotext}>Welcome to DCU HUB!</Text>
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
    logotext: {
        fontSize: 25

    }
});
  