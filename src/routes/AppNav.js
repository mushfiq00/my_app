import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './BottomNav';
import ProductDetails from '../screens/productDetails/ProductDetails';
import ProfileScreen from '../screens/profile/ProfileScreen'

const Stack = createStackNavigator();

const AppNav = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="bottomNav" component={BottomNav} />
            <Stack.Screen name="productDetails" component={ProductDetails} />
            <Stack.Screen name="Profile" component={ProfileScreen} />


        </Stack.Navigator>
    )
}

export default AppNav

