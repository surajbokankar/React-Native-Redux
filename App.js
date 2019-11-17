import React , {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import store from './src/Reducers/index';
import CounterActions from './src/Actions/CounterActions';
import Demo from './src/Demo';
import Navigator from './src/Navigator';


export default class App extends Component {

constructor(props){
  super(props)
}


  render(){
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    );
  }
  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
