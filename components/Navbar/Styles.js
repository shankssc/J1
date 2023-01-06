import { StyleSheet } from 'react-native';
import { FONTS, SIZES, assets } from '../../constants';

const styles = StyleSheet.create({
    NavContainer: {
        position: 'absolute',
        alignSelf: 'center',
        //top: 640,
        bottom: 20
        
        
    },

    NavBar: {
        flexDirection: 'row',
        backgroundColor: '#eee',
        width: '90%',
        justifyContent: 'space-evenly',
        borderRadius: 15,
    },

    Icons: {
        padding: 14,
        marginLeft: 8,
        marginRight: 8
    }

})

export default styles