import React from 'react';
import { StyleSheet, Platform, Image, Text, View, TextInput } from 'react-native';
import { db } from '../config/constants';
import { LoginButton } from 'react-native-fbsdk';

export default class Profile extends React.Component {
  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Profile</Text>
        <LoginButton/>
      </View>
    )
  }
}
