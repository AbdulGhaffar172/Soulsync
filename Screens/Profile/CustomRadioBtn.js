import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';

const CustomRadioBtn = ({title}) => {
  const [isColor, SetColor] = useState(true);
  return (
    <TouchableOpacity
      onPress={() => {
        SetColor(!isColor);
      }}
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderWidth: 0.5,
          // marginHorizontal: 10,
          marginRight:16,
          borderRadius: 36.5,
          marginVertical: 10,
        },
        isColor
          ? {borderColor: 'border: 0.5px solid rgba(189, 188, 188, 1)'}
          : {borderColor: 'rgba(218, 35, 86, 1)', borderWidth: 1},
      ]}>
      <View
        style={{
          backgroundColor: 'rgba(218, 35, 86, 0.15)',
          width: 33,
          height: 33,
          borderRadius: 33 / 2,
        }}>
        {!isColor ? (
          <Image
            source={require('../Profile/Vector.png')}
            style={{
              width: 20,
              height: 20,
              marginHorizontal: 7,
              marginVertical: 5,
            }}
          />
        ) : null}
      </View>
      <Text
        style={[
          {
            color: '#9B9B9B',
            marginHorizontal: 15,
            marginVertical: 10,
            textAlignVertical: 'center',
            fontSize: 16,
          },
          isColor ? {borderColor: 'black'} : {borderColor: 'red', color: 'red'},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomRadioBtn;
