import React from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import SimpleButton from './SimpleButton';
import SuccessMessage from './SuccessMessage';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: '',
    };
  }
  incrementCounter = () => {
    this.setState({counter: this.state.counter + 1}, () => {
      this.getMessage();
    });
  };

  decrementCounter = () => {
    if (this.state.counter >= 1) {
      this.setState({counter: this.state.counter - 1}, () => {
        this.getMessage();
      });
    }
  };

  getMessage = () => {
    switch (this.state.counter) {
      case 60:
        this.setState({message: 'successfully completed session 1'});
        break;
      case 120:
        this.setState({message: 'successfully completed session 2'});
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.counterSection}>
          <SimpleButton title="+" onPress={this.incrementCounter} />
          <Text style={styles.counterValue}>{this.state.counter}</Text>
          <SimpleButton title="-" onPress={this.decrementCounter} />
        </View>
        {this.state.counter === 60 || this.state.counter === 120 ? (
          <SuccessMessage value={this.state.message} />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width - 20,
    height: 400,
    borderRadius: Dimensions.get('window').width - 20 / 2,
    borderWidth: 1,
    borderColor: '#3289a8',
  },
  counterValue: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  counterSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Counter;
