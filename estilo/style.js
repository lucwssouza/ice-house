import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: '#72C9F5',
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        position: 'absolute',
        top: 0
    },
    headerbar: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#72C9F5',
        bottom: 608,
        position: 'absolute',
    },
    menuIcon: {
        width: 40,
        height: 40,
        tintColor: 'white',
    },
    headerlogo: {
        width: 160,
        height: 40,
        tintColor: 'white',
    },
    carrinho: {
        width: 40,
        height: 40,
        tintColor: 'white',
    },
    menu: {
        position: 'absolute',
        top: 60,
        backgroundColor: '#72C9F5',
        width: '100%',
        padding: 10,
    },
    menuItem: {
        color: 'white',
        fontSize: 17,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    menuItemFinal: {
        color: 'white',
        fontSize: 17,
    },
    menucard: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        gap: 50,
        padding: 10,
    },
    containerProduct: {
        borderColor: '#75a9f9',
        borderRadius: 20,
        borderWidth: 1,
        marginTop: 10,
        gap: 6,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: 160
    },

    price: {
        fontSize: 15,
        color: '#2e1572',
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 20,
        right: 160,
        bottom: 240,
        marginTop: 70,
    },
    input: {
        backgroundColor: 'white',
        textAlign: 'center',
        height: 40,
        borderWidth: 0.5,
        borderRadius: 10,
        width: '80%',
    },
});