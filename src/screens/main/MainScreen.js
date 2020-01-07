import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert
 } from 'react-native';
import styles from './MainScreenStyle.js';

class MainScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {massa:0, altura:0, resultado:0, resultadoTexto:""}
    this.calcular = this.calcular.bind(this)
  }

   zerar = () => {
    this._textInputMassa.setNativeProps({text:''});
    this._textInputAltura.setNativeProps({text:''});
    this.setState({
      massa:0,
      altura:0,
      resultado:0,
      resultadoTexto:""
    })
   }

    calcular () {

      if( this.state.massa != 0 && this.state.altura != 0 ) {  

        let imc = this.state.massa/(this.state.altura*this.state.altura);
        let atualizaState = this.state;
        atualizaState.resultado = imc;


        if (atualizaState.resultado < 16) {
          this.state.resultadoTexto = "Magreza Grave";

        } else if ((atualizaState.resultado >= 16) && (atualizaState.resultado<=16.9)) {
          this.state.resultadoTexto = "Magreza Moderada";

        } else if ((atualizaState.resultado >= 17) && (atualizaState.resultado<=18.49)) {
          this.state.resultadoTexto = "Magreza Leve";

        } else if ((atualizaState.resultado >= 18.5) && (atualizaState.resultado<=24.99)) {
          this.state.resultadoTexto = "Saudável";

        } else if ((atualizaState.resultado >= 25) && (atualizaState.resultado<=29.99)) {
          this.state.resultadoTexto = "Sobrepeso";

        } else if ((atualizaState.resultado >= 30) && (atualizaState.resultado<=34.99)) {
          this.state.resultadoTexto = "Obesidade Leve";

        } else if ((atualizaState.resultado >= 35) && (atualizaState.resultado<=39.99)) {
          this.state.resultadoTexto = "Obesidade Moderada";

        } else if (atualizaState.resultado >= 40) {
          this.state.resultadoTexto = "Obesidade Grave";

        }
        this.setState(atualizaState);

      } else if ((this.state.massa == 0) || (this.state.altura == 0)) {

          this.state.resultadoTexto = '';
          this.state.resultado = 0;
          Alert.alert(
            'Por favor, insira os valores de massa e altura.',
            '',
            [
              {text: '', onPress: () => console.log('Ask me later pressed')},
              {
                text: '',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: true},
          );
        } 
    } 

    static navigationOptions = {
        header: null
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
          ref={component => this._textInputMassa = component}
          style={styles.inputText} 
          placeholder="Massa" 
          keyboardType="numeric" 
          onChangeText={(massa) => {     
            let num = massa;
            massa = num.replace(",",'.');
            this.setState({massa})}}
          />
  
          <TextInput 
          ref={component => this._textInputAltura = component}
          style={styles.inputText} 
          placeholder="Altura" 
          keyboardType="numeric"
          onChangeText={(altura) => {
            let num = altura;
            altura= num.replace(",",'.');
            this.setState({altura})}}
          />

        </View>

        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.button}
          
          onPress={this.calcular}
          >

          <Text style={styles.buttonText}>Calcular</Text>

          </TouchableOpacity>
          <TouchableOpacity style={styles.button, {backgroundColor:'#87cefa'}}
          
          onPress={this.zerar}
          >

          <Text style={styles.buttonText}>Zerar</Text>

          </TouchableOpacity>
        </View>

        <Text style={styles.resultText}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultText, {fontSize:30}]}>{this.state.resultadoTexto}</Text>
      </View>
    );
  }
}

export default MainScreen;


  