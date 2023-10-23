import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import React from 'react';

const Description = ({navigation}) => {
  return (
    <View>
    <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <ImageBackground
          source={require('../Description/D1.png')}
          style={{
            width: 367.92,
            height: 193,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#020F1F', fontSize: 20}}>
            We Have Added A Short
          </Text>
          <Text style={{color: '#020F1F', fontSize: 20}}>
            Description About You
          </Text>
        </ImageBackground>
      </View>
      <Text style={{color: '#020F1F', fontSize: 16}}>About YourSelf</Text>
      <View >
        
        <Text style={{ width:360, height:149, borderWidth:1, borderRadius:20,borderColor:'#BDBCBC80',color:'#9B9B9B'}}>
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged.
          {/* placeholderTextColor={'#9B9B9B'} */}
          </Text>
          {/* </View> */}
      </View>
      <Text style={{color:'black', fontSize:13, textAlign:'center'}}>
          Add my profile to SoulSync affiliated matching services
          </Text>
      <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddPhoto')}
            style={{alignItems: 'center', justifyContent: 'center',
            width: 200,
            marginVertical:320,
            marginLeft:90,
                color: 'white',
                backgroundColor: 'black',
                padding: 10,
                borderWidth: 1,
                borderRadius: 20,
                textAlign: 'center',
            }}>
            <Text
              style={{
               
              }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({});
