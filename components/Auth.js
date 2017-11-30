import { AccessToken, LoginButton } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';
import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';

export default class Auth extends React.Component {
  render () {
    return (
      <View>
        <LoginButton
          readPermissions={["public_profile", "email"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then((data) => {
                  // create a new firebase credential with the token
                  const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)
                  // login with credential
                  firebase.auth().signInWithCredential(credential)
                })
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    )
  }
}
