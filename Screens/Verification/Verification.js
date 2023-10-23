import { StyleSheet, Text, View, Image, ImageBackground, TextInput , TouchableOpacity, StatusBar} from 'react-native'
import React from 'react'

const Verification = ({navigation}) => {
  return (
    <View>
    <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View>
      <ImageBackground source={require('../Verification/V2.png')}
        style={{width:367.92, height:193,alignItems:'center', justifyContent:'center'}}
      >
        <Image source={require('../Verification/V1.png')}
            style={{width:117.42, height:150}}
        /></ImageBackground>
        <Text style={{color:'rgba(155, 155, 155, 1)', textAlign:'center'}}>
            You will receive an SMS with verification PIN to
        </Text>
        <Text style={{color:'black', textAlign:'center'}}>
           +92 123456789
        </Text>
        <Text style={{color:'red', textAlign:'center', left:65, top:-20}}>
            Edit
        </Text>
      </View>
      <View style={{margin:70}}>
      <Text style={{color:'black', textAlign:'center', fontSize:16}}>
            Enter PIN
        </Text>
      <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row', padding:5, margin:10}}>
        
        <TextInput style={{width:40, height:40, borderWidth:0.5,borderColor:'red', borderRadius:10, margin:10}}/>
        <TextInput style={{width:40, height:40, borderWidth:0.5,borderColor:'red', borderRadius:10, margin:10}}/>
        <TextInput style={{width:40, height:40, borderWidth:0.5,borderColor:'red', borderRadius:10, margin:10}}/>
        <TextInput style={{width:40, height:40, borderWidth:0.5,borderColor:'red', borderRadius:10, margin:10}}/>

       
      </View>
      <Text style={{color:'black', textAlign:'center'}}>
        You will receive the OTP in 30 seconds
       </Text>
       </View>
       <TouchableOpacity
      onPress={()=>navigation.navigate("Furthur_details")}
      style={{alignItems:'center', justifyContent:'center'}}
      >
        <Text style={{
          width:200,color:'white', backgroundColor:'black', padding:10,
          borderWidth:1, borderRadius:20,height:45, margin:20, textAlign:'center'
        }}>
          Verify
        </Text>
      </TouchableOpacity>
      <Text style={{textAlign:'center', color:'black', margin:10}}>
        Note: You can use Privacy option to hide your number
      </Text>
      <TouchableOpacity 
      style={{alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:'red'}}>
            I'll do this later
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Verification

const styles = StyleSheet.create({})