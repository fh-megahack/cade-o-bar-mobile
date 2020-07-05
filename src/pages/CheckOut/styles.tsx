import { StyleSheet } from 'react-native'
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
    containerBottom: {
        flex: 1,
        backgroundColor: '#37323E',
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 1.43,
        shadowRadius: 9.51,
        elevation: 24,
    },
    textExit: {
        marginTop: 5,
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: 26,
        color: 'white',
        textAlign: 'center'
    },

    textDescription: {
        width: '80%',
        marginTop: 10,
        fontFamily: 'OpenSans_300Light',
        fontSize: 16,
        color: 'white',
        textAlign: 'center'
    },
    action: {
        marginTop: 20,
        backgroundColor: '#28242D',
        flexDirection: 'row',
        borderColor: '#28242D',
        borderBottomColor: '#fff',
        width: '90%',
        height: '20%',
        alignItems: 'center',
    },
    textInput: {
        padding: 20,
        color: 'white',
        width: '100%',
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
        marginTop: 20,
        marginLeft: 'auto',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 18,
    },
    sectionBottom: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        width: '100%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
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
})