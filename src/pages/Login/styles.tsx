import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf7fa',
    justifyContent: 'center',
  },

  top: {
    flex: 1,
    alignItems: 'center',
    position: 'relative'
  },

  footer: {
    flex: 0.9,
    paddingHorizontal: 25,
    paddingBottom: 10,
    paddingTop: 50,
  },

  logo: {
    resizeMode: 'contain',
    width: '100%',
    marginTop: 30
  },

  imageWave: {
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    top: '60%',
  },

  action: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: '100%',
    alignItems: 'center',
  },

  textInput: {
    marginTop: 30,
    paddingBottom: 10,
    width: '80%',
    color: '#fff'
  },

  button_container: {
    alignItems: 'center',
    justifyContent: 'center'
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
    fontFamily: 'Roboto_500Medium',
    marginLeft: 40,
    color: '#FFF',
    fontSize: 20,
  },

  signUp: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  }
});