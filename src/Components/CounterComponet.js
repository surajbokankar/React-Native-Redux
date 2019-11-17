import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native';

export default class CounterApp extends Component{

    static navigationOptions = {
        title: 'Counter',
      };

    constructor(props){
        super(props)
    }


    render(){
       // alert(JSON.stringify(this.props))
        if(this.props.isAPISuccess){
           // alert("Success")
           this.props.navigation.navigate('ItemDetail', {
            count: 10,
          })
        }
       return(
            <View style={styles.container}>

<Button
                    onPress={this.props.increment}
                    title="Increase Count"
                    color="#841584"
                    accessibilityLabel="Increase Count"
                />

                <Text>{this.props.count}</Text>

                <Button
                    onPress={this.props.decrement}
                    title="Decrease Count"
                    color="#841584"
                    accessibilityLabel="Decrease Count"
                />

                  <Text>Click to Call API</Text>

                   <Button
                    onPress={this.props.callapi}
                    title="Call API and Redirect"
                    color="#000000"
                    accessibilityLabel="Redirect to Route"
                   />

            </View>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    redirect: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        marginTop:20,
    },
});