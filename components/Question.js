import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';
import { db } from '../config/constants';

export default class Question extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isEditing: true,
      text: ""
    }
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  saveQuestion = (e) => {
    db.collection("feedbackQuestions").add({
      text: this.state.text
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }

  handleChangeText = (text) => {
    e.preventDefault()
    this.setState({
      text: text
    })
  }

  render () {
    if(this.state.isEditing) {
      return (
        <View>
          <Text>Text</Text>
          <TextInput 
            onChangeText={this.handleChangeText} 
            value={this.state.text}>
            onSubmitEditing={this.saveQuestion}
          </TextInput>
        </View>
      )
    }
    return (
      <div>
      </div>
    )
  }
}
