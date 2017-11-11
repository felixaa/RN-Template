import HelloWorldApp from './HelloWorldApp.js';
import React, { Component } from 'react';
import {
  View,
} from 'react-native'
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';

function setup(): React.Component {
  // Do inital app-configuration here
  // Sett global constants
  console.log('Setting up HelloWorld-App');

  class Root extends Component {
    constructor() {
      super();
      this.state = {
        store: configureStore(),
      };
    }

    render() {
      return (
        <Provider store={this.state.store}>
          <HelloWorldApp/>
        </Provider>
      );
    }
  }
  return Root;
}

module.exports = setup;
