import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#F3CA40',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerTop: {
        backgroundColor: '#F3CA40',
        width: '100%',
        height: 80,
        marginBottom: 'auto',
        alignItems: 'center',
        flexDirection: 'row',
    },
    arrowLeft: {
        left: 20,
    },
    textTop: {
        width: '90%',
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    },
    containerBottom: {
        flex: 2,
        backgroundColor: '#fff',
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 50,
        },
        shadowOpacity: 1.0,
        shadowRadius: 16.00,

        elevation: 24,
    },
    imageTicket: {
        marginTop: 60
    },
    gerado: {
        marginTop: 20, 
        fontWeight: 'bold', 
        fontSize: 26
    },
    cupomText: {
        fontSize: 18
    },
    cupomText1: {
        fontSize: 18,
        marginTop: 15
    },
    buttonCupom: {
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        height: 50,
        width: '70%',
        borderRadius: 25,
        marginTop: 70,
        borderColor: '#d3d3d3',
    },
    buttonCupomText: {
        marginHorizontal: 90, 
        fontSize: 20, 
        fontFamily: 'Roboto_400Regular'
    },
    buttonCupomIcon: { 
        marginLeft: 'auto', 
        marginRight: 10 
    },
    button: {
        backgroundColor: '#F3CA40',
        width: '70%',
        height: 60,
        flexDirection: 'row',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 110,
        marginLeft: 'auto',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
        paddingHorizontal: 30
    },
    buttonText: {
        flex: 1,
        color: '#FFF',
        fontSize: 18,
        marginRight: 20,
        textAlign: 'center'
    },
});