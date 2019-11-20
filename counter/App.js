/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import styles from './Styles';
import Counter from './src/components/Counter';

class App extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <Counter />
      </View>
    );
  }
}

export default App;
