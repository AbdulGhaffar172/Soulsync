import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'


const CustomSelector = ({title}) => {
    const [isOn, SetOn] = useState(true);
  return (
    <View style={{flexDirection:'row', marginVertical:5}}>
    <TouchableOpacity
      onPress={() => {
        SetOn(!isOn);
      }}
      >
      { isOn ?
      <Image source={require("../Family_Status/FS1.png")}
        style={{width:20, height:20}}
      />:
      <Image source={require("../Family_Status/FS2.png")}
        style={{width:20, height:20}}
      />}
      </TouchableOpacity>
      <Text style={{fontSize:16, color:'rgba(155, 155, 155, 1)', marginHorizontal:20}}>
        {title}
      </Text>
      </View>
  )
}

export default CustomSelector

const styles = StyleSheet.create({})