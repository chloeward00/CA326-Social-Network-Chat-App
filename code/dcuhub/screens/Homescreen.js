import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import * as firebase from 'firebase'

export default class HomeScreen extends React.Component {

    state = {
        email: "",
        displayName: "",
        Code: ""
    }

    componentDidMount(){
        const {email, displayName, Code} = firebase.auth().currentUser
        this.setState({email, displayName,Code});
    }

    signOutUser = () => {

        firebase.auth().signOut();
    };


    render() {
        return (
            <View style={styles.container}> 
            <Text> Hi {this.state.displayName}! You are a {this.state.Code} student</Text>

            <TouchableOpacity style={{marginTop: 32}} onPress={this.signOutUser}>
                <Text>Logout</Text>
            </TouchableOpacity>


            </View>
        )
    }
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"

}

})
