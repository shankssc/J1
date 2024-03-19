import { StyleSheet } from 'react-native';
import { useContext } from 'react';
import globalStyle from '../../styles/globalStyle';
import { ThemeContext } from '../../../theme-context';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalStyle.colors.background,
    },
    containerDark: {
        flex: 1,
        backgroundColor: globalStyle.colors.darkBackground,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    topCard: {
        width: '99%',
        alignSelf: 'center'
    },
    middleRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    bottomNavigationContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    bottomNavigation: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    avatar: {
        margin: 5,
    },
    toggleWrapper: {
        width: '45%',
        marginVertical: 22
    },
    ThumbnailCard: {
        margin: 5,
        borderRadius: 15,
        alignContent: 'center',
        width: 110,
        backgroundColor: globalStyle.colors.input
    },
    ThumbnailCardDark: {
        margin: 5,
        borderRadius: 15,
        alignContent: 'center',
        width: 110,
        backgroundColor: globalStyle.colors.primaryDark
    },
    cardText: {
        fontWeight: '500',
        color: globalStyle.colors.accent
    }
});

export default styles;