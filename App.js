import { View, StyleSheet} from 'react-native';
import React, { Component } from 'react'
import LoginScreen from './LoginScreen';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop:100
  }
})