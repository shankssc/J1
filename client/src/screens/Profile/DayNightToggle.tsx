import React, { useState } from 'react';
//@ts-ignore
import SwitchSelector from "react-native-switch-selector";
import globalStyle from '../../styles/globalStyle';
import { ThemeContext } from '../../../theme-context';

var dayIcon = require('../../../assets/images/sun.png');
var nightIcon = require('../../../assets/images/moon.png');

const options = [
    { label: 'Day', value: 'day', imageIcon: dayIcon },
    { label: 'Night', value: 'night', imageIcon: nightIcon },
  ];
  
  const DayNightToggle = () => {
    const { theme, toggleTheme } = React.useContext(ThemeContext);
    const [selectedOption, setSelectedOption] = useState<string>(
      theme === 'light' ? 'day' : 'night'
    );

    const handleThemeToggle = (value: string) => {
      setSelectedOption(value);
      toggleTheme();
    };

    return (
      <SwitchSelector
        options={options}
        initial={selectedOption === 'day' ? 0 : 1}
        textColor={theme === 'light' ? globalStyle.colors.primary : globalStyle.colors.primaryDark}
        selectedColor={globalStyle.colors.accent}
        buttonColor={theme === 'light' ? globalStyle.colors.primary : globalStyle.colors.primaryDark}
        borderColor={theme === 'light' ? globalStyle.colors.primary : globalStyle.colors.primaryDark}
        hasPadding  
        onPress={handleThemeToggle}
        height={30}
      />
    );
  };
  
  export default DayNightToggle;