import React from 'react';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import Icon from './Icons';
import globalStyle from '../styles/globalStyle';
import { BottomNavigationProps } from './Component.types';
import { ThemeContext } from '../../theme-context';

const BottomNavigationComponent: React.FC<BottomNavigationProps> = ({ selectedIndex, onSelect }) => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  
    return (
      <BottomNavigation selectedIndex={selectedIndex} onSelect={onSelect}>
        <BottomNavigationTab title="Home" icon={() => <Icon library='Ionicons' name='home' size={20} color={theme === "light" ? globalStyle.colors.primary : globalStyle.colors.primaryDark}/>}/>
        <BottomNavigationTab title="Shop" icon={() => <Icon library='FontAwesome' name='shopping-basket' size={20} color={theme === "light" ? globalStyle.colors.primary : globalStyle.colors.primaryDark}/>}/>
        <BottomNavigationTab title="Browse" icon={() => <Icon library='MaterialCommunityIcons' name='clipboard-text-search' size={20} color={theme === "light" ? globalStyle.colors.primary : globalStyle.colors.primaryDark}/>}/>
        <BottomNavigationTab title="Cart"  icon={() => <Icon library='FontAwesome' name='shopping-cart' size={20} color={theme === "light" ? globalStyle.colors.primary : globalStyle.colors.primaryDark}/>}/>
        <BottomNavigationTab title="Account" icon={() => <Icon library='Ionicons' name='md-person-circle-sharp' size={20} color={theme === "light" ? globalStyle.colors.primary : globalStyle.colors.primaryDark}/>}/>
      </BottomNavigation>
    );
  };
  
  export default BottomNavigationComponent;