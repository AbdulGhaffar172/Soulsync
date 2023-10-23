import { StyleSheet, Text, View, StatusBar , ImageBackground, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import CustomSelector from './CustomSelector'
const isProfileData1 = [
  {
    id: 1,
    title: 'Yes',
  },
  {
    id: 2,
    title: 'No',
  },
];
const isProfileData2 = [
  {
    id: 1,
    title: 'Elite',
  },
  {
    id: 2,
    title: 'High',
  },
  {
    id: 3,
    title: 'Middle',
  },
  {
    id: 4,
    title: 'Aspiring',
  },
];

const FAmily_Status = ({navigation}) => {
  return (
    <View style={{margin:20}}>
     <StatusBar backgroundColor="white" barStyle="dark-content" />
     <View style={{alignItems:'center', justifyContent:'center'}}>
        <ImageBackground source={require('../Family_Details/FD1.png')}
        style={{width:382.92, height:132, alignItems:'center', justifyContent:'center'}}
        >
        <Image source={require("../Family_Details/FD2.png")}
            style={{width:140, height:36.54}}
        />
        <Image source={require("../Family_Details/FD3.png")}
            style={{width:46, height:17, marginLeft:300,top:-30}}
        />
        </ImageBackground>
        <Image source={require("../Family_Details/FD4.png")}
            style={{width:150, height:130}}
        />
        
     </View>
     <View>
        <Text style={{fontSize:22, color:'black'}}>
        Your Family Location
        </Text>
        <Text style={{color:' rgba(155, 155, 155, 1)', fontSize:16}}>
        You Live with you family
        </Text>
        <View style={{flexDirection:'row', marginVertical:25}} >
        {isProfileData1.map(iten => (
          <CustomSelector title={iten.title} />
          ))}
        </View>
        <Text style={{color:'black', fontSize:22, marginVertical:10}}>
        Your Family Financial Status
        </Text>

     </View>
     <View style={{marginVertical:5}} >
        {isProfileData2.map(iten => (
          <CustomSelector title={iten.title} />
          ))}
        </View>
        <TouchableOpacity
            onPress={() => navigation.navigate('Recomended_Prather')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 95,
            }}>
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
      
    </View>
  )
}

export default FAmily_Status

const styles = StyleSheet.create({})