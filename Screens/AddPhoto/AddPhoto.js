import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
  Button,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const AddPhoto = ({navigation}) => {
  const [isNewImg, setNewImg] = useState(false);

  const [imageUri, setImageUri] = useState(require('../AddPhoto/Abdul.jpg'));
  const openCamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});

    result?.assets[0]
      ? (setImageUri(result?.assets[0]?.uri), setNewImg(true))
      : null;
    console.log('use cam clickeed', result?.assets[0]);
  };
  const openGallery = async () => {
    const result = await launchImageLibrary({mediaType: 'photo'});

    result?.assets[0]
      ? (setImageUri(result?.assets[0]?.uri), setNewImg(true))
      : null;
  };

  return (
    // <SafeAreaView style={{}}>
    <ScrollView style={{}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ImageBackground
          source={require('../AddPhoto/AP1.png')}
          style={{
            width: 382.92,
            height: 132,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../AddPhoto/AP2.png')}
            style={{width: 140, height: 36.54}}
          />
        </ImageBackground>

        <Image
          source={isNewImg ? {uri: imageUri} : imageUri}
          style={{
            width: 120,
            height: 120,
            borderRadius: 120 / 2,
          }}
        />

        <Text
          style={{
            color: '#020F1F',
            fontFamily: 'Inter-Regular',
            fontWeight: '500',
            fontSize: 22,
            lineHeight: 26.63,
            textAlign: 'center',
            width: 229,
            alignSelf: 'center',
            marginTop: 25,
            marginBottom: 15,
          }}>
          Add Your Photos To Complete Your Profile
        </Text>
        <Text
          style={{
            color: '#9B9B9B',
            fontFamily: 'Inter-Regular',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 16.94,
            textAlign: 'center',
          }}>
          Photo Privacy Controls Available In Settings
        </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            openGallery();
          }}
          style={{
            width: 215,
            height: 49,
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 24.5,
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 50,
          }}>
          <Image
            source={require('../AddPhoto/Vector.png')}
            style={{width: 16, height: 16}}
          />
          <Text
            style={{
              fontFamily: 'Inter-regular',
              fontWeight: '500',
              lineHeight: 19.36,
              fontSize: 16,
              color: '#ffffff',
              marginLeft: 5,
            }}>
            Add from Galley
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row', alignSelf: 'center'}}
          onPress={() => {
            openCamera();
          }}>
          <Image
            source={require('../AddPhoto/AP3.png')}
            style={{width: 16.84, height: 16}}
          />
          <Text
            style={{
              marginLeft: 5,
              fontFamily: 'Inter-Regular',
              fontWeight: '500',
              lineHeight: 16.94,
              textAlign: 'center',
              color: '#DA2356',
            }}>
            Use Camera
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-end',
          marginBottom: 30,
        }}>
        {isNewImg ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('Hobbies_Interest')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 200,
              marginVertical: 180,
              // marginLeft:90,
              color: 'white',
              backgroundColor: 'black',
              padding: 10,
              borderWidth: 1,
              borderRadius: 20,
              textAlign: 'center',
            }}>
            <Text style={{color: 'white'}}>Continue</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate('Hobbies_Interest')}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              marginVertical: 200,
            }}>
            <Text style={{color: 'black', marginRight: 20}}>
              Add Photo Later
            </Text>
            <Image
              source={require('../AddPhoto/AP4.png')}
              style={{width: 7.67, height: 14}}
            />
          </TouchableOpacity>
        )}
      </View>
      {/* </View> */}
    </ScrollView>

    // </SafeAreaView>
  );
};

export default AddPhoto;
