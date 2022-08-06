import { StyleSheet } from 'react-native';
import { FONTS, SIZES, assets } from '../../constants';

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    input: {
        width: 300,
        height: 40,
        borderWidth: 3,
        borderRadius: 30,
        borderColor: '#fc2d79',
        marginTop: 10,
        marginBottom: 10
    
    },

    image: {
        width: 120,
        height: 120,
        borderColor: '#fc3dd0',
        borderWidth: 7,
        borderRadius: 100,
  
      },

    text: {
        fontSize: SIZES.medium,
        color: '#fc3dd0',
        paddingVertical: 7,
        textAlign: 'left',
       
    },

    card: {
        padding:20,
        alignItems: 'stretch',
        borderRadius: "20px",
        overflow: "hidden",
        backgroundColor: "#fc3dd0"
    }
})

export default styles;