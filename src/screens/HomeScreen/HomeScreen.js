import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Banner from '../../assets/images/home_banner.png'
import HomeItem from './HomeItem'
import { width } from '../../utils/constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeImg1 from '../../assets/images/home3.jpeg'
import HomeImg2 from '../../assets/images/home4.jpeg'
import HomeImg3 from '../../assets/images/home5.jpeg'
import DogImg from '../../assets/images/dog1.png'
const HomeScreen = ({ navigation }) => {

  const tempData = [{ profName: 'Ans', id: 1,img:HomeImg1 },
  { profName: 'Jiffrin', id: 2,img:HomeImg3 },
  { profName: 'shah', id: 3 ,img:HomeImg2},
  { profName: 'Arun', id: 4 ,img:DogImg},
  { profName: 'Jhon', id: 5 ,img:DogImg},
  { profName: 'Mikle', id: 6 ,img:HomeImg1},
  { profName: 'Anas', id: 7 ,img:HomeImg3},
  { profName: 'some', id: 7 ,img:HomeImg2},
  ];


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
          renderItem={( {item} ) => <HomeItem item={item} />}
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