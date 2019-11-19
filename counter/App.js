/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';

import Counter from './src/components/Counter';

class App extends React.Component {
  render() {
    return (
      <View>
        <Counter></Counter>
      </View>
    );
  }
}

export default App;
