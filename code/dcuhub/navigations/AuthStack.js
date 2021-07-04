
import React from 'react';
import * as Font from 'expo-font'
import { StyleSheet, Text, Image, View, Dimensions, StatusBar} from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons'
import { Ionicons } from '@expo/vector-icons'; 

// navigation imports
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// screens imports (first phase)
import Login from '../screens/Login'
import Register from '..ChangePassword/screens/Register'
import Reset from '../screens/ChangePassword'

const Stack = createStackNavigator();

export default class AuthNavigator extends React.Component{
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="SignUp" component={Register}/>
                    <Stack.Screen name="ResetPassword" component={Reset}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

// authentication phase
// login, sign up, reset password