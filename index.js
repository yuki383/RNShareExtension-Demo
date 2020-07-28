/**
 * @format
 */

import React from 'react';
import {AppRegistry, View, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

const Share = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'yellowgreen'}}>
      <Text>Hello Share Extension on RN@0.63</Text>
    </View>
  );
};

AppRegistry.registerComponent('MyShareEx', () => Share);
