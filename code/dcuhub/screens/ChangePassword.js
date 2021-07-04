
import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TextInput} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StatusBar } from 'expo-status-bar'
import * as firebase from 'firebase'


import Button2 from '../shared/button_2'

const DeviceHeight = Dimensions.get('screen').height

export default class ChangePassword extends React.Component{
    state = {
        name: "",
        email: ""
     
    };
    
    forgotPassword = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
          .then(function () {
            alert('Please check your email...')
          }).catch(error => this.setState({errorMessage: error.message}))
          
        }

    render() {
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

                    <View style={styles.errorMessage}>
                     {this.state.errorMessage && <Text style={styles.error_txt}>{this.state.errorMessage}</Text>}
                    </View>

                    <View style={styles.placeholder_style}>
                        <TextInput 
                            style={styles.placeholder_text}
                            
                            placeholder="enter your dcu email address" onChangeText={email => this.setState({email})}
                            value={this.state.email}/> 
                    </View>

                    <View>
                        <Button2 text='RESET' onPress={ () => this.props.navigation.navigate('Login')}/>
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
        marginHorizontal:40,
        borderWidth: 2,
        marginTop: -50,
        paddingHorizontal: 10,
        borderColor:"#25afcd",
        borderRadius: 10,
        paddingVertical: 10 // size of the placeholder
    }, 

    placeholder_text: {
        paddingHorizontal:10
    }, 
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error_txt:{
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    image_style: {
        width: Dimensions.get('screen').width, 
        height: Dimensions.get('screen').height / 2
    },

    image_view: {
        alignSelf: 'center',
        justifyContent: 'center'
    }

})

//<Button2 text='Reset password' onPress={this.forgotPassword}/>

// change the reset password back to original after testing