/**
 * createdby Daewu Bintara
 * Tuesday, 11 May 2021
 * 16:45 ☕
 */

import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { WindowSize } from "../../utils/window";
import { PrimaryColor } from "../../utils/constant";
import { IcBill, IcOutcome } from "../../assets";
import {
  ButtonIcon,
  Space
} from "../index";

const Saldo = () => {
    return (
        <View style={styles.container}>
          <View style={styles.infoSaldo}>
            <View style={styles.text}>
              <Text style={styles.labelSaldo}>Saldo</Text>
              <Text style={styles.valueSaldo}>Rp 100.000</Text>
            </View>
            <View style={styles.text}>
              <Text style={styles.labelPoint}>Antar Point :</Text>
              <Text style={styles.valuePoint}>100 points</Text>
            </View>
          </View>
          <View style={styles.buttonAction}>
            <ButtonIcon
              title={'Add Saldo'}
              icon={IcBill}
            />
            <Space width={10}/>
            <ButtonIcon
              title={'Get Point'}
              icon={IcOutcome}
            />
          </View>
        </View>
    )
}

export default Saldo

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 12,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginTop: -(WindowSize.height * 0.07),
    flexDirection: 'row'
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoSaldo: {
    width: '60%'
  },
  labelSaldo: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Regular'
  },
  valueSaldo: {
    fontSize: 20,
    fontFamily: 'TitilliumWeb-Bold'
  },
  labelPoint: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Regular'
  },
  valuePoint: {
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Bold',
    color: PrimaryColor
  },
  buttonAction: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: 10,
    flex: 1
  }
})
