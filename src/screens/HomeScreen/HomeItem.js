import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import DogImg from '../../assets/images/dog1.png'
import FavIco from '../../assets/images/health_ico.png'
import ProfImg from '../../assets/images/prof.png'
import FavIcoRed from '../../assets/images/fav_red.png'
const { width } = Dimensions.get('screen')

const HomeItem = ({ item }) => {
    return (
        <View style={styles.container} >
            <Image
                style={styles.img}
                source={item.img}
            />
            <View style={styles.footer} >
                <View style={{ flexDirection: 'row' }} >
                    <Image source={ProfImg} style={styles.acIco} />
                    <Text style={styles.name} >{item.profName}</Text>
                </View>
                <Image source={FavIcoRed} style={styles.fav} />
            </View>
        </View>
    )
}

export default HomeItem

const styles = StyleSheet.create({
    container: {
        width: (width / 2 - 20),
        height: 250,
        backgroundColor: "red",
        margin: 10,
        alignItems: 'center',
        shadowColor: 'black',
        elevation: 5
    },
    img: {
        width: (width / 2 - 20),
        height: 200,
        resizeMode: 'cover'
    },
    footer: {
        paddingHorizontal: 10,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    acIco: {
        width: 25,
        height: 25,
        borderRadius: 50
    },
    name: {
        color: 'black',
        fontWeight: '700',
        marginLeft: 10

    },
    fav: {
        width: 25,
        height: 25,
    }

})