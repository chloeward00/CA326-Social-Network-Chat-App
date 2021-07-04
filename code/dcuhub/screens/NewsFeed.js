
import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StatusBar } from 'expo-status-bar';


export default class NewsFeed extends React.Component{
    render () {
        return (
            <KeyboardAwareScrollView>
            <SafeAreaView style={styles.container}>
            <StatusBar style="auto"/>
                                
                {/* THIS IS THE BASIC TOP HEADER DESIGN FOR NEWS FEED AND CHATS(?)
                    CHANGE THE FONT DESIGN AS WELL AND TRY RUNNING IT ON ANDROID AS WELL */}
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}} >
                        <View style={{
                            borderColor: "black",
                            borderWidth: 0,
                            paddingVertical: 0,
                            paddingHorizontal: 20,
                            borderRadius: 20,
                            marginTop: 30,
                            marginBottom: 30,
                            backgroundColor: '#25afcd'
                        }}>

                            <Text style={{color: 'white', paddingTop: 10, fontSize: 25}}> NEWS FEED </Text>     
                        </View>

                        <View>  
                            <Image 
                            source={require("../assets/images/dcuhublogo_higherres.png")}
                            resizeMode="contain"
                            resizeMode="center"
                            style={{width: 110, height: 110}}>
                            </Image>
                        </View>
                </View>
            
            </SafeAreaView>
            </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
        image_style: {
        width: 100, 
        height: 100,     
    }

})



// #FFBB24 this orange or
// #25afcd this blue