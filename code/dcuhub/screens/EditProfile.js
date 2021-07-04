
import React from 'react'
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StatusBar } from 'expo-status-bar';
import * as firebase from 'firebase'


export default class EditProfile extends React.Component{

    state = {
        email: "",
        displayName: "",
        Code: ""
    }

    componentDidMount(){
        const {email, displayName,Code} = firebase.auth().currentUser
        this.setState({email, displayName, Code});
    }

    signOutUser = () => {

        firebase.auth().signOut();
    };

    render () {
        return (
            <KeyboardAwareScrollView>
                <SafeAreaView style={styles.container}>
                <StatusBar style="auto"/>

                    <View style={{marginTop: 30}}>
                        <View style={styles.circle_avatar}>
                        </View> 
                    </View>
                    

                    {/* change profile picture text button
                        include firebase on this for updating pictures */}
                    <View style={{
                        alignSelf: 'center',
                        marginTop: 15,
                        borderWidth: 0,
                        
                        }}>
                        <Text style={{color: '#d40059', marginBottom: 20}}>Change profile picture</Text>
                    </View>

                    <View style={{
                            borderBottomColor: "#dddddd",
                            borderBottomWidth: 1,
                            
                        }}>
                    </View>


                    {/* THINGS TO BE UPDATED / CHANGED
                        NOT FINAL YET */}
                    <View style={{
                        flexDirection: 'row',
                        marginTop: 20,
                        marginBottom: 0,
                        marginLeft: 20,
                        marginRight: 50,
                        paddingBottom: 5,

                    }}>
                        <Text style={{fontSize: 18, color: "orange"}}>Name</Text>
                        <TextInput
                            style={{
                                paddingLeft: 10,
                                color: 'black',
                                fontSize: 18,
                                marginLeft: 25,
                                marginRight: 20,
                                paddingLeft: -10,
                                marginLeft: 50
                            }}
                            placeholder="Name"
                            />
                    
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginTop: 0,
                        marginBottom: 0,
                        marginLeft: 20,
                        marginRight: 50,
                        paddingBottom: 5,

                    }}>
                        <Text style={{fontSize: 18, color: "orange"}}>Email</Text>
                        <TextInput
                            style={{
                                paddingLeft: 10,
                                color: 'black',
                                fontSize: 18,
                                marginLeft: 25,
                                marginRight: 20,
                                paddingLeft: -10,
                                marginLeft: 55
                
                            }}
                            placeholder="Email"
                            keyboardType="email-address"
                            />
                    
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginTop: 0,
                        marginBottom: 0,
                        marginLeft: 20,
                        marginRight: 50,
                        paddingBottom: 5,

                    }}>
                        <Text style={{fontSize: 18, color: "orange"}}>Bio</Text>
                        <TextInput
                            style={{
                                paddingLeft: 10,
                                color: 'black',
                                fontSize: 18,
                                marginLeft: 25,
                                marginRight: 20,
                                paddingLeft: -10,
                                marginLeft: 73
                
                            }}
                            placeholder="Bio"
                            />
                    
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        marginTop: 0,
                        marginBottom: 0,
                        marginLeft: 20,
                        marginRight: 50,
                        paddingBottom: 5,
                        marginBottom: 20,
                        borderWidth: 0

                    }}>
                        <Text style={{fontSize: 18, color: "orange"}}>Spotify</Text>
                        <TextInput
                            style={{
                                color: 'black',
                                fontSize: 18,
                                marginLeft: 25,
                                marginRight: 20,
                                paddingLeft: -10,
                                marginLeft: 40,
                                borderWidth: 0
                
                            }}
                            placeholder="Spotify"
                            />
                    
                    </View>

                    <View style={{
                            borderBottomColor: "#dddddd",
                            borderBottomWidth: 1,
                            
                        }}>
                    </View>

                    <TouchableOpacity style={styles.commandButton} onPress={this.signOutUser}>
                        <Text style={styles.panelButtonTitle}>LOG OUT</Text>
                    </TouchableOpacity>

                </SafeAreaView>
            </KeyboardAwareScrollView>
        )
    }
}


// most of the styles are copied from online 

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    circle_avatar: {
        alignSelf: 'center',
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        backgroundColor: "#25afcd",
    },

    commandButton: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
      backgroundColor: 'orange',
      alignItems: 'center',
      marginTop: 30,
      marginHorizontal: 100
    },
    panel: {
      padding: 20,
      backgroundColor: '#FFFFFF',
      paddingTop: 20,
      // borderTopLeftRadius: 20,
      // borderTopRightRadius: 20,
      // shadowColor: '#000000',
      // shadowOffset: {width: 0, height: 0},
      // shadowRadius: 5,
      // shadowOpacity: 0.4,
    },
    header: {
      backgroundColor: '#FFFFFF',
      shadowColor: '#333333',
      shadowOffset: {width: -1, height: -3},
      shadowRadius: 2,
      shadowOpacity: 0.4,
      // elevation: 5,
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    panelHeader: {
      alignItems: 'center',
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: '#00000040',
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: 'gray',
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 13,
      borderRadius: 10,
      backgroundColor: '#FF6347',
      alignItems: 'center',
      marginVertical: 7,
    },
    panelButtonTitle: {
      fontSize: 20,
      color: 'white',
      
    },
    action: {
      flexDirection: 'row',
      marginTop: 20,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
    },
  });
