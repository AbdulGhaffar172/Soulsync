import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import React from 'react';
import DateField from 'react-native-datefield';
const Profile_data = ({navigation}) => {
  return (
    <ScrollView >
    <View style={{flex:1,}}>
    <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={{ alignItems: 'center', justifyContent: 'center', flex:0.3,marginVertical:10}}>
        
        <ImageBackground source = {require('../Profile_data/Pd2.png')}
        style={{width:367.92, height:193, alignItems:'center', justifyContent:'center'}}
      >
        <Image
          source={require('../Profile_data/Pd1.png')}
          style={{width: 155.56, height: 100,}}/>
          </ImageBackground>
      </View>
      <View style={{flex:0.3, marginHorizontal:7}}>
        <Text style={{color: 'black', fontSize: 22, margin:15}}>Your Name</Text>
        <TextInput
          placeholder="First Name" placeholderTextColor={'black'} maxLength={7}
          style={{
            width: 350,
            height: 55,
            margin: 10,
            borderWidth: 1,
            padding: 20,
            borderRadius: 27.5,
            color:'black'
          }}
        />
        <TextInput
          placeholder="Second Name" placeholderTextColor={'black'} maxLength={7}
          style={{
            // textAlign:'center',
            width: 350,
            height: 55,
            margin: 10,
            borderWidth: 1,
            padding: 20,
            borderRadius: 27.5,
            color:'black'
          }}
        />
      </View>
      <Text
          style={{
            color: 'black',
            fontSize: 22,
            margin:20
          }}>
          Date of Birth
        </Text>
        {/* <DateField onSubmit={(value) => console.log(value)} /> */}

<DateField styleInput={{color:'black',borderWidth:1, borderColor:'black', borderRadius:30,
width:100, height:55, marginHorizontal:15,alignItems:'center', justifyContent:'center'}}
placeholderTextColor='black'
  labelDate="DD" 
  labelMonth="MM"
  labelYear="YYYY" 
/>
        <View style={{alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity>
        <Text style={{
          width:200,color:'white', backgroundColor:'black', padding:10,
          borderWidth:1, borderRadius:20, textAlign:'center', marginVertical:170
        }} onPress={()=>navigation.navigate("Religion")}>
          Continue
        </Text>
      </TouchableOpacity>
      </View>
      
    </View>
    </ScrollView>
  );
};

export default Profile_data;

const styles = StyleSheet.create({});
