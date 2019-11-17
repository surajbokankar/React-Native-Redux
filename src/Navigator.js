import React, { Component } from 'react';
import ScreenOne from './Components/ScreenOne';
import ItemDetail from './Components/HomeScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CounterAction from './Actions/CounterActions';




const Navigator = createStackNavigator({
  Feed: { screen: CounterAction },
  ItemDetail: { screen: ItemDetail },
},{
  initialRouteName: 'Feed',
})

let Navigation = createAppContainer(Navigator);

class Nav extends Component {
  render() {
    return (
      <Navigation />
    )
  }
}
      
export default Nav