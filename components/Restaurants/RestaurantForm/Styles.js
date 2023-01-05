import { StyleSheet } from 'react-native';
import { FONTS, SIZES, assets } from '../../../constants';
import { useFonts } from 'expo-font'

const styles = StyleSheet.create({
    container: {
        flex:1,
        //marginTop:15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    cardContainer: {
        borderRadius: "12px",
        overflow: 'hidden'
    },

    cardText: {
        color: '#dc1846',
        //fontFamily: 'Rigatoni',
        alignSelf: 'center'
    },


    input: {
        width: 300,
        height: 40,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: '#fc2d79',
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center',
        fontWeight: 'normal',
        fontFamily: 'Celery-Smile',
        fontSize: 20
    
    },
})

export default styles