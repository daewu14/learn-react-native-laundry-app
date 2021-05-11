import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image
} from 'react-native'
import { ImgBerandaHeader, Logo } from "../../assets";
import { Saldo } from "../../components";

const Home = () => {
    return (
        <View style={styles.page}>
          <ImageBackground source={ImgBerandaHeader} style={styles.header}>
            <Image source={Logo} style={styles.logo}/>
            <View style={styles.hello}>
              <Text style={styles.welcome}>Selamat datang,</Text>
              <Text style={styles.userName}>Daewu bintara</Text>
            </View>
          </ImageBackground>
          <Saldo/>
        </View>
    )
}

export default Home

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  header: {
    width: windowWidth,
    aspectRatio: 1.75,
    paddingHorizontal: 20,
    paddingTop: 10
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06
  },
  hello: {
    marginTop: windowHeight * 0.06
  },
  welcome: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Regular'
  },
  userName: {
    fontSize: 22,
    fontFamily: 'TitilliumWeb-Bold'
  },
})
