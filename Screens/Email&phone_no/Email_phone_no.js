import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput,ImageBackground, StatusBar, ScrollView, Alert} from 'react-native'
import React, { useState } from 'react'

const Email_phone_no = ({navigation}) => {
  const[text, OnchangeText]=useState()
  const [email, setEmail] = useState('');
const [emailValidError, setEmailValidError] = useState('');

const handleValidEmail = val => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  
  if (val.length === 0) {
    // setEmailValidError('email address must be enter');
    alert("email address must be enter");
  } else if (reg.test(val) === false) {
    // setEmailValidError('enter valid email address');
    alert("enter valid email address");
  } else if (reg.test(val) === true) {
    setEmailValidError('');
  }
  };
  return (
    <ScrollView>
    <View>
    <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={{alignItems:'center', justifyContent:'center'}}>
      <ImageBackground source={require('../Email&phone_no/EPN1.png')}
        style={{width:367.92, height:193,alignItems:'center', justifyContent:'center'}}
      >
      <Image source={require('../Email&phone_no/EPN2.png')}
        style={{width:123.97, height:150}}
      />
</ImageBackground>
      <Text style={{color:'rgba(155, 155, 155, 1)', textAlign:'center'}}>
        An active Email ID and Phone no are 
      </Text>
      <Text style={{color:' rgba(155, 155, 155, 1)', textAlign:'center'}}>
     require to secure your profile
      </Text>
      </View>
      <View style={{marginVertical:20}}>
      <Text style={{fontSize:22, color:'black', margin:20}}>
        Email ID
      </Text>
      <TextInput
        placeholder='unkown@gmail.com'
        placeholderTextColor={'black'}
        value={email}
    autoCorrect={false}
    autoCapitalize="none"
    onChangeText={value => {
      setEmail(value);
      
    }}
        style={{
          color:'black',
          width:360,
          height:55,
          borderWidth:1,
          borderRadius:27.5,
          padding:20,
          margin:10
        }}
      />
      {/* {emailValidError ? <Text>{emailValidError}</Text> : null} */}
      <Text style={{fontSize:22, color:'black', margin:20}}>
       Mobile No
      </Text>
      <TextInput
      // ref='mobileNo'
        placeholder='+92 123456789'
        placeholderTextColor={'black'}
        
  //       onChangeText={(text) => 
  //  let num = text.replace(".", '');
  //    if(isNaN(num)){
  //        // Its not a number
  //    }else{
  //       this.handleChange('mobileNo', num)}  
  //    }
        // value={text}
        keyboardType='numeric'
        style={{
          color:'black',
          width:360,
          height:55,
          borderWidth:1,
          borderRadius:27.5,
          padding:20,
          margin:10
        }}
      />
      </View>
      <View style={{alignItems:'center', justifyContent:'center' }}>
          <TouchableOpacity>
          
        <Text style={{
          width:200,color:'white', backgroundColor:'black', padding:10,
          borderWidth:1, borderRadius:20,height:45, margin:20, textAlign:'center'
        }} 
        
        onPress={()=>{navigation.navigate("Verification");handleValidEmail (email)}
        
        }
        
        >
          Continue
        </Text>
      </TouchableOpacity>
      <Text style={{textAlign:"center", color:'black'}}>
        By creating account, you agree to our 
      </Text>
      <View style={{flexDirection:'row'}}>
      <Text style={{textAlign:"center", color:'red'}}>
         Privacy Policy 
      </Text>
      <Text style={{textAlign:"center", color:'black'}}>
         and 
      </Text>
      <Text style={{textAlign:"center", color:'red'}}>
         T&C
      </Text>
      </View>
      </View>
    </View>
    </ScrollView>
  )
}

export default Email_phone_no

const styles = StyleSheet.create({})