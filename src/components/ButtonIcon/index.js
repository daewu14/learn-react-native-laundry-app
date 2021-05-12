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

const ButtonIcon = ({ icon: Icon,
                      title,
                      padding,
                      fontSize,
                      marginBottom,
                      marginRight,
                      marginLeft,
                      marginTop,
                      marginVertical,
                      marginHorizontal }) => {
  return (
    <View style={{
      marginBottom: marginBottom ?? 0,
      marginRight: marginRight ?? 0,
      marginLeft: marginLeft ?? 0,
      marginTop: marginTop ?? 0,
      marginVertical: marginVertical ?? 0,
      marginHorizontal: marginHorizontal ?? 0
    }}>
      <TouchableOpacity>
        <View style={styles.icon(padding)}>
          <Icon/>
        </View>
        <Text style={styles.text(fontSize)}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonIcon

const styles = StyleSheet.create({
  icon: (padding) => ({
    backgroundColor: AccentColor,
    borderRadius: 10,
    padding: padding ?? 6,
    marginBottom: 3,
    alignItems: 'center'
  }),
  text: (fontSize) => ({
    fontSize: fontSize ?? 10,
    fontFamily: 'TitilliumWeb-Regular',
    textAlign: 'center'
  })
})
