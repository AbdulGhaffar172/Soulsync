import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Custom_Btn = ({navigation}) => {
  return (
    <TouchableOpacity >
          <Text
            style={{
              width: 200,
              color: 'white',
              backgroundColor: 'black',
              padding: 10,
              borderWidth: 1,
              borderRadius: 20,
              textAlign: 'center',
            }}>
            Continue
          </Text>
        </TouchableOpacity>
  )
}

export default Custom_Btn

const styles = StyleSheet.create({})