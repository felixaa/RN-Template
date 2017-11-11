import { StackNavigator } from 'react-navigation';
import React from 'react';
import {
  View,
  ActivityIndicator
} from 'react-native'

import HomeScreen from './components/containers/home/HomeScreen.js'

const LoadingScreen = ({...props}) => {
  return (
    <View style={{flex: 1}}>
      <ActivityIndicator size="large" style={{flex: 1}}/>
    </View>
  );
}


const routeConfigs = {
  Home: {
    screen: HomeScreen
  },
  Loading: {
    screen: LoadingScreen
  }
}

const AppNavigator = StackNavigator(routeConfigs, {headerMode: 'none'});

module.exports = AppNavigator;
