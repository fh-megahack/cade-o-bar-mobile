import { StyleSheet } from 'react-native'
import { withTheme } from 'styled-components';

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
        backgroundColor: '#FFF',
        width: '100%',
        height: '85%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center'
    },
    imageCheck: {
        marginTop: 40
    },
    textCheck0: {
        fontWeight: 'bold' ,
        fontSize: 20,
        textAlign: 'center',
        marginTop: 15
    },
    textCheck1: {
        fontWeight: 'bold' ,
        fontSize: 20,
        textAlign: 'center'
    },
    textCheck2: {
        textAlign: 'center',
        marginTop: 15
    },
    textCheck3: {
        textAlign: 'center',
        marginTop: 150
    },
    imagePlay: {
        marginTop: 40
    }
});