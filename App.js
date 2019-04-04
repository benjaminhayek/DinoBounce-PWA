/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';
import {DinoScroll} from './app/DinoScroll'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      horizontalIsOn: false
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to our Bouncing Dinos!</Text>
        <Text>Scroll Horizontal</Text>
        <Switch 
          onValueChange={(value) => {
            this.setState({horizontalIsOn: value})
          }}
          style={{marginBottom: 10}}
          value={this.state.horizontalIsOn}
        />
        <DinoScroll horizontal={this.state.horizontalIsOn} /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 50,
    borderWidth: 25
  },
  header: {
    fontSize: 24,
    fontWeight: '900',
    textAlign: 'center',
    margin: 25
  }
});
