import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3CA40',
        paddingTop: Constants.statusBarHeight,
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
    containerBottom: {
        flex: 1,
        backgroundColor: '#FFF',
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 50,
        },
        shadowOpacity: 1.0,
        shadowRadius: 16.00,
        elevation: 24,
    },
    bottomTitle: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    textRoulette0: {
        fontSize: 26,
        fontFamily: 'OpenSans_600SemiBold',
        marginTop: 5
    },
    textRoulette1: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'OpenSans_300Light',
        width: '80%',
        marginTop: 10,
    },
    sectionMiddle: {
        marginTop: 10
    },
    roulleteAnimation: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    roulleteAnimationHidden: {
        width: 120,
        height: 120,
        display: 'none'
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
        marginBottom: 40,
        marginLeft: 'auto',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        paddingHorizontal: 30
    },
    buttonText: {
        flex: 1,
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center'
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: 250
    },
    openButton: {
        backgroundColor: "#577590",
        borderColor: '#577590',
        borderWidth: 2,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 100,
        height: 40,
        alignItems: 'center',
        marginTop: 20
    },
    modalTextHead: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: "center",
        fontFamily: 'OpenSans_600SemiBold',
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontFamily: 'OpenSans_300Light',
    },
    modalTextPoint: {
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: 16,
        color: '#f08a4b'
    },
    modalButtons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});
