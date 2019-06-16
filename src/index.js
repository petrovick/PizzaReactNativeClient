import React, { Component } from 'react';

import { Text, View } from 'react-native';
import Teste from '~/teste';

export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <View>
        <Text>Welcome to React Native!</Text>
        <Text>To get started, edit App.js</Text>
        <Teste />
      </View>
    );
  }
}
