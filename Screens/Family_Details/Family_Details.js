import { StyleSheet, Text, View, ImageBackground, Image, ScrollView , TouchableOpacity, StatusBar} from 'react-native'
import React from 'react'
import InputFlatlist from '../Furthur_details/InputFlatlist'

const Family_Details = ({navigation}) => {
    dataSet=[
        {
            id:1,
            value:"dataSetA",
            placeholder:'Mother Details'
        },
        {
            id:2,
            value:"dataSetB",
            placeholder:'Father Details'
        },
        {
            id:3,
            value:"dataSetC",
            placeholder:'No: of Brothers'
        },
        {
            id:4,
            value:"dataSetD",
            placeholder:'No: of Sisters'
        },
    ]
    dataSetA=[
        {
            id:1,
            value:"House Wife"
        },
        {
            id:2,
            value:"Job Holder"
        },
        {
            id:3,
            value:"Own Business"
        },
        // {
        //     id:4,
        //     value:"dataSetD"
        // },
    ]
    dataSetB=[
        {
            id:1,
            value:"Job Holder"
        },
        {
            id:2,
            value:"Own Business"
        },
        {
            id:3,
            value:"Farmer"
        },
        // {
        //     id:4,
        //     value:"dataSetD"
        // },
    ]
    dataSetC=[
        {
            id:1,
            value:"0"
        },
        {
            id:2,
            value:"1"
        },
        {
            id:3,
            value:"2"
        },
        {
            id:4,
            value:"3"
        },
        {
            id:5,
            value:"3"
        },
        {
            id:6,
            value:"3"
        },
    ]
    dataSetD=[
        {
            id:1,
            value:"0"
        },
        {
            id:2,
            value:"1"
        },
        {
            id:3,
            value:"2"
        },
        {
            id:4,
            value:"3"
        },
        {
            id:5,
            value:"3"
        },
        {
            id:6,
            value:"3"
        },
    ]

  return (
<ScrollView>
<StatusBar backgroundColor="white" barStyle="dark-content" />
    <View>
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
            <Text style={{fontSize:22, color:'#020F1F'}}>
            Add Family Details
            </Text>
            <Text style={{fontSize:16, color:'#9B9B9B'}}>
            This really helps find common connections
            </Text>
        </View>
        <View style={{marginVertical:10,alignItems:'center', justifyContent:'center'}}>
        {dataSet.map(item => (
          <InputFlatlist
            placeholder={item.placeholder}
            value={
              item.id == 1
                ? dataSetA
                : item.id == 2
                ? dataSetB
                : item.id == 3
                ? dataSetC
                : item.id == 4
                ? dataSetD
                : null
            }
          />
        ))}
        </View>
        <View style={{alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity
      onPress={()=>navigation.navigate("Family_Status")}
      // style={{alignItems:'center', justifyContent:'center'}}
      >
        <Text style={{
          width:200,color:'white', backgroundColor:'black', padding:10,
          borderWidth:1, borderRadius:20, textAlign:'center', marginVertical:100
        }}>
          Continue
        </Text>
      </TouchableOpacity>
      </View>

    </View>
    </ScrollView>
  )
}

export default Family_Details

const styles = StyleSheet.create({})