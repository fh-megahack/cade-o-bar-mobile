import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#37323E',
    },

    header: {
        flexDirection: 'row',
        paddingHorizontal: 32,
        paddingTop: '7%',
        width: '90%',
        marginBottom: 25,
        alignItems: 'center'
    },

    profileImage: {
        width: 42,
        height: 42,
        borderRadius: 100,
    },

    welcomeText: {
        color: '#fff',
        paddingHorizontal: 10,
        fontSize: 13,
    },

    welcomeTextName: {
        color: '#fff',
        fontWeight: 'bold',
    },

    mapContainer: {
        flex: 1,
        width: '100%',
        borderTopRightRadius: 20,
        borderTopStartRadius: 20,
        overflow: 'hidden',
      },
    
      map: {
        height: '100%',
        width: '100%',
      },
    
      mapMarker: {
        width: 90,
        height: 65,
      },
    
      mapMarkerContainer: {
        width: 90,
        height: 55,
        backgroundColor: '#37323E',
        flexDirection: 'column',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center'
      },
    
      mapMarkerImage: {
        width: 90,
        height: 26,
        resizeMode: 'cover',
      },
    
      mapMarkerTitle: {
        flex: 1,
        color: '#fff',
        fontSize: 8,
        lineHeight: 23,
      },

      footer: {
          flex: 2
      }
});