import React from 'react'
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopScreen from '../screens/ShopScreen';
import HealthScreen from '../screens/HealthScreen';
import AccountScreen from '../screens/AccountScreen';
import HomeIco from '../assets/images/home_ico.png'
import ShopIco from '../assets/images/shop_ico.png'
import HealthIco from '../assets/images/health_ico.png'
import AccountIco from '../assets/images/account_ico.png'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'

const Tab = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false, tabBarStyle: { paddingBottom: 10, paddingTop: 10, height: 60 } }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarActiveTintColor: '#FF7322',
                    tabBarIcon: ({ focused }) => <Image source={HomeIco} style={[styles.ico, { tintColor: focused ? '#FF7322' : 'black' }]} />
                }}
            />
            <Tab.Screen
                name="Shop"
                component={ShopScreen}
                options={{
                    tabBarActiveTintColor: '#FF7322',
                    tabBarIcon: ({ focused }) => <Image source={ShopIco} style={[styles.ico, { tintColor: focused ? '#FF7322' : 'black' }]} />
                }}
            />
            <Tab.Screen
                name="Health"
                component={HealthScreen}
                options={{
                    tabBarActiveTintColor: '#FF7322',
                    tabBarIcon: ({ focused }) => <Image source={HealthIco} style={[styles.ico, { tintColor: focused ? '#FF7322' : 'black' }]} />
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarActiveTintColor: '#FF7322',
                    tabBarIcon: ({ focused }) => <Image source={AccountIco} style={[styles.ico, { tintColor: focused ? '#FF7322' : 'black' }]} />,
                }}
            />



        </Tab.Navigator>
    )
}

export default BottomNav

const styles = StyleSheet.create({
    ico: {
        width: 20,
        height: 20,
        // tintColor: 'red'
    }
})