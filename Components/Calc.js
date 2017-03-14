import React, { Component } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'

import {
  BtnOrdinary,
  BtnZero,
  BtnAC,
  BtnOperation,
  BtnPoint,
  BtnDote,
  BtnPercent,
  BtnResult } from './Buttons'

class Calc extends Component {
  state = {
    text: '0',
    prev: ''
  }

  handleClick = (value, prev) => {
    this.setState({
      text: value,
      prev: prev || this.state.prev
    });

  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.textInput}>{this.state.prev}</Text>
          <Text style={styles.textInput}>{this.state.text}</Text>
        </View>
        <View style={styles.row}>
          <BtnAC prev={this.state.prev} currentState={this.state.text} click={this.handleClick} value='AC'/>
          <BtnPoint currentState={this.state.text} click={this.handleClick} value='+/-'/>
          <BtnPercent currentState={this.state.text} click={this.handleClick} value='%'/>
          <BtnOperation currentState={this.state.text} click={this.handleClick} value='/'/>
        </View>
        <View style={styles.row}>
          <BtnOrdinary currentState={this.state.text} click={this.handleClick} value='1'/>
          <BtnOrdinary currentState={this.state.text} click={this.handleClick} value='2'/>
          <BtnOrdinary currentState={this.state.text} click={this.handleClick} value='3'/>
          <BtnOperation currentState={this.state.text} click={this.handleClick} value='*'/>
        </View>
        <View style={styles.row}>
          <BtnOrdinary currentState={this.state.text} click={this.handleClick} value='4'/>
          <BtnOrdinary currentState={this.state.text} click={this.handleClick} value='5'/>
          <BtnOrdinary currentState={this.state.text} click={this.handleClick} value='6'/>
          <BtnOperation currentState={this.state.text} click={this.handleClick} value='-'/>
        </View>
        <View style={styles.row}>
          <BtnOrdinary currentState={this.state.text} click={this.handleClick} value='7'/>
          <BtnOrdinary currentState={this.state.text} click={this.handleClick} value='8'/>
          <BtnOrdinary currentState={this.state.text} click={this.handleClick} value='9'/>
          <BtnOperation currentState={this.state.text} click={this.handleClick} value='+'/>
        </View>
        <View style={styles.row}>
          <BtnZero currentState={this.state.text} click={this.handleClick} value='0'/>
          <BtnDote currentState={this.state.text} click={this.handleClick} value='.'/>
          <BtnResult prev={this.state.prev} currentState={this.state.text} click={this.handleClick} value='='/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: '#6f6371',
  },
  row: {
    flexDirection: 'row'
  },
  textInput: {
    color: '#ffffff',
    backgroundColor: '#6f6371',
    fontSize: 35,
    fontWeight: 'bold',
    alignSelf:'flex-end',
    padding: 10,
    paddingTop: 45,
    width: '100%',
    textAlign: 'right'
  }
});

export default Calc
