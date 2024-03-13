import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Card, Text } from '@ui-kitten/components';
import { ThumbnailCardProps } from './Component.types';

const ThumbnailCard: React.FC<ThumbnailCardProps> = ({ imageSource, description, cardStyle, imageStyle, textStyle }) => {
  return (
    <Card style={[styles.card, cardStyle]}>
      <Image
        source={imageSource}
        style={[styles.image, imageStyle]}
      />
      <View style={styles.textContainer}>
        <Text category="h6" style={[styles.text, textStyle]}>{description}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    borderRadius: 15,
    alignContent: 'center',
    width: 110
  },
  image: {
    width: '60%',
    height: 35,
    alignSelf: 'center',
    //borderTopLeftRadius: 10,
    //borderTopRightRadius: 10,
  },
  textContainer: {
    paddingTop: 10,
    alignSelf: 'center'
  },
  text: {
    fontWeight: '500',
  },
});

export default ThumbnailCard;