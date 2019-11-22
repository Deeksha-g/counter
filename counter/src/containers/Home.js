import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SimpleButton from '../components/SimpleButton';

class Home extends React.Component {
  goBack = () => {
    this.props.navigation.navigate('Counter');
  };
  render() {
    return (
      <View style={styles.counterSection}>
        <Text>Home Page</Text>
        <SimpleButton
          title="goBack"
          onPress={this.goBack}
          style={{padding: 10}}
        />
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

export default Home;
