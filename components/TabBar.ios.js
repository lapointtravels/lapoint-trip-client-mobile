import React from 'react';
import { StyleSheet, Platform, Image, Text, View, TabBarIOS } from 'react-native';

import Home from './Home';
import Question from './Question';

export default class TabBar extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'home'
    };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'home'}
          systemIcon='featured'
          onPress={() => {
            this.setState({
              selectedTab: 'home',
            });
          }}>
          <Home/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'more'}
          systemIcon='contacts'
          onPress={() => {
            this.setState({
              selectedTab: 'more',
            });
          }}>
          <Question/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}
