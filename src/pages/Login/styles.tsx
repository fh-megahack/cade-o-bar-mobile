import { StyleSheet } from 'react-native'

 export default StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#fdf7fa',
    },
    header: {
      flex:1,
    },
    footer: {
      flex: 0.7,
      padding:25,
      backgroundColor: '#f3ca40',
    },
    imageBackground:{
      flex: 3,
      justifyContent:'center',
      alignItems:'center',
      width: 130,
      backgroundColor: '#fdf7fa',
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
    animation: {
      backgroundColor:'#577590',
      paddingVertical:15,
      marginTop:50,
      borderRadius:10,
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
    }
  });