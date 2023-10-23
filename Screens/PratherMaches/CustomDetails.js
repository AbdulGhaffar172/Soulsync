import { StyleSheet, Text, View, Image,  } from 'react-native'
import React, { useState } from 'react'
// import { CheckBox } from '@rneui/themed';
import CheckBox from 'react-native-check-box'
const CustomDetails = ({title,image}) => {
  const [checked, setChecked] = useState(true);
  const toggleCheckbox = () => setChecked(!checked);
   
  return (
    <View style={{flexDirection:'row',borderWidth:1,borderRadius:25, backgroundColor:'white', borderColor:'white', marginVertical:5 }}>
      <Image source={image}
        style={{width:95.62, height:90}}
      />
       
      <View style={{}}>
      <View style={{marginVertical:5,borderBottomWidth:0.2,borderColor:'black',flexDirection:'row',
       }}>
     <Text style={{color:'black', fontSize:14,marginRight:120}}>
        {title}
     </Text>
     <CheckBox
           checked={checked}
           onPress={toggleCheckbox}
           iconType="material-community"
           checkedIcon="checkbox-marked"
           uncheckedIcon="checkbox-blank-outline"
           checkedColor="red"
         />
     </View>
     <View style={{marginVertical:5}}>
        <Text style={{color:'rgba(155, 155, 155, 1)', fontSize:11}}>
            20 Years
        </Text>
        <Text style={{color:'rgba(155, 155, 155, 1)', fontSize:11}}>
            Urdu, Rajput
        </Text>
        <Text style={{color:'rgba(155, 155, 155, 1)', fontSize:11}}>
            Lives in Karachi, Sindh
        </Text>
     </View>
     </View>
    </View>
  )
}

export default CustomDetails

const styles = StyleSheet.create({})