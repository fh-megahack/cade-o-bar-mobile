import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: Constants.statusBarHeight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerTop: {
        backgroundColor: '#fff',
        width: '100%',
        height: '10%',
        marginBottom: 'auto',
        alignItems: 'center',
        flexDirection: 'row',
    },
    arrowLeft: {
        left: 20,
        color: '#F3CA40'
    },
    textTop: {
        width: '90%',
        textAlign: 'center',
        color: '#F3CA40',
        fontWeight: 'bold',
        fontSize: 20,
    },
    scroll: {
        width: '90%',
    },
    containerBottom: {
        alignItems: 'center'
    },
    rankBox: {
        flex: 1,
        width: '90%',
        borderRadius: 25,
        padding: '5%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
    },
    rankTop: {
        flexDirection: 'row', 
        width: '100%', 
        justifyContent: 'space-between', 
        alignItems: 'center',
    },
    rankTop1: {
        fontSize: 21, 
        fontFamily: 'OpenSans_300Light', 
        color: '#fff'
    },
    rankTop2: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    rankTop3: {
        fontSize: 21, 
        fontWeight: 'bold', 
        color: '#9FBEDB'
    },
    rankBottom: {
        flexDirection: 'row', 
        width: '100%', 
        marginTop: '12%'
    },
    rankBottomPosition: {
        fontSize: 32, 
        color: '#fff', 
        marginLeft: '5%'
    },
    userAvatar: {
        width: 50,
        height: 50,
        marginLeft: '7%',
        marginBottom: '3%'
    },
    userRank: {
        marginLeft: '6%'
    },
    nameUserRank: {
        fontSize: 20, 
        color: '#fff'
    },
    categoryUserRank: {
        fontSize: 17, 
        fontFamily: 'OpenSans_300Light', 
        color: '#fff'
    },
    listRank: {
        flex: 2,
        width: '100%',
        marginLeft: 'auto',
        flexDirection: 'row'
    },
    medalGold: {
        marginTop: '130%'
    },
    medalRank: {
        marginTop: '170%'
    },
    userRankContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: '9.7%'
    },
    userRankData: {
        borderBottomWidth: 0.8, 
        width: '70%', 
        borderBottomColor: '#d3d3d3'
    },
    userRankName: {
        marginLeft: '4%', 
        fontSize: 20
    },
    userRankCategory: {
        marginLeft: '4%', 
        fontSize: 17, 
        fontFamily: 'OpenSans_300Light', 
        marginBottom: '4%'
    },
    userRankPoints: {
        fontSize: 21, 
        fontFamily: 'OpenSans_300Light', 
        marginLeft: 'auto'
    },
    userRankAdd: {
        fontSize: 21, 
        fontWeight: 'bold', 
        color: '#9FBEDB'
    }
});