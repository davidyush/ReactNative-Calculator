import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const SimpleBtn = (props) => {
  return (
    <TouchableOpacity style={props.buttonContainer} onPress={props.pressHandler}>
      <Text style={props.buttonText}>
        {props.value}
      </Text>
    </TouchableOpacity>
  )
}

export class BtnOrdinary extends Component {
  pressHandler = () => {
    const { currentState, value, click } = this.props;
    if(currentState !== '0') {
      click(currentState + value);
    } else {
      click(value);
    }
  }

  render() {
    return (
      <SimpleBtn
        buttonContainer={styles.buttonContainer}
        pressHandler={this.pressHandler}
        buttonText={styles.buttonText}
        value={this.props.value}
      />
    )
  }
}

export class BtnZero extends Component {
  pressHandler = () => {
    const { currentState, value, click } = this.props;
    if(currentState === '0') {
      click('0');
    } else {
      click(currentState + '0');
    }
  }

  render() {
    return (
      <SimpleBtn
        buttonContainer={styles.buttonContainerZero}
        pressHandler={this.pressHandler}
        buttonText={styles.buttonText}
        value={this.props.value}
      />
    )
  }
}

export class BtnAC extends Component {
  pressHandler = () => {
    const { currentState, value, click } = this.props;
    if(value === 'AC') {
      click('0',' ');
    }
  }

  render() {
    return (
      <SimpleBtn
        buttonContainer={styles.buttonContainerGrey}
        pressHandler={this.pressHandler}
        buttonText={styles.buttonText}
        value={this.props.value}
      />
    )
  }
}

export class BtnOperation extends Component {
  pressHandler = () => {
    const { currentState, value, click } = this.props;
    let last = currentState.toString().charAt(currentState.length - 1);
    if('+-*/'.includes(last)) {
      click(currentState);
    } else {
      click(currentState + value);
    }
  }

  render() {
    return (
      <SimpleBtn
        buttonContainer={styles.buttonContainerOperation}
        pressHandler={this.pressHandler}
        buttonText={styles.buttonTextWhite}
        value={this.props.value}
      />
    )
  }
}

export class BtnPoint extends Component {
  pressHandler = () => {
    const { currentState, value, click } = this.props;
    if(currentState === '0') {
      click(currentState);
    } else {
      let symbol = currentState.toString().charAt(0);
      let result = '';
      if(symbol === '-') { result = currentState.slice(1); }
      else { result = `-${currentState}`; }
      
      click(result);
    }

  }

  render() {
    return (
      <SimpleBtn
        buttonContainer={styles.buttonContainerGrey}
        pressHandler={this.pressHandler}
        buttonText={styles.buttonText}
        value={this.props.value}
      />
    )
  }
}

export class BtnDote extends Component {
  pressHandler = () => {
    const { currentState, value, click } = this.props;
    if(currentState.toString().includes('.')) {
      click(currentState);
    } else {
      click(currentState + '.');
    }
  }

  render() {
    return (
      <SimpleBtn
        buttonContainer={styles.buttonContainer}
        pressHandler={this.pressHandler}
        buttonText={styles.buttonText}
        value={this.props.value}
      />
    )
  }
}

export class BtnPercent extends Component {
  pressHandler = () => {
    const { currentState, value, click } = this.props;
    let result = +currentState/100;
    click(result);
  }

  render() {
    return (
      <SimpleBtn
        buttonContainer={styles.buttonContainerGrey}
        pressHandler={this.pressHandler}
        buttonText={styles.buttonText}
        value={this.props.value}
      />
    )
  }
}

export class BtnResult extends Component {
  pressHandler = () => {
    const { currentState, value, click, prev } = this.props;
    let operations = ['+','-','/','*'];
    operations.forEach(operation => {
      currentState.split(operation).forEach((elem, index) => {
        if(index === 1 && elem !== '') {
          let result = (new Function(`return ${currentState}`))();
          click(result.toString().slice(0,15), `${currentState}`);
        }
      });
    });
  }

  render() {
    return (
      <SimpleBtn
        buttonContainer={styles.buttonContainerOperation}
        pressHandler={this.pressHandler}
        buttonText={styles.buttonTextWhite}
        value={this.props.value}
      />
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#d9d9d9',
    paddingTop: 30,
    width: 95,
    height: 95,
  },
  buttonContainerZero: {
    backgroundColor: '#d9d9d9',
    paddingTop: 30,
    width: 190,
    height: 95,
  },
  buttonContainerOperation: {
    backgroundColor: '#f37f26',
    paddingTop: 30,
    width: 95,
    height: 95,
  },
  buttonContainerGrey: {
    backgroundColor: '#bbbbbb',
    paddingTop: 30,
    width: 95,
    height: 95,
  },
  buttonText: {
    color: '#141214',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 26
  },
  buttonTextWhite: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 26
  }
});
