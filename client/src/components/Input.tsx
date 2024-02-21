import React from 'react';
import { Input, InputProps, Text } from '@ui-kitten/components';
import { ViewStyle } from 'react-native';
import globalStyle from '../styles/globalStyle';
import { MyInputProps } from './Component.types';

const MyInput:React.FC<MyInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  containerStyle,
  placeholderTextColor = globalStyle.colors.accent,
  styles,
  ...props
}, ref) => {
    const inputTextColor = globalStyle.colors.accent;

    return (
        <>
      <Text style={{ color: placeholderTextColor, marginBottom: 1 }}>
        {label}
      </Text>
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        textStyle={{ color: inputTextColor }} // Set default input text color
        style={[styles?.input, containerStyle]}
        placeholderTextColor={placeholderTextColor}
        // autoFocus={true}
        {...props}
      />
    </>
    );
}

export default MyInput;