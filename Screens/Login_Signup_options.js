import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React from 'react';

const Login_Signup_options = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        borderWidth: 1,
        backgroundColor: 'rgba(218, 35, 86, 1)rgba(105, 4, 38, 1)',
      }}>
      <StatusBar   
     backgroundColor = "rgba(218, 35, 86, 1)rgba(105, 4, 38, 1)"  
    //  barStyle = "dark-content"   
    hidden = {false}    
    translucent = {true}  
  />  
      <ImageBackground
        source={require('../Screens/abc4.png')}
        style={{
          width: 349.63,
          height: 819,
        }}>
        <View
          style={{
            flex: 0.6,
          }}>
          <Image
            source={require('../Screens/abc.png')}
            style={{
              width: 279,
              height: 73,
              marginTop:100,
              margin: 37,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20}}>New to SoulSync?</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 0.3,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 20,
          }}>
          <TouchableOpacity
            style={{
              height: 49,
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: 350,
              borderWidth: 1,
              borderRadius: 35,
              margin: 5,
              padding: 10,
            }}>
            <Image
              source={require('../Screens/abc1.png')}
              style={{width: 18.38, height: 14}}
            />
            <Text style={{color: 'black', marginHorizontal: 65}}>
              Signup With Email
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 49,
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: 350,
              borderWidth: 1,
              borderRadius: 35,
              margin: 5,
              padding: 10,
            }}>
            <Image
              source={require('../Screens/abc2.png')}
              style={{width: 12, height: 20}}
            />
            <Text style={{color: 'black', marginHorizontal: 65}}>
              Signup With Mobile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 49,
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: 350,
              borderWidth: 1,
              borderRadius: 35,
              margin: 5,
              padding: 10,
            }}>
            <Image
              source={require('../Screens/abc3.png')}
              style={{width: 18, height: 18}}
            />
            <Text style={{color: 'black', marginHorizontal: 65}}>
              Signup With Google
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Email_phone_no')}>
            <Text style={{fontSize: 18}}>Already Have Account</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login_Signup_options;

const styles = StyleSheet.create({});
