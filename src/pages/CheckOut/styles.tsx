import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3CA40',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerTop: {
        backgroundColor: '#F3CA40',
        width: '100%',
        height: '15%',
        marginBottom: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    arrowLeft: {
        marginRight: 'auto',
        marginLeft: 20,
        marginTop: 25
    },
    textTop: {
        marginTop: 20,
        marginRight: 'auto',
        marginLeft: -40,
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20
    },
    containerBottom: {
        backgroundColor: '#37323E',
        width: '100%',
        height: '85%',
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
    textExit: {
        marginTop: 30,
        fontWeight: 'bold',
        fontSize: 26,
        color: 'white',
        textAlign: 'center'
    },
    action: {
        marginTop: 40,
        backgroundColor: '#28242D',
        flexDirection:'row',
        borderColor: '#28242D',
        borderBottomColor:'#fff',
        width: '90%',
        height: 140,
        alignItems: 'center',
    },
    textInput: {
        marginBottom: 'auto',
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
        marginTop: 40,
        marginLeft: 'auto',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 18,
        marginRight: 20
    },
})