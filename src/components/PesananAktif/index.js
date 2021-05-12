/**
 * createdby Daewu Bintara
 * Wednesday, 12 May 2021
 * 09:41 ☕
 */

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ItemPesanan } from "../index";

const PesananAktif = () => {
  return (
    <View style={styles.container}>
      <ItemPesanan
        title={'Pesanan No.00234516'}
        status={'finish'}
        statuslabel={'Sudah Selesai'}
      />
      <ItemPesanan
        title={'Pesanan No.00234517'}
        status={'pending'}
        statuslabel={'Masih Dicuci'}
      />
      <ItemPesanan
        title={'Pesanan No.00234514'}
        status={'rejected'}
        statuslabel={'Pesanan Dibatalkan'}
      />
    </View>
  )
}

export default PesananAktif

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  }
})
