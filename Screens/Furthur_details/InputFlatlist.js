import { StyleSheet, Text, View, } from 'react-native'
import React, { useState } from 'react'

import {SelectList} from 'react-native-dropdown-select-list';
const InputFlatlist = ({value,placeholder}) => {
    const [selected, setSelected] = React.useState('');
  return (
    <View>
      <SelectList
            // data={dataSetd}
            placeholder={placeholder}
            setSelected={val => setSelected(val)}
            dropdownStyles={{}}
            dropdownTextStyles={{color: 'black'}}
            boxStyles={{width:360, height:55, borderWidth:1,borderRadius:27.5,margin:10}}
            inputStyles={{color:'black'}}
            data={value}
          />
    </View>
  )
}

export default InputFlatlist

const styles = StyleSheet.create({})