import React from 'react';
import * as Font from 'expo-font'
import { StyleSheet, Text, Image, View, Dimensions, StatusBar} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 


// navigation imports
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

// screens imports
import Login from './screens/Login'
import Register from './screens/Register'
import ChangePassword from './screens/ChangePassword'
import Homescreen from './screens/Homescreen'
import LoadingScreen from './screens/LoadingScreen'

// phase 2 app tabs
import NewsFeed from './screens/NewsFeed'
import UserProfile from './screens/UserProfile'
import Chatbox from './screens/ChatBox'
import ChatPrivate from './screens/ChatPrivate'
import EditProfile from './screens/EditProfile'

import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyADPr4YCpF6ifiv1r9o4cuztKT7bsm0LIE",
    authDomain: "dcuhub-database.firebaseapp.com",
    projectId: "dcuhub-database",
    storageBucket: "dcuhub-database.appspot.com",
    messagingSenderId: "12829074821",
    appId: "1:12829074821:web:1232ac1613b718409110ec",
    measurementId: "G-SG1P0NW7W5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


//const AppStack = createStackNavigator({
// 
//    Home: Homescreen
//
//});

const AppStack = createBottomTabNavigator(
    {
        Home: {
            screen: NewsFeed,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Ionicons name="ios-list-sharp" color={tintColor} size={26}/>
            }
        },
        ChatPrivate: {
            screen: UserProfile,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Ionicons name="ios-chatbubbles" color={tintColor} size={26}/>
            }
        },
        Profile: {
            screen: EditProfile,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Ionicons name="ios-person" color={tintColor} size={26}/>
            }
        }
    },
    {
        tabBarOptions: {
            labelPosition:'below-icon',
            showLabel: true,
            activeTintColor: "#25afcd",
            inactiveTintColor: "#9d9d9d"
        }
    }
)


const AuthStack = createStackNavigator({
    Login: Login,
    SignUp : Register,
    Reset : ChangePassword
})

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppStack,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )
);


// try and figure out the authOnChanged for firebase and make it work for this as well
// make register the first screen not login