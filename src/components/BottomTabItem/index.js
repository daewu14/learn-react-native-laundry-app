/**
 * createdby Daewu Bintara
 * Tuesday, 11 May 2021
 * 09:25 ☕
 */

import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  IcHome,
  IcHomeActive,
  IcLaundryMechine,
  IcLaundryMechineActive,
  IcCharWoman,
  IcCharWomanActive
} from '../../assets'
import {
  PrimaryColor,
  DissabledColor
} from '../../utils/constant'

const BottomTabItem = ({ isFocused, onPress, onLongPress, label }) => {

  const Icon = () => {
    if (label === 'Home')
      return isFocused ? <IcHomeActive/> : <IcHome/>

    if (label === 'Pesanan')
      return isFocused ? <IcLaundryMechineActive/> : <IcLaundryMechine/>

    if (label === 'Akun')
      return isFocused ? <IcCharWomanActive/> : <IcCharWoman/>

    return <IcHomeActive/>
  }

    return (
      <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={ styles.container }>
        <Icon/>
        <Text style={ styles.text(isFocused) }>{label}</Text>
      </TouchableOpacity>
    )
}

export default BottomTabItem

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  text: (isFocused) => ({
    fontSize: 13,
    color: isFocused ? PrimaryColor : DissabledColor,
    fontFamily: 'TitilliumWeb-Regular',
    marginTop: 3
  })
})
