
import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, TouchableOpacity} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from '@expo/vector-icons/AntDesign'
import { StatusBar } from 'expo-status-bar'


// import stuff from other files
import SignUpButton from '../shared/button_1'
import LogInButton from '../shared/button_2'
import * as firebase from 'firebase'


const DeviceHeight = Dimensions.get('screen').height

export default class Login extends React.Component{
    static navigationOptions = {
        headerShown: false
    }
    
    state = {
        email: "",
        password: "",
        errorMessage: null
    }

    handleLogin = () => {

        const { email, password } = this.state;
        firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch(error => this.setState({ errorMessage: error.message}));
    };

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

                    {/* FIX THIS PLEASE */}
                    <Text style={styles.welcome_txt}> Welcome to DCU Hub! </Text> 
                    {/* trying to do error messages */}

                    <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error_txt}>{this.state.errorMessage}</Text>}
                    </View>


                    {/* this is for the email address part */}
                    <View style={styles.email_add}>
                        <Icon name="mail" color="#25afcd" size={25}/>
                        <TextInput 
                            style={styles.placeholder_text}
                            placeholder="enter your dcu email address"
                            onChangeText={email => this.setState({email})}
                            value={this.state.email}>

                        </TextInput>
                    </View>
                
                    {/* this is for the password part */}
                    <View style={styles.pass_word}>
                        <Icon name="lock1" color="#25afcd" size={25}/>
                        <TextInput 
                            style={styles.placeholder_text}
                            secureTextEntry={true}  // SECURE PASSWORD ie hides the texts
                            placeholder="enter your password"
                            autoCapitalize="none"
                            onChangeText={password => this.setState({password})}
                            value={this.state.password}
                            ></TextInput>
                    </View>
                
                    {/* THIS IS A BUTTON THAT NAVIGATES TO THE NEWSFEED SECTION - STILL HAVE TO IMPLEMENT THIS ONE
                        ALSO LINKS TO FIREBASE AUTHENTICATION */}
                    <View style={{marginTop: 20}}>
                        <LogInButton text='LOG IN' onPress={this.handleLogin}/>
                    </View>

                    {/* THIS IS A BUTTON THAT NAVIGATES TO THE REGISTER SECTION/SCREEN  */}
                    <View>
                        <SignUpButton text='SIGN UP' onPress={() => this.props.navigation.navigate('SignUp')}/>
                    </View>
                    
                    <TouchableOpacity style={styles.forgot_pass} onPress={() => this.props.navigation.navigate('ResetPassword')}>
                        <Text style={{color: "#d40059", fontSize: 18}}>Forgot Password?</Text>
                    </TouchableOpacity>


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
    email_add: {
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:40,
        marginTop: 20,
        paddingHorizontal:10,
        paddingVertical: 7,
        borderWidth: 1.5,
        borderColor: "#25afcd",
        borderRadius: 10,
    },

    pass_word: {
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:40,
        borderWidth: 1.5,
        marginTop:15,
        paddingHorizontal:10,
        borderColor:"#25afcd",
        borderRadius:10,
        paddingVertical: 7,
    },
    errorMessage: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30,
        marginTop: 50
    },
    error_txt:{
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

    welcome_txt: {
        fontSize: 25, 
        alignSelf: "center",
        marginTop: -50,
        fontWeight: "300"
    },

    placeholder_text: {
        paddingHorizontal: 10
    }, 

    forgot_pass: {
        marginTop: 10,
        alignSelf: 'center'
    }
})


// NOTES
// fix the fonts so no errors will occur, include the fonts into the system to make it work
// make the buttons work too
// comment is ctrl + / 

// colours 
// blue #25afcd
// orange #f4a446
// pink #d40059
