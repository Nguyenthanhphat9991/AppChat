import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

// import LearnScreen from './Screen/LearnScreen';
import Stack from './Stack';

export default class App extends Component {
  render() {
    return <Stack />;
  }
}
AppRegistry.registerComponent('App', () => App);
