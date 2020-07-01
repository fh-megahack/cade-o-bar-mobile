import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#F8F9FA',
      height: 70,
    },
    col1: {
      width: '42%',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#37323e',
    },
    center: {
      alignSelf: 'center',
      backgroundColor: '#37323e',
      position: 'absolute',
      width: 100,
      height: 400,
      top: 10,
      borderRadius: 40,
    },
    center2: {
      alignSelf: 'center',
      backgroundColor: '#F8F9FA',
      position: 'absolute',
      width: 90,
      height: 90,
      top: -56,
      borderRadius: 100,
    },
    volumnCon: {
      alignSelf: 'center',
      backgroundColor: '#fff',
      position: 'absolute',
      width: 80,
      height: 80,
      top: '-50%',
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'gray',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
  });