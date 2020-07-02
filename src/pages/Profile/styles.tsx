import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'


export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#f3ca40',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 0,
    paddingVertical: 16,
    width: '100%',
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative"
  },
  headerIcon: {
    position: 'absolute',
    left: 0
  },
  headerText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: "bold",
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 22,
  },
  name: {
    color: '#f3ca40',
    fontWeight: "bold",
  },
  description: {
    top: 10,
    color: '#BFBDC1',
    fontWeight: '100',
    width: 300,
    textAlign: 'center'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#37323E'
  }
});