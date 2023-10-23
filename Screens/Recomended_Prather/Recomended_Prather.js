import { StyleSheet, Text, View , StatusBar, Image, ImageBackground, TouchableOpacity} from 'react-native'
import React from 'react'
import Custom_Field from './Custom_Field'

const Recomended_Prather = ({navigation}) => {
    const isBasicDetails = [
        {
          id: 1,
          title: 'Age Range',
        //   image:'../Recomended_Prather/Vector'
        text:'Dummy Data'
        },
        {
          id: 2,
          title: 'Height Range',
          text:'Dummy Data'
        },
        {
            id: 3,
            title: 'Material Status',
            text:'Dummy Data'
          },
      ];
       const isComunity = [
        {
          id: 1,
          title: 'Religion',
        //   image:'../Recomended_Prather/Vector'
        text:'Dummy Data'
        },
        {
          id: 2,
          title: 'Community',
          text:'Dummy Data'
        },
        {
            id: 3,
            title: 'Mother Tonge',
            text:'Dummy Data'
          },
      ];
  return (
    <View style={{margin:10}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
     <View style={{alignItems:'center', justifyContent:'center'}}>
        <ImageBackground source={require('../Family_Details/FD1.png')}
        style={{width:382.92, height:132, alignItems:'center', justifyContent:'center'}}
        >
        <Image source={require("../Family_Details/FD2.png")}
            style={{width:140, height:36.54}}
        />
       </ImageBackground>
       <View style={{alignItems:'center', justifyContent:'center'}}>
       
       <Text style={{fontSize:20, color:'black'}}>
       Recommended Prather Preferences
       </Text>
       <Text style={{fontSize:12, color:'rgba(155, 155, 155, 1)', }}>
       We have set these Preferences to show you the best 
       </Text>
       <Text style={{fontSize:12, color:'rgba(155, 155, 155, 1)', }}>
        Matches for your Profile
       </Text>
        
       </View>  
     </View>
     <Text style={{fontSize:22, color:'black'}}>
        Basic Details
     </Text>
     <View>
     {isBasicDetails.map(iten => (
          <Custom_Field title={iten.title}
          text={iten.text} />
          ))}
     </View>
     <Text style={{fontSize:22, color:'black'}}>
        Community
     </Text>
     <View>
     {isComunity.map(iten => (
          <Custom_Field title={iten.title}
          text={iten.text} />
          ))}
     </View>
     <TouchableOpacity
            onPress={() => navigation.navigate('Recomended_Prather')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 20,
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
              Confirm & Continue
            </Text>
          </TouchableOpacity>
    </View>
  )
}

export default Recomended_Prather

const styles = StyleSheet.create({})