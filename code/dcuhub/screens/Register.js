
import React, {useContext, useState} from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, TouchableOpacity} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StatusBar } from 'expo-status-bar'
import * as firebase from 'firebase'
import { AuthContext } from '../navigations/AuthProvider'
 
import Button2 from '../shared/button_2'

const DeviceHeight = Dimensions.get('screen').height;

export default class Register extends React.Component {
    static navigationOptions = {
        headerShown: false
    };

    state = {
        name:"",
        email: "",
        password: "",
        errorMessage: null
    };
 
    handleSignUp = () => {

        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            });
        })
        .catch(error => this.setState({errorMessage: error.message}))
    };
    render () {
    
        return (
            <KeyboardAwareScrollView>
            <View style={styles.container}>
                <StatusBar style="auto"/>
                    
                    <View style={styles.image_view}>  
                        <Image 
                        source={require("../assets/images/dcuhublogo_higherres.png")}
                        resizeMode="contain"
                        resizeMode="center"
                        style={styles.image_style}>
                        </Image>
                    </View> 

                    <View style={{
                        alignSelf: 'center',
                        marginTop: -50,
                        marginBottom: 50
                    }}>
                        <Text style={{
                            textAlign: 'center'
                        }}>{'Hello! \nSign up to get started.'} </Text>
                    </View>

                    <View style={styles.errorMessage}>
                        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                    </View>

                   < View style={styles.top_placeholder}>
                        <TextInput 
                            style={styles.placeholder_text}
                            placeholder="FULL NAME" autoCapitalize="none" onChangeText={name => this.setState({name})}
                            value={this.state.name}
                            ></TextInput>
                    </View>

                    

                    <View style={styles.placeholder_style}>
                        <TextInput 
                            style={styles.placeholder_text}
                            placeholder="DCU EMAIL" autoCapitalize="none" onChangeText={email => this.setState({email})}
                            value={this.state.email}
                            ></TextInput>
                    </View>

                                        
                    <View style={styles.placeholder_style}>
                        <TextInput 
                            style={styles.placeholder_text}
                            secureTextEntry={true}  // SECURE PASSWORD ie hides the texts
                            placeholder="PASSWORD" secureTextEntry autoCapitalize="none" onChangeText={password => this.setState({password})}
                            value={this.state.password}
                            ></TextInput>
                    </View>

                    {/* THIS ALSO USES FIREBASE AUTHENTICATION
                        ONCED SIGNED UP, IT SHOULD TAKE THE USER TO THE
                        CREATE PROFILE SECTION/SCREEN */}
                    <View>
                        <Button2 text='SIGN UP' onPress={this.handleSignUp}/>
                    </View>


                    <View style={styles.to_signin}>
                    <Text style={{fontSize: 18}}> Already have an account? </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={{color: "#d40059", fontSize: 18}}>Sign In</Text>
                    </TouchableOpacity>
                    </View>
            
            </View>
            </KeyboardAwareScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container : {
        height: DeviceHeight,
        backgroundColor: "white"
    },
    placeholder_style: {
        marginHorizontal: 40,
        borderWidth: 1.5,
        marginTop:15,
        paddingHorizontal:10,
        borderColor:"#25afcd",
        borderRadius:10,
        paddingVertical: 10// size of the placeholder
    }, 

    top_placeholder: {
        marginHorizontal: 40,
        borderWidth: 1.5,
        marginTop: -10,
        paddingHorizontal:10,
        borderColor:"#25afcd",
        borderRadius: 10,
        paddingVertical: 10
    },

    placeholder_text: {
        paddingHorizontal:10
    }, 
    errorMessage: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30,
        marginTop: -20,
        marginBottom: 30
    },
    error:{
        color: "#d40059",
        fontSize: 15,
        fontWeight: "600",
        textAlign: "center"
    },
    image_style: {
        width: Dimensions.get('screen').width, 
        height: Dimensions.get('screen').height / 2
    },

    image_view: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: -40
    },

    to_signin: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "center",
        marginTop: 10,
    }
})