import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'


export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#f3ca40',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 0,
    paddingVertical: 16,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative"
  },
  headerIcon: {
    position: 'absolute',
    left: 24
  },
  headerText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: "bold",
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 22,
  },
  content: {
    flex: 1,
    width: '100%',
    marginTop: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#F5F5F5',
    position: 'relative',
    paddingTop: 70,
    paddingBottom: 110,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  userName: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 24,
    width: '100%',
    textAlign: 'center',
  },
  userAvatarContainer: {
    width: '100%',
    position: 'absolute',
    top: -57,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userAvatar: {
    width: 115,
    height: 115,
    resizeMode: 'cover',
    borderRadius: 30,
  },
  userLocation: {
    fontFamily: 'Roboto_300Light',
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
    marginVertical: 5
  },
  userBoard: {
    flexDirection: 'row',
    marginTop: 20,
  },
  userBoardColumn: {
    flexDirection: 'column',
    flex: 0.5
  },
  userInfoTitle: {
    fontFamily: 'Roboto_300Light',
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  userInfoContent: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 24,
    width: '100%',
    textAlign: 'center',
    padding: 2,
    color: '#F3CA40',
  },
  sectionTitle: {
    width: '100%',
    paddingHorizontal: 20,
    fontFamily: 'Roboto_400Regular',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 16,
  },
  separator: {
    width: '80%',
    borderTopColor: '#AEAEAE',
    borderTopWidth: 1,
    alignSelf: 'center',
    marginTop: 10,
  },
  rescueContent: {
    padding: 20
  },
  rescueBtn: {
    width: '100%',
    borderColor: '#37323E',
    borderWidth: 1,
    padding: 6,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10
  },
  rescueBtnText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Roboto_500Medium',
    color: '#37323E',
    fontSize: 23,
  },
  rescueTitle: {
    textAlign: 'left',
    width: '60%',
    fontFamily: 'Roboto_400Regular',
    fontSize: 20,
    lineHeight: 20,
  },
  rescuePoints: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 20,
    width: 120,
    borderColor: '#BFBDC1',
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 5,
    padding: 2,
    color: '#F3CA40',
  },
  rescueText: {
    fontFamily: 'Roboto_300Light',
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
    marginVertical: 5
  },
  rescueHead: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  itemsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 32,
  },
  item: {
    flex: 1,
    flexDirection: 'column'
  },
  itemTitle: {
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
    fontSize: 13,
  },
  itemImg: {
    borderWidth: 2,
    borderColor: '#eee',
    height: 120,
    width: 120,
    borderRadius: 8,
    marginRight: 8,
    resizeMode: 'cover'
  },
  slider: {
    marginBottom: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#37323E'
  }
});