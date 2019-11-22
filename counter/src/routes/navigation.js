import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import Counter from '../containers/Counter';
import Details from '../containers/Details';
import Home from '../containers/Home';
// import {Counter,Details, Home} from '../containers';

const HomeTab = createStackNavigator({
  Counter,
  Home,
  Details,
});

const DetailsTab = createStackNavigator({
  Details,
});

export default createAppContainer(
  createMaterialBottomTabNavigator(
    {
      HomeTab,
      DetailsTab,
    },
    {
      activeColor: '#f0edf6',
      inactiveColor: '#226557',
      barStyle: {backgroundColor: '#3BAD87'},
    },
  ),
);
