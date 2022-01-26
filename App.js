import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './src/screens/LoginFLow/splash';
import Intro from './src/screens/LoginFLow/Intro';
import Login from './src/screens/LoginFLow/Login';
import forgotPassword from './src/screens/LoginFLow/forgotPassword';
 import SignUp from './src/screens/LoginFLow/SignUp';
import SendOTP from './src/screens/LoginFLow/sendOTP';
import OTPVerify from './src/screens/LoginFLow/OTPVerify';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Intro" component={Intro} />
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Forgot password" component={forgotPassword} />
         <Stack.Screen name="SignUp" component={SignUp} />
         <Stack.Screen name="Send OTP" component={SendOTP} />
         <Stack.Screen name="Verify OTP" component={OTPVerify} /> 
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;