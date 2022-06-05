import { StyleSheet, Image, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

import Icon from '../assets/images/icon.png'
import SearchIco from '../assets/images/search.png'
import BannerImg from '../assets/images/shop_banner.png'
import BeltImg from '../assets/images/belt.jpg'
import CageImg from '../assets/images/cage.jpg'
import ClothImg from '../assets/images/cloth.webp'
import PlateImg from '../assets/images/plate.jpg'
import ToysImg from '../assets/images/toys.jpg'
import PedigreeImg from '../assets/images/pedigree.jpg'

import Dog2 from '../assets/images/dog2.png'
import Cat from '../assets/images/cat.png'
import { width } from '../utils/constants'
import { SafeAreaView } from 'react-native-safe-area-context'
const ShopScreen = ({ navigation }) => {

    const Header = () => (
        <View style={styles.header} >
            <Image source={Icon} style={styles.HIcon} />
            <View style={styles.searchWrpr} >
                <Image source={SearchIco} style={styles.sIcon} />
                <TextInput style={styles.sInput} placeholder='Search Product or Brand' placeholderTextColor={'#7C7C7C'} />
            </View>
        </View>
    )


    const SubHeader = ({ title }) => (
        <View style={styles.subHeader} >
            <Text style={styles.subTitle} >{title}</Text>
            <Text style={styles.seeAll} >See All</Text>
        </View>
    )

    const TrendingItem = ({ title, image }) => (
        <TouchableOpacity onPress={() => navigation.navigate('productDetails', { name: title })} >
            <View style={styles.tItem} >
                <Image source={image} style={styles.tImage} />
                <Text style={styles.tTitle} >{title}</Text>
            </View>
        </TouchableOpacity>
    )

    const BrowseItem = ({ title, image }) => (
        <View style={styles.bItem} >
            <Image source={image} style={styles.bImg} />
            <Text style={styles.bTxt} >{title}</Text>
        </View>
    )

    return (
        <SafeAreaView>
            <View style={styles.container} >
                <Header />
                <ScrollView>
                    <Image source={BannerImg} style={styles.banner} />


                    <SubHeader title={'Trending Now'} />
                    <View style={styles.itemWrpr} >
                        <TrendingItem image={PedigreeImg} title={'Pedigree'} />
                        <TrendingItem image={BeltImg} title={'Belt'} />
                        <TrendingItem image={CageImg} title={'Cage'} />
                        <TrendingItem image={ClothImg} title={'Cloth'} />
                        <TrendingItem image={PlateImg} title={'Plate'} />
                        <TrendingItem image={ToysImg} title={'Toys'} />
                    </View>

                    <SubHeader title={'Browse Pet types'} />
                    <View style={styles.browseWrpr} >
                        <BrowseItem title={'Dog'} image={Dog2} />
                        <BrowseItem title={'Cat'} image={Cat} />
                        <BrowseItem title={'Dog'} image={Dog2} />
                        <BrowseItem title={'Cat'} image={Cat} />
                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}

export default ShopScreen

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    header: {
        flexDirection: 'row'
    },
    HIcon: {
        tintColor: 'black',
        height: 40,
        width: 40
    },
    searchWrpr: {

        flex: 1,
        paddingHorizontal: 10,
        marginLeft: 20,
        flexDirection: 'row',
        backgroundColor: '#E8E8E8',
        alignItems: 'center',
        borderRadius: 20
    },
    sIcon: {
        width: 15,
        height: 15
    },
    sInput: {
        marginLeft: 15

    },
    // Sub.......
    banner: {
        marginTop: 20,
        width: '100%',
        borderRadius: 10
    },
    subHeader: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    subTitle: {
        color: 'black',
        fontSize: 20,
        fontWeight: '700'
    },
    seeAll: {
        color: '#FF7322',
        fontWeight: '700'
    },
    itemWrpr: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    tItem: {
        alignItems: "center",
        width: 100,
        marginBottom: 20
    },
    tImage: {
        width: 90,
        height: 80,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
        resizeMode: 'contain'

    },
    tTitle: {
        marginTop: 10,
        color: 'black'
    },

    browseWrpr: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    bItem: {
        paddingTop: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: 145,
        marginBottom: 20,
        backgroundColor: "#F2D7D5",
        borderRadius: 20
    },
    bImg: {
        width: 76,
        height: 64,
        resizeMode: 'cover'
    },
    bTxt: {
        marginTop: -15,
        color: 'black',
        fontWeight: '700',
        marginLeft: 10
    }

})