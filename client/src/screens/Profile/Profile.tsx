import React from "react";
import { Avatar,
         Layout,
         Card,
         Text,
         IndexPath,
         Menu,
         MenuItem } from "@ui-kitten/components";
import { View } from "react-native";
import BottomNavigationComponent from "../../components/BottomNavigationMenu";
import { useBottomNavigation } from "../../components/BottomNavigationHook";
import ThumbnailCard from "../../components/ThumbnailCard";
import Icon from "../../components/Icons";
import { ThemeContext } from "../../../theme-context";
import globalStyle from '../../styles/globalStyle';
import styles from "./Profile.styles";
import DayNightToggle from "./DayNightToggle";

var favorites = require('../../../assets/images/favorites-3.png');
var wallet = require('../../../assets/images/wallet-1.png')
var orders = require('../../../assets/images/delivery.png')

const Profile = ({ navigation }: any): React.ReactElement => {
    const [selectedIndex, setSelectedIndex] = React.useState(-1);
    const [username, setUsername] = React.useState('abc123@email.com');
    const { theme, toggleTheme } = React.useContext(ThemeContext);
    const [selectedMenuIndex, setSelectedMenuIndex] = React.useState(new IndexPath(-1));

    useBottomNavigation(navigation, selectedIndex);

    return (
        <Layout style={theme === "light" ? styles.container : styles.containerDark}>
            <Card style={styles.topCard}>
            <View style={styles.topRow}>
                <View style={styles.toggleWrapper}>
                <DayNightToggle />
                </View>
                <Avatar 
                style={styles.avatar}
                size="giant"
                source={require('../../../assets/images/kotaco.png')}
                />
            </View>
            </Card>
            <Card style={styles.topCard}>
            <View style={styles.middleRow}>
                <ThumbnailCard 
                imageSource={favorites}
                description="saved"
                cardStyle={theme === "light" ? styles.ThumbnailCard : styles.ThumbnailCardDark}
                textStyle={styles.cardText}
                />

                <ThumbnailCard 
                imageSource={wallet}
                description="wallet"
                cardStyle={theme === "light" ? styles.ThumbnailCard : styles.ThumbnailCardDark}
                textStyle={styles.cardText}
                />

                <ThumbnailCard 
                imageSource={orders}
                description="orders"
                cardStyle={theme === "light" ? styles.ThumbnailCard : styles.ThumbnailCardDark}
                textStyle={styles.cardText}
                />
            </View>
            </Card>
            <Card>
                <Menu
                selectedIndex={selectedMenuIndex}
                onSelect={index => setSelectedMenuIndex(index)}
                >
                    <MenuItem 
                        title='Promotions'
                        accessoryLeft={() => <Icon library='AntDesign' name="tags" size={20} color={theme === "light" ? globalStyle.colors.primary : globalStyle.colors.primaryDark}/>}/>
                    <MenuItem 
                        title='Help'
                        accessoryLeft={() => <Icon library='Ionicons' name="help-buoy" size={20} color={theme === "light" ? globalStyle.colors.primary : globalStyle.colors.primaryDark}/>}/>
                    <MenuItem 
                        title='Setup a business profile' 
                        accessoryLeft={() => <Icon library='FontAwesome' name="suitcase" size={20} color={theme === "light" ? globalStyle.colors.primary : globalStyle.colors.primaryDark}/>}/>
                    <MenuItem 
                        title='Privacy' 
                        accessoryLeft={() => <Icon library='MaterialIcons' name="privacy-tip" size={20} color={theme === "light" ? globalStyle.colors.primary : globalStyle.colors.primaryDark}/>}/>
                    <MenuItem 
                        title='Manage account' 
                        accessoryLeft={() => <Icon library='MaterialCommunityIcons' name="account-cog" size={20} color={theme === "light" ? globalStyle.colors.primary : globalStyle.colors.primaryDark}/>}/>
                    <MenuItem 
                        title='About' 
                        accessoryLeft={() => <Icon library='AntDesign' name="infocirlce" size={20} color={theme === "light" ? globalStyle.colors.primary : globalStyle.colors.primaryDark}/>}/>
                </Menu>
            </Card>
        <Layout style={styles.bottomNavigationContainer}>
        <BottomNavigationComponent selectedIndex={selectedIndex} onSelect={setSelectedIndex} />
        </Layout>
        </Layout>
    )
};

export default Profile;