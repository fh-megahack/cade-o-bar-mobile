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
    content: {
        flex: 1,
        width: '100%',
        marginTop: 60,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#37323e',
        position: 'relative',
        paddingTop: 120,
        paddingBottom: 110,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 1.43,
        shadowRadius: 9.51,
        elevation: 12,
    },

    barContainer: {
        width: '100%',
        position: 'absolute',
        alignItems: 'center',
        top: -50,
    },
    barCenter: {
        width: '90%',
        backgroundColor: '#211D27',
        flexDirection: 'column',
        borderRadius: 25,
        overflow: 'hidden',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 1.43,
        shadowRadius: 9.51,
        elevation: 13,
        paddingBottom: 16
    },
    barContainerTop: {
        width: '100%',
        position: 'relative',
    },
    heartView: {
        width: '90%',
        position: 'absolute',
        zIndex: 1,
        top: '10%',
    },
    heartButton: {
        width: 35,
        marginLeft: '85%'
    },

    barHeaderImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },

    barHeaderTitle: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'Roboto_400Regular',
        fontWeight: 'bold',
        marginTop: 5,
    },
    barBoard: {
        flexDirection: 'row',
        marginTop: 5,
    },
    barBoardColumn: {
        flexDirection: 'column',
        flex: 0.5
    },
    barBoardTitle: {
        fontFamily: 'Roboto_300Light',
        fontSize: 18,
        color: 'white',
        width: '100%',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
    },

    barInfos: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },

    rating: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    bar: {
        width: '10%',
        color: '#fff'
    },

    infoText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Roboto_300Light',
    },

    counter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },

    counterInfo: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%'
    },

    counterInfoText: {
        fontSize: 27,
        color: '#F08A4B',
        fontWeight: 'bold',
        marginLeft: '8%'
    },

    containerMain: {
        flex: 2,
        width: '100%',
        backgroundColor: '#37323e',
    },

    barLinks: {
        width: '90%',
        paddingHorizontal: '6%',
    },

    barLocation: {
        flexDirection: 'row',
        marginBottom: '3%',
    },

    barLink: {
        flexDirection: 'row',
        marginTop: '2%',
        marginBottom: '2%',
    },

    barLocationText: {
        color: '#F6BB96',
        marginHorizontal: '3%',
        fontFamily: 'Roboto_300Light',
        fontSize: 16
    },

    barLinkText: {
        color: '#F6BB96',
        marginHorizontal: '3%',
        fontFamily: 'Roboto_300Light',
        textDecorationLine: 'underline',
        fontSize: 16
    },

    homeStars: {
        marginHorizontal: '3%',
        marginTop: '5%',
        width: '100%'
    },

    homeStarsText: {
        marginHorizontal: '3%',
        color: '#fff',
        fontFamily: 'Roboto_500Medium',
        fontSize: 18
    },

    favoritesTitle: {
        width: '100%',
        height: 50,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    favoritesText: {
        marginHorizontal: '3%',
        color: '#fff',
        fontFamily: 'Roboto_500Medium',
        fontSize: 18
    },

    seeMore: {
        color: '#BFBDC1',
        fontSize: 10,
        fontFamily: 'Roboto_400Regular',
        marginTop: 5,
    },

    favorites: {
        marginTop: '2%'
    },

    favoritesCard: {
        backgroundColor: '#28242D',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
    },

    favoritesCardHeader: {
        flexDirection: 'row',
    },

    favoritesName: {
        fontSize: 18,
        color: '#fff',
        padding: '2%',
        paddingHorizontal: '5%',
        fontFamily: 'Roboto_300Light',
        width: '100%'
    },

    favoritesImage: {
        width: 42,
        height: 42,
        borderRadius: 100,
    },

    favoritesCardFooter: {
        marginTop: '5%'
    },

    favoritesCardComment: {
        fontSize: 15,
        fontFamily: 'Roboto_300Light',
        color: '#fff',
        maxWidth: '95%',
    },
    checkOutButton: {
        borderWidth: 1,
        borderColor: '#fff',
        height: 60,
        flexDirection: 'row',
        borderRadius: 40,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    item: {
        flex: 1,
        flexDirection: 'column'
    },
    itemTitle: {
        fontFamily: 'Roboto_400Regular',
        textAlign: 'center',
        fontSize: 13,
        color: 'white'
    },
    itemImg: {
        borderWidth: 2,
        borderColor: '#eee',
        height: 120,
        width: 120,
        borderRadius: 8,
        marginRight: 8,
        resizeMode: 'cover'
    },
    sectionTitle: {
        paddingHorizontal: 6,
        color: 'white',
        fontFamily: 'Roboto_400Regular',
        fontSize: 20,
        marginBottom: 10,
        marginTop: 16,
    },
    slider: {
        marginBottom: 20,
    },
    spaceBottom: {
        height: 80
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
    }
});
