import { StyleSheet } from 'react-native'

 export default StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#fdf7fa',
      justifyContent:'center',
    },
    header: {
      flex:2,
    },
    footer: {
      flex:1,
      padding:25,
      backgroundColor: '#F3CA40',
    },
    imageBackground:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      width:"100%",
      backgroundColor: '#fdf7fa',
    },
    imageWave:{
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      left: 0,
      right: 0,
      top: 145,
      bottom: 0,
    },
    action: {
      flexDirection:'row',
      borderBottomWidth:1,
      borderBottomColor:'#fff'
    },
    textInput: {
      flex:1,
      marginTop:5,
      paddingBottom:7,
      color:'#fff'
    },
    button_container: {
      alignItems: 'center',
      justifyContent:'center'
    },
    animation: {
      backgroundColor:'#577590',
      paddingVertical:10,
      marginTop:30,
      borderRadius:100,
      justifyContent:'center',
      alignItems:'center',
    },
    textLogin: {
      color:'white',
      fontWeight:'bold',
      fontSize: 18
    },
    signUp: {
      flexDirection:'row',
      justifyContent:'center',
      marginTop:60,
    },
    textSignUp: {
      fontWeight:'bold',
    }
  });