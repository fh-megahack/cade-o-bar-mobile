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
    },
    sectionTop: {
        width: '100%',
        marginTop: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCheck0: {
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: 20,
        textAlign: 'center',
        width: 200
    },
    textCheck1: {
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: 20,
        textAlign: 'center'
    },
    textCheck2: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'OpenSans_300Light',
        width: '70%'
    },
    textCheck3: {
        textAlign: 'center',
        marginBottom: 20,
        width: 200,
        fontFamily: 'OpenSans_300Light',
    },
    sectionBottom: {
        width: '100%',
        marginBottom: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
        alignItems: 'center'
    },
    buttonCancel: {
        backgroundColor: "#fff",
        borderColor: '#577590',
        borderWidth: 2,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 100,
        height: 40
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
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
    }
});
