import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

class CubicRow extends Component {
  render() {
    return (
      <View style={styles.row}>
        <View style={styles.cubic1}/>
        <View style={styles.cubic2}/>
        <View style={styles.cubic3}/>
        <View style={styles.cubic4}/>
      </View>
    )
  }
}


class Hello extends Component {
  state = {
    text: ''
  }

  changeHadnler = (e) => {
    console.log(e);
  }

  render() {
    return (
      <View style={styles.container}>
        <CubicRow/>
        <CubicRow/>
        <CubicRow/>
        <CubicRow/>
        <CubicRow/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  cubic1: {
    width: 90,
    borderRadius: 5,
    height: 90,
    backgroundColor: 'powderblue'
  },
  cubic2: {
    width: 90,
    borderRadius: 5,
    height: 90,
    backgroundColor: 'skyblue'
  },
  cubic3: {
    width: 90,
    borderRadius: 5,
    height: 90,
    backgroundColor: 'steelblue'
  },
  cubic4: {
    width: 90,
    borderRadius: 5,
    height: 90,
    backgroundColor: 'red'
  }
});
export default Hello
