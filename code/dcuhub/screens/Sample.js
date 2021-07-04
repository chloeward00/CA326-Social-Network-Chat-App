import React from 'react';
import * as Font from 'expo-font'
import { StyleSheet, Text, Image, View, Dimensions, StatusBar} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './screens/Login'
import Register from './screens/Register'
import Reset from './screens/ChangePassword'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { Children } from 'react';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


export default class App extends React.Component{
    render() {
        createHomeStack = () =>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="SignUp" component={Register}/>
            <Stack.Screen name="ResetPassword" component={Reset}/>
        </Stack.Navigator>
        return (
            <KeyboardAwareScrollView>
            <View>
            {/* status bar, the grey colour shows for android, but not for ios. */}
            <StatusBar backgroundColor="grey" barStyle="dark-content"/> 
                
                <View style={{
                    alignSelf: 'center',
                    justifyContent: 'center'
                }}>
                
                <Image 
                source={require("./assets/images/dcuhublogo_higherres.png")}
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
                
                <NavigationContainer>
                    <Drawer.Screen name="Home" children={createHomeStack}/>
                    <Drawer.Screen name="Register" component={Register}/>
                </NavigationContainer>

            </View>
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
