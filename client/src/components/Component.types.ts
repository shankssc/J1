import { InputProps } from "@ui-kitten/components";
import { ViewStyle, StyleProp } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export const iconLibs = {
    Ionicons,
    FontAwesome,
    MaterialCommunityIcons,
    MaterialIcons,
};

export interface IconProps<T extends keyof typeof iconLibs> {
    library: T;
    name: string;
    size?: number;
    color?: string;
}
export interface MyInputProps extends InputProps {
    label: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    containerStyle?: ViewStyle;
    placeholderTextColor?: string; // Custom prop for placeholder text color
    styles?: {input: StyleProp<ViewStyle>};
}
