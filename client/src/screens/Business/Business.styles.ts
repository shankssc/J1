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
        marginTop: 20,
        backgroundColor: globalStyle.colors.primary,
    },

    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: globalStyle.colors.background,
    },

    containerDark: {
        flex: 1,
        backgroundColor: globalStyle.colors.darkBackground,
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

    inputDark: {
        width: 250,
        height: 40,
        borderWidth: 3,
        borderRadius: 30,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: globalStyle.colors.primaryDark,
    },

    verificationInput: {
        width:45,
        height:20,
        borderWidth: 3,
        borderRadius: 12,
        backgroundColor: globalStyle.colors.input,
        marginHorizontal: 5,
        marginVertical: 30
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

    uploadButton: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: globalStyle.colors.inputSecondary,
        borderColor: globalStyle.colors.accent
    },

    text: {
        textAlign: 'left',
        color: globalStyle.colors.accent,
        marginBottom: 5,
    },

    toggle: {
        position: 'absolute',
        top: 10,
        right: 25,
    },

    buttonText: {
        color: globalStyle.colors.accent,
    },

    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export default Styles;