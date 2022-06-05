import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

import MenuIco from '../assets/images/menu.png'
import SearchIco from '../assets/images/search.png'
import CartIco from '../assets/images/cart.png'
import ProfileIco from '../assets/images/prof.png'

const Header = ({navigation}) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity>
                <Image source={MenuIco} style={styles.menuIco} />
            </TouchableOpacity>
            <View style={styles.sub} >

                <TouchableOpacity>
                    <Image source={SearchIco} style={styles.ico} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={CartIco} style={styles.ico} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Profile')} >
                    <Image source={ProfileIco} style={styles.ico} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,


    },
    menuIco: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    ico: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    sub: {
        flexDirection: 'row',
        flex: 0.35  ,
        justifyContent: 'space-between'
    }


})