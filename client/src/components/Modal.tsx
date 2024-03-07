import React from 'react';
import {StyleSheet} from 'react-native'
import {Modal, Text, Card, Button, Avatar} from '@ui-kitten/components'
import { ModalProps } from './Component.types';
import globalStyle from '../styles/globalStyle';

const CustomModal: React.FC<ModalProps> = ({
  visible,
  setVisible,
  message,
  buttonText,
  cardStyle,
  textStyle,
  buttonStyle,
  avatarStyle
}: ModalProps) => {
  return (
    <Modal
      visible={visible}
      backdropStyle={styles.backdrop}
      onBackdropPress={() => setVisible(false)}
    >
      <Card style={[styles.card, cardStyle]}>
      <Avatar 
            style={styles.avatar}
            size='giant'
            source={require('../../assets/images/success.svg')}
            />
        <Text style={[styles.text, textStyle]}>{message}</Text>
        <Button style={[styles.button, buttonStyle]} onPress={() => setVisible(false)}>
          {buttonText}
        </Button>
      </Card>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  avatar: {
    alignSelf: 'center',
    //margin: 2,
    marginTop: -16,
    marginBottom: 6
  },
  card: {
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: globalStyle.colors.primary,
  },
  text: {
    marginBottom: 10,
    marginTop: 10,
    textAlign: 'center',
    color: globalStyle.colors.accent,
  },
  button: {
    alignSelf: 'center',
    //marginTop: 10,
    //marginBottom: 8,
    width: '100%',
    backgroundColor: globalStyle.colors.input,
    borderColor: globalStyle.colors.accent
  },
});
  
export default CustomModal;