import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

import BackIco from '../../assets/images/back.png'
import FavIco from '../../assets/images/fav_red.png'
import { SafeAreaView } from 'react-native-safe-area-context'

import PedigreeImg from '../../assets/images/pedigree.jpg'
const ProductDetails = ({ navigation }) => {

    const [qty, setQty] = useState(1)

    const Btn = ({ title, onPress, color }) => (
        <View style={[styles.btn, { backgroundColor: color }]} >
            <Text style={styles.btnTxt} >{title}</Text>
        </View>
    )
    const QuantityComp = () => (
        <View style={styles.qtyWrpr} >
            <TouchableOpacity onPress={() => qty > 1 && setQty(qty - 1)} >
                <View style={{ padding: 10 }} >
                    <Text style={styles.qtyBtnTxt} >-</Text>
                </View>
            </TouchableOpacity>
            <TextInput style={styles.qtnInput} value={qty.toString()} onChange={(e) => setQty(Number(e))} />
            <TouchableOpacity onPress={() => setQty(qty + 1)} >
                <View style={{ padding: 10 }} >
                    <Text style={styles.qtyBtnTxt} >+</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
    return (
        <SafeAreaView>
            <View style={styles.container} >
                <View style={styles.header} >
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Image source={BackIco} style={styles.backIco} />
                    </TouchableOpacity>
                    <Image source={FavIco} />
                </View>
                <View style={styles.sub} >
                    <Image source={PedigreeImg} style={styles.mainImg} />
                    <View style={styles.nameWrpr} >
                        <Text style={styles.name} >Pedigree</Text>
                        <Text style={styles.price}>₹189.00</Text>
                    </View>
                    <QuantityComp />

                    <View style={styles.dtlsWrpr} >
                        <Text style={styles.dtlsTitle}>Details</Text>
                        <Text style={styles.dtlsDscpn} >Buy Pedigree for your dog to give them the goodness of protein, calcium & necessary fibre. Nourish your pet from the inside with Pedigree's dog food. Order Now! Wholesome & Complete Diet. Food For Dogs. Types: Puppy Dog Food, Adult Dog Food, Senior Dog Food.</Text>
                    </View>

                    <View style={{ flex: 1 }} ></View>


                    <Btn title={'ADD TO CART'} color='black' />
                    <Btn title={'BUY NOW'} color='green' />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 10,
        paddingTop: 20,
        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    backIco: {
        height: 20,
        width: 20,
        tintColor: 'black'

    },
    sub: {
        // backgroundColor: 'red',
        alignItems: 'center',
        flex: 1,
        marginBottom: 20
    },
    mainImg: {
        width: '60%',
        height: 200,
        resizeMode: 'contain'
    },
    nameWrpr: {
        marginTop: 25,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'space-between',
        justifyContent: 'space-between',
        width: '100%'
    },
    name: {
        color: 'black',
        fontWeight: '700',
        fontSize: 25
    },
    price: {
        color: 'black',
        fontSize: 25
    },
    qtyWrpr: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    qtyBtnTxt: {
        color: 'black',
        fontSize: 25,
        fontWeight: '700',

    },
    qtnInput: {
        borderWidth: 1,
        borderColor: 'black',
        marginHorizontal: 20,
        borderRadius: 10,
        width: 50,
        height: 40,
        color: 'black',
        textAlign: 'center'
    },
    dtlsWrpr: {
        padding: 10,
        marginTop: 20
    },
    dtlsTitle: {
        color: 'gray',
        fontWeight: '700'
    },
    dtlsDscpn: {
        color: 'black',
        textAlign: 'justify'
    },
    btn: {
        marginVertical: 10,
        backgroundColor: 'black',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 10
    },
    btnTxt: {
        color: 'white',
        fontWeight: '700'
    }
})