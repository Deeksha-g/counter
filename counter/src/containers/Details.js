import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SimpleButton from '../components/SimpleButton';

class Details extends React.Component {
  goBack = () => {
    this.props.navigation.navigate('Counter');
  };
  goTo = () => {
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <View style={styles.counterSection}>
        <Text>Details Page</Text>
        <SimpleButton
          title="goBack"
          onPress={this.goBack}
          style={{padding: 10}}
        />
        <SimpleButton title="Next" onPress={this.goTo} style={{padding: 10}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counterSection: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Details;
