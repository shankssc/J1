import React from 'react';
import { TouchableWithoutFeedback, 
         ScrollView,
         TouchableOpacity, 
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
import { SignInParameters } from '../Screens.types';
import { handleSignIn } from './Auth.API';
import { useDispatch } from 'react-redux';
import { auth } from '../../reducers/user';

const SignIn = ({ navigation }:any):React.ReactElement => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    
    const { register, handleSubmit, control, formState: { errors } } = useForm<SignInParameters>();
    
    const dispatch = useDispatch();
    
    const onSubmit = (data:SignInParameters) => {
        try {
            
            console.log(data);
            const user = handleSignIn({
                username: data.email,
                password: data.password
            });

            const payload = {
                email: data.email,
            }
            
            console.log('SignIn successful:', user);

            dispatch(auth(payload));

            navigation.navigate("Home");

        } catch (error) {
            console.log('Error authenticating:', error);
        }
        
    }

    const toggleSecureEntry = (): void => {
        setShowPassword(!showPassword);
    };

    const renderPassIcon = () => {
        return (
            <TouchableOpacity onPress={toggleSecureEntry}>
                <Icon library='Ionicons' name={showPassword ? 'eye-off' : 'eye'} size={22} color={globalStyle.colors.accent}/>
            </TouchableOpacity>
        )
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
                    <Text category="h5" style={Styles.text}>Sign in</Text>

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field, fieldState, formState }) => (
                            <MyInput 
                                label="email" 
                                placeholder='enter a valid email' 
                                value={field.value}
                                onChangeText={(text) => field.onChange(text)} 
                                style={[Styles.input]}
                            />
                    )}
                        name="email"
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
                        style={[Styles.input]}
                        accessoryRight={renderPassIcon}
                        secureTextEntry={!showPassword}
                        />
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