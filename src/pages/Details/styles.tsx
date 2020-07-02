import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#37323e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        backgroundColor: '#F3CA40',
        width: '100%',
        height: '5%',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,

        zIndex: 4
    },
    topNav: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
    },
    textTop: {
        justifyContent: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20
    },

    barHeader: {
        width: '100%',
        alignItems: 'center',
        marginTop: '10%',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 7,
        },
        shadowOpacity: 1.43,
        shadowRadius: 9.51,

        elevation: 15,

        zIndex: 3
      },
    
    barHeaderContainer: {
        width: 322,
        height: 242,
        backgroundColor: '#211D27',
        flexDirection: 'column',
        borderRadius: 25,
        overflow: 'hidden',
        alignItems: 'center',
        position: 'relative'
    },

    barHeaderImage: {
        width: '100%',
        height: '50%',
        resizeMode: 'cover',
    },

    barHeaderTitle: {
        flex: 1,
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: '5%',
    },

    barInfos: {
        width: '70%',
        height: '20%',
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
        fontSize: 17
    },

    counter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },

    counterInfo: {
        flexDirection: 'row',
    },

    counterInfoText: {
        fontSize: 23,
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
        marginTop: '30%',
        paddingHorizontal: '6%',
    },

    barLocation: {
        flexDirection: 'row',
        marginBottom: '3%',
    },

    barLink: {
        flexDirection: 'row',
        marginTop: '2%',
    },

    barLocationText: {
        color: '#F6BB96',
        marginHorizontal: '3%'
    },

    barLinkText: {
        color: '#F6BB96',
        marginHorizontal: '3%',
        textDecorationLine: 'underline',
    },

    homeStars: {
        marginHorizontal: '3%',
        marginTop: '5%',
        width: '100%'
    },

    homeStarsText: {
        marginHorizontal: '3%',
        color: '#fff',
        fontSize: 18
    },

    favoritesTitle: {
        width: '95%',
        height: 50,
        paddingHorizontal: '2%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    favoritesText: {
        marginHorizontal: '3%',
        color: '#fff',
        fontSize: 18
    },

    seeMore: {
        color: '#BFBDC1',
        fontSize: 10,
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
        color: '#fff',
    },

    checkOut: {
        width: '80%',
        marginTop: '10%',
        marginBottom: 30
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
   
});
