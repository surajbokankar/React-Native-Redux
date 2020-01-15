import React,{Component} from 'react';
import {
    View,
    Text
} from 'react-native';



export default class Detail extends Component{

    constructor(props){
        super(props)
    }

    render(){
      const { navigation } = this.props;
      const profile=navigation.getParam('profileDetail', 'NO-ID')
        return(
          <View>

          <Text>
          Name: {profile.name} {profile.lastname}
        </Text>
             <Text>
               Detail Screen Called

             </Text>
          </View>
        )
    }

}