
import React, {useContext, useState, useEffect } from 'react'
import { NavigationContainer } from 'react-navigation/native';
import auth from '@firebase/auth'

import {AuthContext} from './AuthProvider'
import AuthStack from './AuthStack'
import AppStack from './AppStack'


const Routes = () => {

    const [initializing, setInitializing] = useState(true)
    const {user, setUser} = useContext(AuthContext)

    const onAuthStateChanged = (user) => {
        setUser(user)
        if(initializing) setInitializing(false)
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
        return subscriber

    }, [])

    if(initializing) return null            // if initializing is true, once firebase is established

    return (
        <NavigationContainer>
            {/* if the user if defined, go to appstack, otherwise authstack */}
            { user ? <AppStack/> : <AuthStack/> }       
        </NavigationContainer>
    )
}

export default Routes