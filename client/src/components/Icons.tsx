import React from "react";
import globalStyles from '../styles/globalStyle';
import { Ionicons, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { iconLibs, IconProps } from "./Component.types";


const Icon: React.FC<IconProps<keyof typeof iconLibs>> = ({ library, name, size = 20, color = globalStyles.colors.primary }) => {
    const SelectedIcon = iconLibs[library];

    if (!SelectedIcon) {
        console.error(`Invalid icon library: ${library}`);
        return null;
    }

    // Use "as any" to suppress TypeScript error
    return <SelectedIcon name={name as any} size={size} color={color} as any />;
};

export default Icon;
