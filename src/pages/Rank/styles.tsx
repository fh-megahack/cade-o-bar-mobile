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
    header: {
        flexDirection: 'row',
        paddingHorizontal: 0,
        paddingVertical: 16,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative",
        backgroundColor: '#fff'
    },
    headerIcon: {
        position: 'absolute',
        left: 24
    },
    headerText: {
        color: '#F3CA40',
        textAlign: 'center',
        fontWeight: "bold",
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: 22,
    },
    userBox: {
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 16
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
        flexDirection: 'column'
    },
    rankTop: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    topTitle: {
        fontSize: 20,
        fontFamily: 'OpenSans_300Light',
        color: '#fff'
    },
    rankTop1: {
        fontSize: 20,
        fontFamily: 'OpenSans_600SemiBold',
        color: '#fff'
    },
    rankTop2: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rankTop3: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#9FBEDB'
    },
    rankBottom: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    userRank: {
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
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    containerBottom: {
        width: '100%',
        flexDirection: 'column'
    },
    rankBottomPosition: {
        fontSize: 24,
        color: '#fff',
        width: 20,
        textAlign: 'center'
    },
    userAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 20,
    },
    nameUserRank: {
        fontSize: 18,
        color: '#fff'
    },
    categoryUserRank: {
        fontSize: 17,
        fontFamily: 'OpenSans_300Light',
        color: '#fff'
    },
    rankItem: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingBottom: 16,
        paddingHorizontal: 16
    },
    rankBadge: {
        width: 18,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rankUserInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userRankNumber: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    rankPositionText: {
        fontSize: 24,
        color: '#577590',
        textAlign: 'center'
    },
    userRankContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userRankData: {
        borderBottomWidth: 0.8,
        width: '100%',
        marginBottom: 10
    },
    userRankName: {
        fontSize: 18,
    },
    userRankPoints: {
        fontSize: 20,
        fontFamily: 'OpenSans_600SemiBold',
        marginLeft: 'auto'
    },
    userRankAdd: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#9FBEDB'
    },
    space: {
        width: '100%',
        height: 20
    }
});