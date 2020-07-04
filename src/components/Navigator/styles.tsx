import { StyleSheet } from 'react-native'

export default StyleSheet.create({

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    height: 70,

  },
  col1: {
    width: '42%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3CA40',
  },
  center: {
    alignSelf: 'center',
    backgroundColor: '#F3CA40',
    position: 'absolute',
    width: 100,
    height: 100,
    top: 40,
  },
  volumnCon: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    position: 'absolute',
    width: 80,
    height: 80,
    top: '-30%',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderColor: '#F08A4B',
    borderWidth: 4,
  },
});