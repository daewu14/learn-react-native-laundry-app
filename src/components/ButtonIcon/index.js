/**
 * createdby Daewu Bintara
 * Tuesday, 11 May 2021
 * 17:23 ☕
 */

import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { AccentColor } from "../../utils/constant";

const ButtonIcon = ({ Icon, title }) => {
    return (
        <TouchableOpacity>
          <View style={styles.icon}>
            <Icon/>
          </View>
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({
  icon: {
    backgroundColor: AccentColor,
    borderRadius: 10,
    padding: 6,
    marginBottom: 3,
    alignItems: 'center'
  },
  text: {
    fontSize: 10,
    fontFamily: 'TitilliumWeb-Regular',
    textAlign: 'center'
  }
})
