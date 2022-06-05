import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Banner from '../../assets/images/home_banner.png'
import HomeItem from './HomeItem'
import { width } from '../../utils/constants'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = ({ navigation }) => {

  const tempData = Array(10).fill('a');


  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "white" }} >
        <Header navigation={navigation} />

        <FlatList
          ListHeaderComponent={
            <View style={styles.sub} >
              <Image source={Banner} style={styles.banner} />
            </View>
          }
          contentContainerStyle={styles.list}
          data={tempData}
          renderItem={() => <HomeItem />}
          keyExtractor={item => item}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  sub: {
    paddingHorizontal: 10,
    paddingTop: 10
  },
  banner: {
    width: width - 20,
    height: 180
  },
  list: {
    alignItems: 'center',

  }
})