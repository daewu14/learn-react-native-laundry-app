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
import {
  Saldo,
  LayananKami,
  PesananAktif,
} from "../../components";
import { ColorGrey } from "../../utils/constant";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ImgBerandaHeader} style={styles.header}>
          <Image source={Logo} style={styles.logo}/>
          <View style={styles.hello}>
            <Text style={styles.welcome}>Selamat datang,</Text>
            <Text style={styles.userName}>Daewu bintara</Text>
          </View>
        </ImageBackground>
        <Saldo/>
        <Text style={styles.label}>Layanan Kami</Text>
        <LayananKami/>
        <View style={styles.activeOrder}>
          <Text style={styles.label}>Pesanan Aktif</Text>
          <PesananAktif/>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    width: windowWidth,
    aspectRatio: 1.75,
    paddingHorizontal: 30,
    paddingTop: 10
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06
  },
  hello: {
    marginTop: windowHeight * 0.04
  },
  welcome: {
    fontSize: 24,
    fontFamily: 'TitilliumWeb-Regular'
  },
  userName: {
    fontSize: 22,
    fontFamily: 'TitilliumWeb-Bold'
  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
    marginHorizontal: 30,
    marginTop: 15
  },
  activeOrder: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: ColorGrey
  }
})
