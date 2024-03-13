import React, { useState } from 'react';
//@ts-ignore
import SwitchSelector from "react-native-switch-selector";
import globalStyle from '../../styles/globalStyle';

var dayIcon = require('../../../assets/images/sun.png');
var nightIcon = require('../../../assets/images/moon.png');

const options = [
    { label: 'Day', value: 'day', imageIcon: dayIcon },
    { label: 'Night', value: 'night', imageIcon: nightIcon },
  ];
  
  const DayNightToggle = () => {
    const [selectedOption, setSelectedOption] = useState<string>('day');
  
    return (
      <SwitchSelector
        options={options}
        initial={0}
        textColor={globalStyle.colors.primary}
        selectedColor={globalStyle.colors.accent}
        buttonColor={globalStyle.colors.primary}
        borderColor={globalStyle.colors.primary}
        hasPadding  
        onPress={(value: any) => setSelectedOption(value)}
        height={30}
      />
    );
  };
  
  export default DayNightToggle;