import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Components/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './Components/WelcomeScreen';
import SignInScreen from './Components/SignIn';
import SignUpScreen from './Components/SignUp';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
