import { StyleSheet, Text, View, ScrollView, Image, ImageBackground,TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import InputFlatlist from '../Furthur_details/InputFlatlist';
// import {SelectList} from 'react-native-dropdown-select-list';
const Almost_done = ({navigation}) => {
    // const [selected, setSelected] = React.useState('');
    const dataSet = [
      {id: 1,  value: dataSeta, placeholder:'Your Highest Education'},
      {id: 2,  value: dataSetb,  placeholder:'You Work with'},
      {id: 3,  value: dataSetc, placeholder:'You Work as'},
      {id: 4,  value: dataSetd, placeholder:'Your Annual Income'},
    ];
    const dataSeta = [
        {id: 1, key: 'Religion', value: 'No Formal English'},
        {id: 2, key: 'Community', value: 'Primary Education'},
        {id: 25, key: 'Countries', value: 'Secondry Education'},
        {id: 25, key: 'Countries', value: 'GED'},
        {id: 25, key: 'Countries', value: 'Vocational Qualification'},
        {id: 25, key: 'Countries', value: 'Bachelor"s Degree'},
        {id: 25, key: 'Countries', value: 'Master"s Degree'},
        {id: 25, key: 'Countries', value: 'Doctorate or Higher'},
      ];
      const dataSetb = [
        {id: 1, key: 'Religion', value: 'Arts'},
        {id: 2, key: 'Community', value: 'Business'},
        {id: 25, key: 'Countries', value: 'Communications'},
        {id: 25, key: 'Countries', value: 'Education'},
        {id: 25, key: 'Countries', value: 'Health care'},
        {id: 25, key: 'Countries', value: 'Hospitality'},
        {id: 25, key: 'Countries', value: 'Information Technology'},
        {id: 25, key: 'Countries', value: 'Law enforcement'},
        {id: 25, key: 'Countries', value: 'Sales and Marketing'},
        {id: 25, key: 'Countries', value: 'Science'},
        {id: 25, key: 'Countries', value: 'Transportation'},
      ];
      const dataSetc = [
        {id: 1, key: 'Religion', value: 'Arts'},
        {id: 2, key: 'Community', value: 'Business'},
        {id: 25, key: 'Countries', value: 'Communications'},
        {id: 25, key: 'Countries', value: 'Education'},
        {id: 25, key: 'Countries', value: 'Health care'},
        {id: 25, key: 'Countries', value: 'Hospitality'},
        {id: 25, key: 'Countries', value: 'Information Technology'},
        {id: 25, key: 'Countries', value: 'Law enforcement'},
        {id: 25, key: 'Countries', value: 'Sales and Marketing'},
        {id: 25, key: 'Countries', value: 'Science'},
        {id: 25, key: 'Countries', value: 'Transportation'},
      ];
      const dataSetd = [
        {id: 1, key: 'Religion', value: ' 0 to 20,000'},
        {id: 2, key: 'Community', value: '20,000 to 40,000'},
        {id: 25, key: 'Countries', value: '40,000 to 60,000'},
        {id: 25, key: 'Countries', value: '60,000 to 80,000'},
        {id: 25, key: 'Countries', value: '80,000 to 100,000'},
        {id: 25, key: 'Countries', value: 'Higher than 100,000'},
      ];
     
  return (
    <ScrollView>
    <StatusBar backgroundColor="white" barStyle="dark-content" />
    <View>
      <View>
      <ImageBackground source={require('../Almost_done/AD1.png')}
        style={{width:367.92, height:193,alignItems:'center', justifyContent:'center'}}
      >
       <Text style={{color:'black', fontSize:20}}>
       You Are Almost Done
       </Text>
      
        </ImageBackground>
      </View>
      <View >
      {dataSet.map(item => (
          <InputFlatlist
            placeholder={item.placeholder}
            value={
              item.id == 1
                ? dataSeta
                : item.id == 2
                ? dataSetb
                : item.id == 3
                ? dataSetc
                : item.id == 4
                ? dataSetd
                : null
            }
          />
        ))}
    
          </View>
         
         
     <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Description')}
            style={{alignItems: 'center', justifyContent: 'center',marginVertical:270}}>
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
              Create Profile
            </Text>
          </TouchableOpacity>
        </View>
        </View>
    </ScrollView>
  )
}

export default Almost_done

const styles = StyleSheet.create({})