import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

import Login from './Screen/Login';
import Boiler from './Screen/Boiler';
import Friendlist from './Screen/Friendlist';
import Chat from './Screens/Chat';
import GloChat from './ScreenGloChat';
import ForgetPassword from './Screen/ForgetPassword';
import Register from './Screen/Register';

import {StackNavigator} from 'react-navigation';
import * as firebase from '@react-native-firebase/app';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      page: 'connection',
      loading: true,
      authenticated: false,
    };
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#16a085',
      elevation: null,
    },
    header: null,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({loading: false, authenticated: true});
      } else {
        this.setState({loading: false, authenticated: false});
      }
    });
  }

  render() {
    if (this.state.loading) return null; // Render loading/splash screen etc
    if (!this.state.authenticated) {
      return <Login navigation={this.props.navigation} />;
    }
    return <Boiler navigation={this.props.navigation} />;
  }
}
