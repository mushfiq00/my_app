import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import firestore from '@react-native-firebase/firestore';

import BacKImg from '../assets/images/signup_home.png'
import BackBtn from '../assets/images/back.png'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputTextComp from '../components/InputTextComp'
import EmailIco from '../assets/images/email_icon.png'
import PassIco from '../assets/images/pass_ico.png'
import BtnComp from '../components/BtnComp'
import auth from '@react-native-firebase/auth';
import alertMsg from '../components/AlertMsg'

const EmailSignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [passwd, setPasswd] = useState('')
    const [name, setName] = useState('')

    const onSignUp = async () => {
        if (!name || !email || !name) {
            return alertMsg('Fill All Fields', 'Please fill all fields to continue.', () => { }, () => { })
        }
        await auth()
            .createUserWithEmailAndPassword(email, passwd)
            .then(async () => {
                console.log('User account created & signed in!');
                await firestore()
                    .collection('Users')
                    .add({
                        name,
                        email

                    })
                    .then(() => {
                        console.log('User added!');
                    });
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');

                    alertMsg('Already Taken', 'email address is already in use', () => { }, () => { })


                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                    alertMsg('Invalid', 'email address is invalid', () => { }, () => { })

                }

                console.error(error);
            });
    }

    return (
        <View style={styles.container} >
            <ImageBackground source={BacKImg} resizeMode="cover" style={styles.imageBkd}>
                <SafeAreaView>
                    <View>
                        <View style={styles.backBtn} >
                            <TouchableOpacity onPress={() => navigation.goBack()} >
                                <Image source={BackBtn} style={styles.backIco} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.title} >PETOFIA</Text>

                        <InputTextComp placeholder={'Name'} icon={EmailIco} onChange={(text) => setName(text)} value={name} />
                        <InputTextComp placeholder={'Email'} icon={EmailIco} onChange={(text) => setEmail(text)} value={email} />
                        <InputTextComp placeholder={'Password'} icon={PassIco} onChange={(text) => setPasswd(text)} value={passwd} />

                        <View style={{ marginTop: 25 }} >
                            <BtnComp
                                title={'Sign Up'}
                                onPress={onSignUp}
                                bgdColor='#FFFFFF'
                            />
                            <BtnComp
                                title={'Log In with Facebook'}
                                onPress={() => { }}
                                bgdColor='#0C15EB'
                                labelColor='#FFFFFF'
                            />
                        </View>
                        <TouchableOpacity
                            style={{ alignSelf: 'center' }}
                            onPress={() => navigation.navigate('EmailSignIn')}
                        >
                            <Text style={styles.btnTxt} >Already a account? Log in</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}

export default EmailSignUpScreen

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
        marginLeft: -10,

    },
    title: {
        fontWeight: '700',
        fontSize: 44,
        color: 'white',
        marginTop: 80,
        marginBottom: 96
    },
    btnTxt: {
        fontWeight: '700',
        color: 'white'
    }
})