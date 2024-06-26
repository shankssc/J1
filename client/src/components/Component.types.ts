import { InputProps } from "@ui-kitten/components";
import { ViewStyle, StyleProp, ImageSourcePropType, TextStyle, ImageStyle } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';

export const iconLibs = {
    Ionicons,
    FontAwesome,
    MaterialCommunityIcons,
    MaterialIcons,
    AntDesign
};

export interface IconProps<T extends keyof typeof iconLibs> {
    library: T;
    name: string;
    size?: number;
    color?: string;
};

export interface MyInputProps extends InputProps {
    label: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    containerStyle?: ViewStyle;
    placeholderTextColor?: string; // Custom prop for placeholder text color
    styles?: {input: StyleProp<ViewStyle>};
};

export interface ModalProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    message: string;
    buttonText: string;
    cardStyle?: object;
    textStyle?: object;
    buttonStyle?: object;
    avatarStyle?: object;
};

export interface BottomNavigationProps {
    selectedIndex: number;
    onSelect: (index: number) => void;
    navigation:NavigationProp<any>;
};

export interface ThumbnailCardProps {
    imageSource: ImageSourcePropType;
    description: string;
    cardStyle?: ViewStyle;
    imageStyle?: ImageStyle;
    textStyle?: TextStyle;
  }
