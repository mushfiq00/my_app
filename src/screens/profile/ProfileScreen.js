import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProfileIco from '../../assets/images/prof.png'
import BackIco from '../../assets/images/back.png'
import { SafeAreaView } from 'react-native-safe-area-context'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const ProfileScreen = ({ navigation }) => {

    const [name, setName] = useState('')

    const { email } = auth().currentUser

    const onLogout = () => {


        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }

    const getUser = async () => {

        await firestore()
            .collection('Users')
            // Filter results
            .where('email', '==', email)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
                    setName(documentSnapshot.data().name)
                });
            });
    }

    useEffect(() => {
        getUser()
    }, [])

    const Header = () => (
        <View style={styles.header} >
            <Image source={ProfileIco} style={styles.profIco} />
            <View style={styles.txtWrpr} >
                <Text style={styles.headerTitle} >{name}</Text>
                <Text style={styles.headerSubTitle}>{email}</Text>
            </View>
        </View>
    )

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image source={BackIco} style={styles.backIco} />
                </TouchableOpacity>
                <Header />

                <View style={{ flex: 1 }} />

                <TouchableOpacity
                    style={styles.logoutBtn}
                    onPress={onLogout}
                >
                    <Text>Log Out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        flex: 1
    },
    backIco: {
        tintColor: 'black',
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
    header: {
        marginTop: 40,
        paddingHorizontal: 20,
        flexDirection: 'row',

    },
    profIco: {
        width: 80,
        height: 80,
        borderRadius: 100,
        resizeMode: 'contain'
    },
    txtWrpr: {
        justifyContent: 'center',
        marginLeft: 20
    },
    headerTitle: {
        color: 'black',
        fontSize: 20,
        fontWeight: '700'
    },
    headerSubTitle: {
        color: 'black'
    },
    logoutBtn: {
        backgroundColor: 'red',
        width: '50%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'flex-end'
    }

})