import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';
import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native';

export default class Auth extends React.Component {
  facebookLogin() {
    return LoginManager
      .logInWithReadPermissions(['public_profile', 'email'])
      .then((result) => {
        if (!result.isCancelled) {
          console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`)
          // get the access token
          return AccessToken.getCurrentAccessToken()
        }
      })
      .then(data => {
        if (data) {
          // create a new firebase credential with the token
          const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)
          // login with credential
          return firebase.auth().signInWithCredential(credential)
        }
      })
      .then((currentUser) => {
        if (currentUser) {
          console.info(JSON.stringify(currentUser.toJSON()))
        }
      })
      .catch((error) => {
        console.log(`Login fail with error: ${error}`)
      })
  }

  render () {
    return (
      <View>
        <Button onPress={this.facebookLogin} title={"Log in with Facebook"}/>
      </View>
    )
  }
}
