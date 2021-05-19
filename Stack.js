import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import * as firebase from '@react-native-firebase/app';

import {
  Backend,
  Boiler,
  Chat,
  ForgetPassword,
  GioChat,
  Register,
  Login,
} from './Screen/index';
const Header = () => ({
  headerShown: false,
});

const firebaseConfig = {
  apiKey: 'AIzaSyBx62n-do2VU_YO-GPcy2LSVTVuXSd0VAI',
  authDomain: 'cptest-c6c7d.firebaseapp.com',
  databaseURL: 'https://cptest-c6c7d.firebaseio.com',
  projectId: 'cptest-c6c7d',
  storageBucket: 'cptest-c6c7d.appspot.com',
  messagingSenderId: '969621782459',
  appId: '1:969621782459:web:46eac613ac8148d6e30e9e',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Backend"
          component={({navigation}) => {
            return <Backend navigation={navigation} />;
          }}
          options={Header}
        />
        <Stack.Screen
          name="Boiler"
          component={({navigation}) => {
            return <Boiler navigation={navigation} />;
          }}
          options={Header}
        />
        <Stack.Screen
          name="Login"
          component={({navigation}) => {
            return <Login navigation={navigation} />;
          }}
          options={Header}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
