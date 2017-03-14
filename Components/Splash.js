import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Splash extends Component {
  state = {
    elems: ['he','she','they','we']
  }
  pressHandler = (e) => {
    console.log(e);
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Splash!!</Text>
          <View>
            {this.state.elems.map((el, i) => <Text onPress={this.pressHandler} key={i}>{el}</Text>)}
          </View>
        </View>
        <Text style={styles.subtitle}>Powered on ReactNative</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#27ae60',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  subtitle: {
    color: 'white',
    fontWeight: '200',
    paddingBottom: 20
  },
  titleWrapper: {
    justifyContent: 'center',
    flex: 1
  }
});

export default Splash
