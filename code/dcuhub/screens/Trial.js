
// THIS TRIAL PAGE IS THE LOGIN PAGE, BASICALLY THE BASE PAGE 
// THIS IS WHERE I EDIT EVERYTHING FOR THE BASE TEMPLATE FOR 3 SCREENS

import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TextInput, TouchableOpacity, Button, StatusBar} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// import stuff from other files
import SignUpButton from '../shared/button_1'
import LogInButton from '../shared/button_2'

export default class Trial extends React.Component{
    render() {
        return (
            <KeyboardAwareScrollView>
            <View>
            <StatusBar backgroundColor="grey" barStyle="dark-content"/>
            <View style={{
                    alignSelf: 'center',
                    justifyContent: 'center'
                }}>
                
                <Image 
                source={require("../assets/images/dcuhublogo_higherres.png")}
                resizeMode="contain"
                resizeMode="center"
                style={{
                    //width: 400,
                    //height: 500,
                    width: Dimensions.get('screen').width, 
                    height: Dimensions.get('screen').height / 2,                     
                    }}>
                </Image>
                </View> 

                <Text style={{
                    fontSize:30, 
                    alignSelf: "center",
                    marginTop: -50
                    }}> 
                    Welcome to DCU Hub! </Text> 
            
                    <View style={styles.email_add}>
                    <Icon name="mail" color="#25afcd" size={25}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                        placeholder="enter your dcu email address"
                    />
                </View>
                
                {/* this is for the password part */}
                <View style={styles.pass_word}>
                    <Icon name="lock1" color="#25afcd" size={25}/>
                    <TextInput 
                        style={{paddingHorizontal:10}}
                        secureTextEntry={true}  // SECURE PASSWORD
                        placeholder="enter your password"
                    /> 
                </View>
                
                {/* THIS IS A BUTTON THAT NAVIGATES TO THE NEWSFEED SECTION */}
                <View>
                    <LogInButton text='LOG IN' onPress={this.props.handleSubmit}/>
                </View>

                {/* THIS IS A BUTTON THAT NAVIGATES TO THE REGISTER SECTION/SCREEN  */}
                <View>
                    <SignUpButton text='SIGN UP' onPress={() => this.props.navigation.navigate('SignUp')}/>
                </View>
                
                {/* THIS IS A BUTTON THAT NAVIGATES TO CHANGEPASSWORD SCREEN */}
                
                {/*
                <TouchableOpacity>
                    <Text style={{
                        alignSelf: "center",
                        color: "#d40059",
                        paddingVertical: 15
                    }}> forgot password? </Text>
                </TouchableOpacity> */}

                
                <Button title="Forgot Password?" color="#d40059" onPress={() => this.props.navigation.navigate('ResetPassword')}/>

            </View>
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create({
    email_add: {
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:40,
        marginTop:30,
        paddingHorizontal:10,
        paddingVertical:7, 
        borderWidth: 2,
        borderColor: "#25afcd",
        borderRadius: 23,
    },

    pass_word: {
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:40,
        borderWidth:2,
        marginTop:15,
        paddingHorizontal:10,
        borderColor:"#25afcd",
        borderRadius:23,
        paddingVertical:7
    }

})
