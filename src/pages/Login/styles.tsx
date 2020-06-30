import { StyleSheet } from 'react-native'

 export default StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#fdf7fa',
    },
    header: {
      flex:1,
      alignItems: 'center',
    },
    footer: {
      flex: 0.7,
      padding:25,
      backgroundColor: '#f3ca40',
    },
    imageBackground:{
      flex: 2,
      width: '100%',
      resizeMode: 'contain',
      top: 120,
      backgroundColor: '#fdf7fa',
      marginBottom: -160,
      marginLeft: 10,
    },
    imageWave:{
      alignItems: 'center',
      justifyContent: 'center',
      left: 0,
      top: 300,
    },
    action: {
      flexDirection:'row',
      borderBottomWidth:1,
      borderBottomColor:'#fff',
      width: '90%',
      alignItems: 'center',
    },
    textInput: {
      marginTop:30,
      paddingBottom:10,
      color:'#fff'
    },
    button_container: {
      alignItems: 'center',
      justifyContent:'center'
    },
    button: {
      backgroundColor: '#13528B',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 40,
    },
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: '#124C80',
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      marginLeft: 40,
      color: '#FFF',
      fontSize: 16,
    },
    signUp: {
      flexDirection:'row',
      justifyContent:'center',
      marginTop:30,
    }
  });