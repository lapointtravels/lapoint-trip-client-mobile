import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';

import firebase from 'react-native-firebase';

import Auth from './components/Auth';
import TabBar from './components/TabBar.ios';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      authed: false
    };
  }

  componentDidMount() {
    _this = this;
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      _this.setState({authed: (user != null)});
    });
  }

  componenWillUnmount() {
    this.unsubscribe();
  }

  render() {
    if (this.state.authed) {
      return (<TabBar/>);
    } else {
      return (<Auth/>);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    height: 80,
    marginBottom: 16,
    width: 80,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  }
});
