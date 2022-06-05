import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AuthHomeScreen from '../screens/AuthHomeScreen';
import EmailSigninScreen from '../screens/EmailSigninScreen';
import EmailSignUpScreen from '../screens/EmailSignUpScreen';
import AppNav from './AppNav';

const Stack = createStackNavigator();

const AuthNav = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="AuthHome" component={AuthHomeScreen} />
            <Stack.Screen name="EmailSignIn" component={EmailSigninScreen} />
            <Stack.Screen name="EmailSignUp" component={EmailSignUpScreen} />
            {/* <Stack.Screen name="AppNav" component={AppNav} /> */}
        </Stack.Navigator>
    )
}

export default AuthNav

