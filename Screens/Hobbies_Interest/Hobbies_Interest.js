import { StyleSheet, Text, View , ImageBackground, Image, TouchableOpacity, StatusBar} from 'react-native'
import React from 'react'
import InputFlatlist from '../Furthur_details/InputFlatlist'
import CustomRadioBtn from '../Profile/CustomRadioBtn'

const Hobbies_Interest = ({navigation}) => {
    const isProfileData = [
        {
          id: 1,
          title: 'Writing',
        },
        {
          id: 2,
          title: 'Cooking',
        },
        {
          id: 3,
          title: 'Singing',
        },
        {
          id: 4,
          title: 'Photography',
        },
        {
          id: 5,
          title: 'Painting',
        },
        {
          id: 6,
          title: 'Gaming',
        },
        // {
        //   id: 7,
        //   title: 'My Relative',
        // },
      ];
      const isProfileData1 = [
        {
          id: 1,
          title: 'Movies',
        },
        {
          id: 2,
          title: 'Music',
        },
        {
          id: 3,
          title: 'Travelling',
        },
        {
          id: 4,
          title: 'Reading',
        },
        {
          id: 5,
          title: 'Sports',
        },
        {
          id: 6,
          title: 'Social Media',
        },
        // {
        //   id: 7,
        //   title: 'My Relative',
        // },
      ];
  return (
    <View>
    <StatusBar backgroundColor="white" barStyle="dark-content" />
     <View style={{alignItems:'center', justifyContent:'center'}}>
        <ImageBackground source={require('../Hobbies_Interest/HI1.png')}
        style={{width:382.92, height:132, alignItems:'center', justifyContent:'center'}}
        >
        <Image source={require("../Hobbies_Interest/HI2.png")}
            style={{width:140, height:36.54}}
        />
        <TouchableOpacity     onPress={()=>navigation.navigate("Family_Details")}>
        <Image source={require("../Hobbies_Interest/HI3.png")}
            style={{width:46, height:17, marginLeft:300,top:-30}}
        />
        </TouchableOpacity>
        </ImageBackground>
     </View>
     <View style={{alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:20,color:'#020F1F'}}>
        Now Let's Add 

        </Text>
        <Text style={{fontSize:20,color:'#020F1F'}}>
        
Your Hobbies & Interests
        </Text>
        <Text style={{fontSize:14, color:'#9B9B9B',margin:5}}>
        This will help find better matches
        </Text>
     </View>
     <View>
        <Text style={{fontSize:22,color:'#020F1F'}}>
            Creative
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical:-7}}>
        {isProfileData.map(iten => (
          <CustomRadioBtn title={iten.title} />
        ))}
        </View>
     </View>
     <View>
        <Text style={{fontSize:22,color:'#020F1F'}}>
            Fun
        </Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical:-7, }}>
        {isProfileData1.map(iten => (
          <CustomRadioBtn title={iten.title} />
        ))}
        </View>
     </View>
     <View style={{alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity
      onPress={()=>navigation.navigate("Family_Details")}
      // style={{alignItems:'center', justifyContent:'center'}}
      >
        <Text style={{
          width:200,color:'white', backgroundColor:'black', padding:10,
          borderWidth:1, borderRadius:20, textAlign:'center', marginVertical:30
        }}>
          Continue
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Hobbies_Interest

const styles = StyleSheet.create({})