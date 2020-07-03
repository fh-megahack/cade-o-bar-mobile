import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#37323E',
      },
    
      header: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 36,
        width: '100%',
        marginBottom: 16,
        alignItems: 'center',
        color: '#fff',
      },
    
      welcomeText: {
        color: '#fff',
        paddingHorizontal: 20,
        width: '80%',
        fontSize: 15,
        fontFamily: 'OpenSans_300Light',
      },
    
      welcomeTextName: {
        color: '#fff',
        fontFamily: 'OpenSans_600SemiBold',
      },
    
      mapContainer: {
        flex: 1,
        width: '100%',
        borderTopRightRadius: 20,
        borderTopStartRadius: 20,
        overflow: 'hidden',
      },

    qr: {
        width: '80%',
        height: '80%',
    },

    scanner: {
        width: 415,
        height: 500,
        marginTop: '10%'
    }
})