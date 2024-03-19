import React from "react";
import { Avatar,Layout,Card,Text } from "@ui-kitten/components";
import { View } from "react-native";
import BottomNavigationComponent from "../../components/BottomNavigationMenu";
import ThumbnailCard from "../../components/ThumbnailCard";
import { ThemeContext } from "../../../theme-context";
import globalStyle from '../../styles/globalStyle';
import styles from "./Profile.styles";
import DayNightToggle from "./DayNightToggle";

var favorites = require('../../../assets/images/favorites-3.png');
var wallet = require('../../../assets/images/wallet-1.png')
var orders = require('../../../assets/images/delivery.png')

const Profile = ({ navigation }: any): React.ReactElement => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [username, setUsername] = React.useState('abc123@email.com');
    const { theme, toggleTheme } = React.useContext(ThemeContext);

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

        <Layout style={styles.bottomNavigationContainer}>
        <BottomNavigationComponent selectedIndex={selectedIndex} onSelect={setSelectedIndex} />
        </Layout>
        </Layout>
    )
};

export default Profile;