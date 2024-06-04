import { StyleSheet } from 'react-native';
import GlobalStyle from '../../styles/globalStyle';
import globalStyle from '../../styles/globalStyle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.background,
  },
  containerDark: {
    flex: 1,
    backgroundColor: globalStyle.colors.darkBackground,
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
  topLeftSection: {
    //flexDirection: 'row',
    //alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'space-between',
    // backgroundColor: 'white'
  },
  addressContainer: {
    //marginTop:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toggleIcon: {
    marginRight: 4,
  },
  toggleContainer: {
    marginLeft: 'auto', // This will push the toggle to the right end
    //flexDirection: 'row',
    //alignItems: 'center',
    width: '45%'
  },
  searchContainer: {
    //alignItems: 'center',
    width: '90%',
    alignSelf: 'center'
  },
});

export default styles;
