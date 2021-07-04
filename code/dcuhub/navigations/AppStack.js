
import React from 'react';
import * as Font from 'expo-font'
import { StyleSheet, Text, Image, View, Dimensions, StatusBar} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

// navigation imports
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screen imports (second phase)
import NewsFeed from '../screens/NewsFeed'
import ChatBox from '../screens/ChatBox'
import ChatPrivate from '../screens/ChatPrivate'
import UserProfile from '../screens/UserProfile'
import EditProfile from '../screens/EditProfile'

const AppTabs = createBottomTabNavigator();

export default class AppNavigator extends React.Component{
    render() {
        return (
            <NavigationContainer>
                <AppTabs.Navigator
                  initialRouteName="Home"
                  tabBarOptions={{
                      labelPosition:'below-icon',
                      showLabel: true,
                      activeTintColor: "#25afcd",
                      inactiveTintColor: "#9d9d9d"
                      }}>
                    <AppTabs.Screen
                            name="News Feed"
                            component={NewsFeed}
                            options={{
                            tabBarIcon: ({ tintColor }) => (
                            <Ionicons name="ios-list-sharp" color={tintColor} size={26} />), }}/>
                    
                    <AppTabs.Screen
                            name="EditProfile"
                            component={EditProfile}
                            options={{
                            tabBarIcon: ({ tintColor }) => (
                            <Ionicons name="ios-chatbubbles" color={tintColor} size={26} />), }}/>
                
                    <AppTabs.Screen
                            name="Profile"
                            component={UserProfile}
                            options={{
                            tabBarIcon: ({ tintColor }) => (
                            <Ionicons name="ios-person" color={tintColor} size={26} />), }}/>
               
                </AppTabs.Navigator>
            </NavigationContainer>

        );
    }
}

// this navigation is for the phase 2 which is the inside of the app itself