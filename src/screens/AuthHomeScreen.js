import { StyleSheet, Text, View, ImageBackground, Image, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'


import BacKImg from '../assets/images/auth_home.png'
import Icon from '../assets/images/icon.png'
import BtnComp from '../components/BtnComp'

const AuthHomeScreen = ({ navigation }) => {



  return (
    <View style={styles.container} >
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground source={BacKImg} resizeMode="cover" style={styles.imageBkd}>
        <View style={styles.skipBtn} >
          <TouchableOpacity>
            <Text style={styles.skip} >Skip</Text>
          </TouchableOpacity>
        </View>

        <Image source={Icon} style={styles.icon} />
        <Text style={styles.title} >PETOFIA</Text>
        <Text style={styles.subTitle} >All in one online platform</Text>
        <BtnComp title={'Sign In'}
          onPress={() => navigation.navigate('EmailSignIn')}
          bgdColor='#FFFFFF'
        />
        <BtnComp
          title={'Sign Up with Email'}
          onPress={() => navigation.navigate('EmailSignUp')}
          bgdColor='#FFFFFF'
        />
        <BtnComp
          title={'Login with Facebook'}
          onPress={() => navigation.navigate('EmailSignIn')}
          bgdColor='#FFFFFF'
        />
      </ImageBackground>
    </View>
  )
}

export default AuthHomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  imageBkd: {
    flex: 1,
    padding: 25,
    justifyContent: 'center'

  },
  skipBtn: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
  skip: {
    color: 'black',
    textDecorationLine: 'underline',
    fontWeight: '700'
  },
  icon: {
    width: 90,
    height: 80
  },
  title: {
    fontSize: 44,
    fontWeight: '700',
    color: 'white'
  },
  subTitle: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20
  },

})