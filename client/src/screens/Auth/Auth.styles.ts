import { StyleSheet } from 'react-native';
import globalStyle from '../../styles/globalStyle';

const Styles = StyleSheet.create({
    avatar: {
        margin: 12,
    },

    card: {
        borderRadius: 20,
        alignItems: 'center',
        overflow: "hidden",
        backgroundColor: globalStyle.colors.primary,
    },

    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: globalStyle.colors.background,
    },

    input: {
        width: 250,
        height: 40,
        borderWidth: 3,
        borderRadius: 30,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: globalStyle.colors.input,
    },

    select: {
        marginTop: 10,
        marginBottom: 10,
             
    },

    selectLabel: {
        color: globalStyle.colors.accent,
        marginBottom: 10,
    },

    button: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: globalStyle.colors.input,
        borderColor: globalStyle.colors.accent
    },

    text: {
        alignSelf: 'center',
        color: globalStyle.colors.accent,
        
    },

    toggle: {
        position: 'absolute',
        top: 10,
        right: 25,
    },

    buttonText: {
        color: globalStyle.colors.accent,
    },
})


export default Styles;