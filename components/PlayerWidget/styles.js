import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 49,
        width: '100%',
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: '#000',
    },
    progress: {
        height: 3,
        backgroundColor: '#bcbcbc',

    },
    row: {
        flexDirection: 'row',
    },
    image: {
        width: 65,
        height: 65,
        marginRight: 5,
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 150,
        justifyContent: 'space-evenly',
    },
    title: {
        color: '#000',
        fontSize: 12,
        fontWeight: 'bold',
        margin: 5,
    },
    artist: {
        color: '#000',
        fontSize: 12,
    },
})

export default styles;