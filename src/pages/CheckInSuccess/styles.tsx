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
        marginLeft: '10%',
        marginBottom: 'auto',
        alignItems: 'center',
        flexDirection: 'row'
    },
    arrowLeft: {
        marginLeft: '5%',
        marginTop: '5%',
    },
    textTop: {
        marginRight: 'auto',
        marginLeft: '10%',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20
    },
    containerBottom: {
        backgroundColor: '#FFF',
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

        elevation: 24
    },
    imageCheck: {
        marginTop: 40
    },
    textCheck0: {
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 15
    },
    textCheck1: {
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: 20,
        textAlign: 'center'
    },
    textCheck2: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 15,
        fontFamily: 'OpenSans_300Light',
        width: '70%'
    },
    textCheck3: {
        textAlign: 'center',
        marginTop: '40%',
        width: '70%',
        fontFamily: 'OpenSans_300Light',
    },
    imagePlay: {
        marginTop: 40,
    }
});
