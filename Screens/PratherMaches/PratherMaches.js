import { StyleSheet, Text, View, StatusBar, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomDetails from './CustomDetails'

const PratherMaches = ({naviagtion}) => {
    const firstName=[
        {
            id:1,
            title:'Mishal Kamal',
            image:require('../PratherMaches/PM1.png')
        },
    ];
    const secondName=[
        {
            id:1,
            title:'Shaniya Afzal',
            image:require('../PratherMaches/PM2.png')
        },
    ];
    const thirdName=[
        {
            id:1,
            title:'Alia Jutti',
            image:require('../PratherMaches/PM4.png')
        },
    ];
    const fourthName=[
        {
            id:1,
            title:'Mahnoor Ali',
            image:require('../PratherMaches/PM3.png')
        },
    ];
 
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
    </View>
    <Text style={{color:'black', fontSize:20, textAlign:'center'}}>
    Let's get started by connecting
    </Text>
    <Text style={{color:'black', fontSize:20, textAlign:'center'}}>
    with few of your matches
    </Text>
    <Text style={{fontSize:14, color:'rgba(155, 155, 155, 1)', textAlign:'right', marginVertical:15}}>
        Select All
    </Text>
    <View >
    <View >
    {firstName.map(item=>(
        <CustomDetails title={item.title}
            image={item.image}
        />
    ))}</View>
    <View>
    {secondName.map(item=>(
        <CustomDetails title={item.title}
            image={item.image}
        />
    ))}</View>
    <View>
    {thirdName.map(item=>(
        <CustomDetails title={item.title}
            image={item.image}
        />
    ))}
    </View>
    <View>
    {fourthName.map(item=>(
        <CustomDetails title={item.title}
            image={item.image}
        />
    ))}
    </View>
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
             Connect with selected
            </Text>
          </TouchableOpacity>
    </View>
  )
}

export default PratherMaches

const styles = StyleSheet.create({})