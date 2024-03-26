import { useEffect } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

//@ts-ignore
type MyNavigation = NavigationContainerRef;

export const useBottomNavigation = (navigation: MyNavigation, selectedIndex: number) => {
    const navigateToSelectedScreen = () => {
        switch (selectedIndex) {
            case 0:
                navigation.navigate('Home');
                break;
            case 1:
                navigation.navigate('Shop');
                break;
            case 2:
                navigation.navigate('Browse');
                break;
            case 3:
                navigation.navigate('Cart');
                break;
            case 4:
                navigation.navigate('Profile');
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        navigateToSelectedScreen();
    }, [navigation, selectedIndex]);
};