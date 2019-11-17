import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native';


export default class Screen extends Component{

    static navigationOptions = {
        title: 'Screen One',
      };


    render(){

        return(
            <View>
                <Button
          title="ScreenTwo"
          onPress={() =>
            this.props.navigation.navigate('ItemDetail', {
              count: 0,
            })
          }
        />
            </View>
        )

    }
}