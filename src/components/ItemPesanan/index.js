/**
 * createdby Daewu Bintara
 * Wednesday, 12 May 2021
 * 09:48 ☕
 */

import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IcWashingMachine } from "../../assets";

const ItemPesanan = ({ title, status, statuslabel}) => {

  var color = '#55CB95'
  switch (status) {
    case 'finish':
      color = '#55CB95'
      break
    case 'pending':
      color = '#d7b625'
      break
    case 'rejected':
      color = '#ae0018'
      break
  }

  return (
    <TouchableOpacity style={styles.container}>
      <IcWashingMachine/>
      <View style={styles.subContainer}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textSubTitle(color)}>{statuslabel}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ItemPesanan

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  subContainer: {
    paddingHorizontal: 10
  },
  textTitle: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-SemiBold'
  },
  textSubTitle: (color) => ({
    fontSize: 14,
    fontFamily: 'TitilliumWeb-Light',
    color: color
  })
})
