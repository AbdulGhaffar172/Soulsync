import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Custom_Field = ({title, text}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        width:360,
        height:55,
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 0.5,
        
        borderRadius: 36.5,
        marginVertical: 10,
      }}>
      <View
        style={{
          backgroundColor: 'rgba(218, 35, 86, 0.15)',
          width: 33,
          height: 33,
          borderRadius: 33 / 2,
        }}>
        <Image
          source={require('../Recomended_Prather/Vector.png')}
          style={{
            width: 20,
            height: 20,
            marginHorizontal: 7,
            marginVertical: 5,
          }}
        />
      </View>
      <View style={{flexDirection: 'column'}}>
        <Text
          style={{
            color: 'black',
            marginHorizontal: 15,
            textAlignVertical: 'center',
            fontSize: 16,
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: 'rgba(155, 155, 155, 1)',
            marginHorizontal: 15,
            fontSize: 16,
          }}>
          {text}
        </Text>
      </View>
      <View style={{marginHorizontal:155}}>
        <Image source={require("../AddPhoto/AP4.png")}
            style={{width:8.76, height:16, }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Custom_Field;

const styles = StyleSheet.create({});
