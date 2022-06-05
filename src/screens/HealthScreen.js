import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Icon from '../assets/images/icon.png'
import SearchIco from '../assets/images/search.png'
import HealthImg1 from '../assets/images/health_1.png'
import HealthImg2 from '../assets/images/health_2.png'
import HealthImg3 from '../assets/images/health_3.png'
import HealthImg4 from '../assets/images/health_4.png'
import HealthImg5 from '../assets/images/health_5.png'
import { SafeAreaView } from 'react-native-safe-area-context'
const HealthScreen = () => {

  const HealthItem = ({ image, title }) => (

    <View style={styles.hItem} >
      <Text style={styles.hTitle} >{title}</Text>
      <Image source={image} style={styles.hImg} />
    </View>
  )

  const Header = () => (
    <View style={styles.header} >
      <Image source={Icon} style={styles.HIcon} />
      <View style={styles.searchWrpr} >
        <Image source={SearchIco} style={styles.sIcon} />
        <TextInput style={styles.sInput} placeholder='Search Product or Brand' placeholderTextColor={'#7C7C7C'} />
      </View>

    </View>
  )

  return (
    <SafeAreaView>
      <View style={styles.container} >
        <Header />
        <ScrollView
          contentContainerStyle={styles.scroll}
        >
          <HealthItem title='Dog Nutrition Center' image={HealthImg1} />
          <HealthItem title='Cat Nutrition Center' image={HealthImg3} />
          <HealthItem title='Diseases A-Z' image={HealthImg4} />
          <HealthItem title={`Veterinary\nTerms`} image={HealthImg2} />
          <HealthItem title='Pet medication' image={HealthImg5} />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default HealthScreen

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row', marginBottom: 10
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
  scroll: {
    marginTop: 20
  },
  hItem: {
    alignItems: 'center',
    backgroundColor: '#EDECF4',
    padding: 10,
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 10
  },
  hTitle: {
    flex: 1,
    color: '#432C81',
    fontSize: 16,
    fontWeight: '700'

  },
  hImg: {
    flex: 1,
    height: 100,
    width: 200,
    resizeMode: 'contain'
  }
})