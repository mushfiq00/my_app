import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProfPic from '../assets/images/prof_default.png'
import Arrow from '../assets/images/back.png'
import NotIco from '../assets/images/bell.png'
import AppearIco from '../assets/images/appearance.png'
import PrivIco from '../assets/images/privacy.png'
import SoundIco from '../assets/images/sound.png'
import LangIco from '../assets/images/lang.png'
import { SafeAreaView } from 'react-native-safe-area-context'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const Btn = ({ title, icon }) => (
  <TouchableOpacity>
    <View style={styles.btn} >
      <Image source={icon} style={styles.bIcon} />
      <Text style={styles.bTitle} >{title}</Text>
      <Image source={Arrow} style={styles.arrow} />
    </View>
  </TouchableOpacity>
)

const AccountScreen = () => {

  const [name, setName] = useState('')

  const { email } = auth().currentUser



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

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <View style={styles.container}>
        <Text style={styles.header} >Account</Text>
        <View style={styles.sub1} >
          <Image source={ProfPic} style={styles.profPic} />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email} >{email}</Text>
        </View>
        <View style={styles.sub2}>
          <Btn title={'Account'} icon={ProfPic} />
          <Btn title={'Notification'} icon={NotIco} />
          <Btn title={'Appearance'} icon={AppearIco} />
          <Btn title={'Privacy and Security'} icon={PrivIco} />
          <Btn title={'Sound'} icon={SoundIco} />
          <Btn title={'Language'} icon={LangIco} />

        </View>
      </View>
    </SafeAreaView>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10
  },
  header: {
    fontWeight: '700',
    color: '#432C81',
    fontSize: 25
  },
  sub1: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profPic: {
    width: 125,
    height: 125,
    borderRadius: 100,
  },
  name: {
    color: '#432C81',
    fontSize: 25,
    fontWeight: '700'
  },
  email: {
    color: '#7B6BA8'
  },
  sub2: {
    flex: 1,
    paddingHorizontal: 10
  },
  btn: {
    justifyContent: 'center',
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    marginVertical: 10
  },
  bIcon: {
    width: 25,
    height: 25,
    tintColor: '#A095C1',
    resizeMode: 'contain'
  },
  bTitle: {
    marginLeft: 20,
    color: '#56428F',
    fontSize: 16,
    flex: 1,
    fontWeight: '500'
  },
  arrow: {
    tintColor: '#A095C1',
    transform: [{ rotate: '180deg' }],
    height: 15,
    width: 15,


  }
})