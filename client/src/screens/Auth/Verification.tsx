import { Avatar, Card, Layout, Button, Text } from '@ui-kitten/components';
import React, {useRef} from 'react';
import {    KeyboardAvoidingView, 
            Platform,
            ScrollView,
            View,
            TextInput } from 'react-native';
import Styles from './Auth.styles';
import { EmailVerification } from '../Screens.types';
import MyInput from '../../components/Input';
import { useForm, Controller } from "react-hook-form";
import globalStyle from '../../styles/globalStyle';
import { handleSignUpConfirmation } from './Auth.API';
import { useSelector } from 'react-redux';
import { selectUser } from '../../reducers/user';

/*
const Verification = ():React.ReactElement => {
    const { register, handleSubmit, control, formState: { errors } } = useForm<EmailVerification>();
    
    const inputRefs = Array.from({ length: 6 }, () => useRef<any>());

    const onSubmit = async (data:EmailVerification)=> {
        const verificationCode = Object.values(data).slice(0, 6).join('');
        await console.log(verificationCode);
    }

    return (
        <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>
                <Layout style={Styles.container}>
                <Avatar 
                    style={Styles.avatar}
                    source={require('../../../assets/images/kotaco.png')}
                    />
                    <Card style={Styles.card}>
                        <Text category="h5" style={{color: globalStyle.colors.accent}}>Email Verification</Text>
                        <Text category="h7" style={{color: globalStyle.colors.accent}}>A verification code has been sent to your email</Text>
                        <View style={{flexDirection:'row'}}>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field, fieldState, formState }) => (
                    <MyInput 
                                label="" 
                                placeholder='0' 
                                value={field.value}
                                onChangeText={(text) => field.onChange(text)} 
                                style={[Styles.verificationInput]}
                    />
                    
                    )}
                    name="verification_number_1"
                    />

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field, fieldState, formState }) => (
                    <MyInput 
                                label="" 
                                placeholder='0' 
                                value={field.value}
                                onChangeText={(text) => field.onChange(text)} 
                                style={[Styles.verificationInput]}
                    />
                    
                    )}
                    name="verification_number_2"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field, fieldState, formState }) => (
                    <MyInput 
                                label="" 
                                placeholder='0' 
                                value={field.value}
                                onChangeText={(text) => field.onChange(text)} 
                                style={[Styles.verificationInput]}
                    />
                    
                    )}
                    name="verification_number_3"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field, fieldState, formState }) => (
                    <MyInput 
                                label="" 
                                placeholder='0' 
                                value={field.value}
                                onChangeText={(text) => field.onChange(text)} 
                                style={[Styles.verificationInput]}
                    />
                    
                    )}
                    name="verification_number_4"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field, fieldState, formState }) => (
                    <MyInput 
                                label="" 
                                placeholder='0' 
                                value={field.value}
                                onChangeText={(text) => field.onChange(text)} 
                                style={[Styles.verificationInput]}
                    />
                    
                    )}
                    name="verification_number_5"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field, fieldState, formState }) => (
                    <MyInput 
                                label="" 
                                placeholder='0' 
                                value={field.value}
                                onChangeText={(text) => field.onChange(text)} 
                                style={[Styles.verificationInput]}
                    />
                    
                    )}
                    name="verification_number_6"
                    />
                    </View>
                    
                    <Button style={Styles.button} onPress={handleSubmit(onSubmit)}>
                        SUBMIT
                    </Button>
                    </Card>
                </Layout>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
*/

const Verification = ({ navigation }:any): React.ReactElement => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<EmailVerification>();

  const inputRefs = Array.from({ length: 6 }, () => useRef<any>());
  const userInfo = useSelector(selectUser);
  const email = userInfo.email;

  
  const onSubmit = async (data: EmailVerification) => {
    try {
      const verificationCode = Object.values(data).slice(0, 6).join('');
      const verify = await handleSignUpConfirmation({
        username: email,
        confirmationCode: verificationCode
      });
      navigation.navigate("Home");

    } catch (error) {
      console.log("Error verifying the code", error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <Layout style={Styles.container}>
          <Avatar
            style={Styles.avatar}
            source={require('../../../assets/images/kotaco.png')}
          />
          <Card style={Styles.card}>
            <Text category="h5" style={{ color: globalStyle.colors.accent }}>Email Verification</Text>
            <Text category="h7" style={{ color: globalStyle.colors.accent }}>A verification code has been sent to your email</Text>
            <View style={{ flexDirection: 'row' }}>
              {inputRefs.map((inputRef, index) => (
                <View key={index} style={{ flex: 1 }}>
                  <Controller
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field }) => (
                      <MyInput
                        label=""
                        placeholder='0'
                        value={field.value}
                        onChangeText={(text) => field.onChange(text)}
                        style={[Styles.verificationInput]}
                        // Explicitly cast the name prop
                        //@ts-ignore
                        name={`verification_number_${index + 1}` as `verification_number_1` | `verification_number_2` | `verification_number_3` | `verification_number_4` | `verification_number_5` | `verification_number_6`}
                        autofocus={index === 0}
                      />
                    )}
                    // Explicitly cast the name prop
                    name={`verification_number_${index + 1}` as `verification_number_1` | `verification_number_2` | `verification_number_3` | `verification_number_4` | `verification_number_5` | `verification_number_6`}
                  />
                </View>
              ))}
            </View>
            <Button style={Styles.button} onPress={handleSubmit(onSubmit)}>
              SUBMIT
            </Button>
          </Card>
        </Layout>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Verification;