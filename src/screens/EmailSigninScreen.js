import { StyleSheet, Text, View, ImageBackground, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputTextComp from '../components/InputTextComp'
import BtnComp from '../components/BtnComp'
import auth from '@react-native-firebase/auth';

import BacKImg from '../assets/images/signIn_home.png'
// import BacKImg from '../assets/images/auth_home.png'
import Icon from '../assets/images/icon.png'
import BackBtn from '../assets/images/back.png'

import EmailIco from '../assets/images/email_icon.png'
import PassIco from '../assets/images/pass_ico.png'
import alertMsg from '../components/AlertMsg'


const EmailSigninScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [passwd, setPasswd] = useState('')

    const onSignIn = () => {
        auth()
            .signInWithEmailAndPassword(email, passwd)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                    alertMsg('Invalid', 'Email or Password incorrect', () => { }, () => { })
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                    alertMsg('Invalid', 'Email or Password incorrect', () => { }, () => { })
                }
                if (error.code === 'auth/user-not-found') {
                    console.log('That email address is invalid!');
                    alertMsg('Invalid', 'Email or Password incorrect', () => { }, () => { })
                }

                console.error(error);
            });
    }

    return (
        <View style={styles.container} >
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground source={BacKImg} resizeMode="cover" style={styles.imageBkd}>
                <SafeAreaView>
                    <View style={styles.backBtn} >
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <Image source={BackBtn} style={styles.backIco} />
                        </TouchableOpacity>
                    </View>

                    <Image source={Icon} style={styles.icon} />
                    <Text style={styles.title} >PETOFIA</Text>
                    <Text style={styles.subTitle} >Sign In</Text>
                    <View style={styles.sub} >

                        <InputTextComp placeholder={'Email'} icon={EmailIco} onChange={(text) => setEmail(text)} value={email} />
                        <InputTextComp placeholder={'Password'} icon={PassIco} onChange={(text) => setPasswd(text)} value={passwd} />

                        <View style={styles.btnWrpr} >
                            <TouchableOpacity>
                                <Text style={styles.btnTxt} >Remember me</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.btnTxt} >Forgot password?</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginVertical: 30 }} >
                            <BtnComp
                                title={'Sign In'}
                                onPress={onSignIn}
                                bgdColor='#FFFFFF'
                            />
                        </View>
                        <TouchableOpacity
                            style={{ alignSelf: 'center' }}
                            onPress={() => navigation.navigate('EmailSignUp')}
                        >
                            <Text style={styles.btnTxt} >Don’t have an account? Create Account</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}

export default EmailSigninScreen

const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    imageBkd: {
        flex: 1,
        padding: 25,

    },
    backIco: {
        width: 22,
        height: 22,
        marginLeft: -10

    },
    icon: {
        width: 90,
        height: 80,
        marginTop: 24
    },
    title: {
        fontSize: 44,
        fontWeight: '700',
        color: 'white'
    },
    subTitle: {
        marginTop: 30,
        fontSize: 32,
        fontWeight: '700',
        color: 'white',
        marginBottom: 20
    },
    btnWrpr: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btnTxt: {
        fontWeight: '700',
        color: 'white'
    }
})