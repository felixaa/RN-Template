import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Dimensions,
  StatusBar,
} from 'react-native';
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigator from './HelloWorldNavigator.js'
const SCREEN_WIDTH = Dimensions.get('window').width

class HelloWorldApp extends Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return(
      <View style={{flex: 1}}>
        <StatusBar barStyle={'light-content'}/>
        <AppNavigator navigation={addNavigationHelpers({
           dispatch: this.props.dispatch,
           state: this.props.navigation,
         })} />
       </View>
    );
  }

}

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
  }
});

function select(store) {
  return {
    navigation: store.navigation
  };
}

module.exports = connect(select)(HelloWorldApp);
