/**
 * createdby Daewu Bintara
 * Wednesday, 12 May 2021
 * 08:36 ☕
 */

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ButtonIcon } from "../index";
import {
  IcCleanClothes,
  IcDeliveryTruck,
  IcDress,
  IcIron,
  IcLaundry,
  IcTimbangan,
} from "../../assets";

const LayananKami = () => {

  const ThisButtonIcon = ({ title, icon: Icon }) => {
    return(
      <ButtonIcon
        icon={Icon}
        title={title}
        padding={12}
        fontSize={14}
        marginBottom={10}
        marginRight={30}
      />
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Layanan Kami</Text>
      <View style={styles.iconLayanan}>
        <ThisButtonIcon
          icon={IcTimbangan}
          title={'Kiloan'}
        />
        <ThisButtonIcon
          icon={IcCleanClothes}
          title={'Satuan'}
        />
        <ThisButtonIcon
          icon={IcDress}
          title={'VIP'}
        />
        <ThisButtonIcon
          icon={IcLaundry}
          title={'Karpet'}
        />
        <ThisButtonIcon
          icon={IcIron}
          title={'Setrika Saja'}
        />
        <ThisButtonIcon
          icon={IcDeliveryTruck}
          title={'Express'}
        />
      </View>
    </View>
  )
}

export default LayananKami

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingTop: 15,
  },
  label: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold'
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    flexWrap: 'wrap'
  }
})
