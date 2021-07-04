
import React from 'react'
import {View, Button, StyleSheet, Image, TouchableOpacity, Dimensions, Text} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StatusBar } from 'expo-status-bar';
import {Title} from 'react-native-paper'
import * as firebase from 'firebase'



export default class UserProfile extends React.Component{

    state = {
        name:"",
        email: "",
        password: "",
        errorMessage: null
    };
 
   
    componentDidMount(){
        const {email, displayName,Code} = firebase.auth().currentUser
        
        this.setState({email, displayName,Code});
    }

    signOutUser = () => {

        firebase.auth().signOut();
    };

    render () { 
        return (
            <KeyboardAwareScrollView>
            <SafeAreaView style={styles.container}>
                <StatusBar style="auto"/>
                <View>

                    <View style={{
                        marginTop: 30,

                    }}>
                        {/*
                        <View>  
                            <Image 
                            source={require("../assets/images/doodle_bg.jpg")}
                            resizeMode="contain"
                            resizeMode="center"
                            style={{
                                //width: 110, 
                                //height: 110,
                                width: Dimensions.get('screen').width, 
                                height: Dimensions.get('screen').height / 2
                                }}>
                            </Image>
                        </View> */}

                        <View style={styles.circle_avatar}>
                            {/* this is for the profile picture */}
                        </View>
                    </View>

                        {/* THIS IS FOR THE NAME AND COURSE
                            FIREBASE MUST ALSO BE ADDED HERE FOR THE UPDATE NAME AND COURSE */}

                        <View style={{
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            paddingTop: 10,

                            }}>
                            <Title style={styles.name}>{this.state.displayName}</Title>
                            <Text style={styles.course}>CASE 3</Text>
                        </View>
                        

                        {/* CREATE A BIO FOR THE USER */}
                        <View style={{
                            alignSelf: 'center',
                            paddingHorizontal: 30,
                            paddingVertical: 5, 
                            borderWidth: 0.3,
                            borderColor: "grey",
                            borderRadius: 5,
                            marginTop: 10,
                        }}>
                            <Text style={{color: "grey"}}>Public Relations Officer of DCU Filipino Society</Text>
                        </View>


                        <View style={styles.links}>
                            <View style={styles.row}>
                                <Ionicons name="ios-mail" size={18} color="#25afcd"/> 
                                <Text style={styles.email}>joanna.talvo2@mail.dcu.ie</Text>
                            </View>
                            <View style={styles.row}>
                                <FontAwesome5 name="spotify" size={18} color="#25afcd" />                                
                                <Text style={styles.email}>lorisvenyor</Text>
                            </View>
                            <View style={styles.row}>
                                <FontAwesome5 name="github" size={18} color="#FFBB24" />
                                <Text style={styles.email}>lorisvenyor</Text>
                            </View>
                            <View style={styles.row}>
                                <FontAwesome5 name="linkedin" size={18} color="#FF9E0B" />                                
                                <Text style={styles.email}>Joanna Talvo</Text>
                            </View>
                        </View>

                        {/* THIS SECTION IS FOR THE TIMETABLE (INSERT API OPENTIMETABLE HERE) */}
                        <View style={styles.timetable}>
                            <Text style={{color: "white"}}> INSERT TIMETABLE HERE</Text>
                        </View>
                        

                        {/* THIS SECTION IS FOR THE LOGOUT FUNCTION */}

                    <View style={{
                        flexDirection: 'row', 
                        justifyContent: 'space-around',
                        marginTop: 30,
                        marginBottom: 50
                    }}>
                         <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                                <View style={{
                                    backgroundColor: "#FF9E0B",
                                    paddingVertical: 5,
                                    paddingHorizontal: 10,
                                    borderRadius: 10,
                                    }}>
                                    <Text style={{
                                        color: "white",
                                        fontSize: 20
                                    }}>EDIT PROFILE</Text>
                                </View>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={this.signOutUser}>
                                <View style={{
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: "#FF9E0B",
                                    paddingVertical: 5,
                                    paddingHorizontal: 10,
                                    borderRadius: 10,
                                   
                                    }}>
                                    <Text style={{
                                        color: "white",
                                        fontSize: 20
                                    }}>LOG OUT </Text>
                                </View>
                        </TouchableOpacity>
                        
                    </View>


                </View>
            </SafeAreaView>
            </KeyboardAwareScrollView>

        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    avatar_image: {
        alignItems: 'center',
        marginTop: 50,
        backgroundColor: "yellow"
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingBottom: 0
    },
    course: {
        fontSize: 18,
        fontWeight: '500',
        paddingBottom: 10

    },

    links: {
        alignSelf: 'center', // this works like magic omg it centers the whole thing inside the view not per item
        paddingHorizontal: 10,
        paddingVertical: 10, 
        borderWidth: 0,
        borderColor: "#777777",
        borderRadius: 1,
        marginTop: 10

    },

    email: {
      fontSize: 14,
      fontWeight: '500',
      color: '#777777',
      marginLeft: 30,
    
    },

    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },

    timetable: {
        alignSelf: 'center', // this works like magic omg it centers the whole thing inside the view not per item
        paddingHorizontal: 80,
        paddingVertical: 100, 
        borderWidth: 0,
        borderColor: "#777777",
        borderRadius: 1,
        backgroundColor: 'black',
        marginTop: 0
        
    },
    circle_avatar: {
        alignSelf: 'center',
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        backgroundColor: "#25afcd",
    }

  });



// THINGS TO DO AND ADD
// edit profile (upload a photo, update name, update the links)
// design the whole thing
// make the github, spotify, linkedin work
// fix the design (leave that for now at least you have an idea) make it bongga uwu
// fix the navigation for edit profile


                        
                        {/*
                        <Avatar.Image 
                        source={{
                        uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
                        }}
                        size={120}
                        />*/}
// #FFBB24 this orange or
// #25afcd this blue