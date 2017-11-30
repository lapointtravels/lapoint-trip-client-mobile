import React from 'react';
import { StyleSheet, Platform, Image, Text, View, TextInput } from 'react-native';
import { db } from '../config/constants';

export default class Question extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ""
    }
  }

  saveQuestion = (e) => {
    _this = this;
    db.collection("feedbackQuestions").add({
      text: this.state.text
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      _this.setState({text: ""})
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }

  handleChangeText = (text) => {
    this.setState({text: text});
  }

  render () {
    return (
      <View>
        <Text>Text</Text>
        <TextInput 
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={this.handleChangeText} 
          value={this.state.text}
          onSubmitEditing={this.saveQuestion} />
      </View>
    )
  }
}
