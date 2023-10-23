import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login_Signup_options from './Screens/Login_Signup_options';
import Profile from './Screens/Profile/Profile';
import Profile_data from './Screens/Profile_data/Profile_data';
import Religion from './Screens/Religion/Religion';
import Email_phone_no from './Screens/Email&phone_no/Email_phone_no';
import Verification from './Screens/Verification/Verification';
import Furthur_details from './Screens/Furthur_details/Furthur_details';
import Almost_done from './Screens/Almost_done/Almost_done';
import Description from './Screens/Description/Description';
import AddPhoto from './Screens/AddPhoto/AddPhoto';
import Hobbies_Interest from './Screens/Hobbies_Interest/Hobbies_Interest';
import Family_Details from './Screens/Family_Details/Family_Details';
import Splash_Screen from './Screens/Splash_Screen/Splash_Screen';
import Family_Status from './Screens/Family_Status/Family_Status';
import Recomended_Prather from './Screens/Recomended_Prather/Recomended_Prather';
import PratherMaches from './Screens/PratherMaches/PratherMaches';
// import Custom_Btn from './Screens/Custom_Btn/Custom_Btn';
const Stack = createNativeStackNavigator();

const App = () => {

return (
    

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login_Signup_options"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Login_Signup_options"
          component={Login_Signup_options}/>
        <Stack.Screen name="Profile_data" component={Profile_data} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Religion" component={Religion} />
        <Stack.Screen name="Email_phone_no" component={Email_phone_no} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Furthur_details" component={Furthur_details} />
        <Stack.Screen name="Almost_done" component={Almost_done} />
        <Stack.Screen name="Description" component={Description} />
        <Stack.Screen name="AddPhoto" component={AddPhoto} />
        <Stack.Screen name="Hobbies_Interest" component={Hobbies_Interest} />
        <Stack.Screen name="Family_Details" component={Family_Details} />
        <Stack.Screen name="Splash_Screen" component={Splash_Screen} />
        <Stack.Screen name="Family_Status" component={Family_Status} />
        <Stack.Screen name="Recomended_Prather" component={Recomended_Prather} />
        <Stack.Screen name="PratherMaches" component={PratherMaches} />
        {/* <Stack.Screen name="Custom_Btn" component={Custom_Btn} /> */}
      </Stack.Navigator>
    </NavigationContainer>

    // </View>
  );
};

export default App;

const styles = StyleSheet.create({});
