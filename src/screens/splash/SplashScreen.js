import React, {Component} from 'react';
import { 
  Text,
  View,
  Image
 } from 'react-native';


 class SplashScreen extends Component {

    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        setTimeout(()=> {
            this.props.navigation.navigate('Main');
            }, 2000);
    };

    render() {
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:70, fontWeight:'bold'}}>IMC</Text>
                <Text style={{fontSize:20}}>Calculadora</Text>
            </View>
        )
    }     
}

export default SplashScreen;