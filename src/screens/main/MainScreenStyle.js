import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex:1,
    },
  
    inputContainer: {
      flexDirection:'row',
      marginTop:70,
      marginBottom:10
    },
  
    inputText: {
      fontSize:50,
      width:'50%',
      alignSelf:'center',
      textAlign:'center',
      color:'#778899'
    },
  
    button: {
      flex:1,
      backgroundColor:'#90ee90',
      width:"50%",
      height:120
    },
  
    buttonText: {
      textAlign:'center',
      padding:40,
      fontSize:27,
      color:'#778899'
    },
  
    resultText: {
      textAlign:'center',
      padding:20,
      fontSize: 60,
      color:'#778899'
    }
  })

  export default styles;