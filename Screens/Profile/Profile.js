import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import CustomRadioBtn from './CustomRadioBtn';

const Profile = ({navigation}) => {
  const isProfileData = [
    {
      id: 1,
      title: 'My Self',
    },
    {
      id: 2,
      title: 'My Son',
    },
    {
      id: 3,
      title: 'My Sister',
    },
    {
      id: 4,
      title: 'My Brother',
    },
    {
      id: 5,
      title: 'My Daughter',
    },
    {
      id: 6,
      title: 'My Friend',
    },
    {
      id: 7,
      title: 'My Relative',
    },
  ];
  const isProfileData1 = [
    {
      id: 1,
      title: 'Male',
    },
    {
      id: 2,
      title: 'Female',
    },
  ];
  const isProfileData2 = [
    {
      id: 1,
      title: 'Male',
    },
    {
      id: 2,
      title: 'Female',
    },
  ];
  return (
    <View style={{flex: 1, margin:10}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={{flex: 0.3, alignItems: 'center', justifyContent: 'center'}}>
        <ImageBackground
          source={require('../Profile/P2.png')}
          style={{
            width: 367.92,
            height: 193,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../Profile/P1.png')}
            style={{width: 123, height: 150}}
          />
        </ImageBackground>
      </View>

      <Text style={{fontSize: 30, color: 'black'}}>Profile is for</Text>
      <View style={{flex: 0.4, flexDirection: 'row', flexWrap: 'wrap'}}>
        {/* {isProfileData.map(iten => (
          <CustomRadioBtn title={iten.title} />
        ))} */}
        {isProfileData.map(item => (
          <CustomRadioBtn
          
            title={
              item.id == 1
                ? "My Self"
                :  item.id == 2
                ? "My Son"
                :  item.id == 3
                ? "My Sister"
                :  item.id == 4
                ? "My Brother"
                :  item.id == 5
                ? "My Daughter"
                :  item.id == 6
                ? "My Friend"
                :  item.id == 7
                ? "My Relative"
                : null
            }
          />
        ))}
      </View>
      <Text style={{fontSize: 30, color: 'black',marginTop:40}}>Gender</Text>
      <View style={{flex: 0.2, flexDirection: 'row', flexWrap: 'wrap', }}>
        {isProfileData1.map(iten => (
          <CustomRadioBtn title={iten.title} />
        ))}
      </View>
      <View style={{flex: 0.1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile_data')}>
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
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
