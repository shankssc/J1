import React from "react";

const iconLibs = {
    Ionicons: 'ion',
    FontAwesome: 'fa',
    MaterialCommunityIcons: 'mdi',
    MaterialIcons: 'mi',
};

interface IconProps {
    library: keyof typeof iconLibs;
    name: string;
    size?: number;
    color?: string;
};

const Icon: React.FC<IconProps> = ({ library, name, size = 20, color = '#000000' }) => {
    const selectedLibrary = iconLibs[library];
  
    if (!selectedLibrary) {
      console.error(`Invalid icon library: ${library}`);
      return null;
    }
  
    return (
      <i
        className={`${selectedLibrary} ${selectedLibrary}-${name}`}
        style={{ fontSize: size, color }}
      />
    );
  };
  
export default Icon;