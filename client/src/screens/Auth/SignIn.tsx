import React from 'react';
import { TouchableWithoutFeedback, 
         ScrollView, 
         KeyboardAvoidingView, 
         Platform } from 'react-native';
import {
        Select,
        SelectItem,
        Text,
        IndexPath,
        Layout,
        Card,
        Avatar,
        Toggle,
        ToggleProps,
        Button,
        Datepicker
        } from '@ui-kitten/components';
import { useForm, Controller } from "react-hook-form";
import Styles from './Auth.styles';
import MyInput from '../../components/Input';
import Icon from '../../components/Icons';
import Home from '../Home/Home';
import globalStyle from '../../styles/globalStyle';
import { SignUpParameters,SignInParameters } from '../Screens.types';

const SignIn = ():React.ReactElement => {
    const [showPassword, setShowPassword] = React.useState<boolean>(true);
    
    const { register, handleSubmit, control, formState: { errors } } = useForm<SignInParameters>();

    const onSubmit = (data:SignInParameters) => {
        console.log(data);
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
                    <Text category="h5" style={Styles.text}>Sign in</Text>

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field, fieldState, formState }) => (
                            <MyInput
                                label="username"
                                placeholder="enter a valid username"
                                value={field.value}
                                onChangeText={(text) => field.onChange(text)}
                                style={[Styles.input]}
                            />
                        )}
                        name="username"
                    />


                    <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field, fieldState, formState }) => (
                    <MyInput 
                        label="password" 
                        placeholder='enter a valid password' 
                        value={field.value}
                        onChangeText={(text) => field.onChange(text)} 
                        style={[Styles.input]}/>
                    )}
                        name="password"
                    />
                    
                    <Button style={Styles.button} onPress={handleSubmit(onSubmit)}>
                        <Text style={Styles.buttonText}>SUBMIT</Text>
                    </Button>
                </Card>
            </Layout>
        </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default SignIn