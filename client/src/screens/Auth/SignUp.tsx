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
import { SignUpParameters,GenderStore } from '../Screens.types';
import { handleSignUp } from './Auth.API';

const SignUp = ():React.ReactElement => {
    const [showPassword, setShowPassword] = React.useState<boolean>(true);
    const [date, setDate] = React.useState(new Date());

    const useToggleState = (initialState = false): ToggleProps => {
        const [checked, setChecked] = React.useState(initialState);
    
        const onCheckedChange = (isChecked: any): void => {
          setChecked(isChecked);
        };
    
        return { checked, onChange: onCheckedChange };
    };

    const useSelectState = (initialState = undefined) => {
        const [selectedIndex, setSelectedIndex] = React.useState(initialState);
        return { selectedIndex, onSelect: setSelectedIndex };
    };

    const selectedRoleState = useSelectState();

    const { register, handleSubmit, control, formState: { errors } } = useForm<SignUpParameters>();
      
    const genders: GenderStore = {
        0: 'Male',
        1: 'Female',
        2: 'Other',
    };

    const onSubmit = async (data:SignUpParameters) => {
        try {
            console.log(data);
            //@ts-ignore
            console.log("selected gender", genders[data.gender?.row]);
            //@ts-ignore
            let gen = genders[data.gender?.row];

            const user = await handleSignUp({
                username: data.email,
                password: data.password,
                email: data.email,
                phone_number: data.phone_number,
                //@ts-ignore
                gender: gen,
                birthdate: data.birthdate,
            });
    
            // Continue with any logic you need after successful signup
            console.log('Signup successful:', user);
        } catch (error) {
            console.log('Error signing up:', error);
            // Handle error, e.g., display an error message to the user
        }
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
                    <Text category="h5" style={Styles.text}>Sign up</Text>

                    
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
                            <>
                            <MyInput 
                                label="phone" 
                                placeholder='enter a valid phone number' 
                                value={field.value}
                                onChangeText={(text) => field.onChange(text)} 
                                style={[Styles.input]}/>
                            </>
                        )}
                            name="phone_number"
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
                    
                    
                    <>
                    <Controller
                        control={control}
                        render={({ field }) => (
                            <>
                                <Text style={{ color: globalStyle.colors.accent, marginBottom: 10 }}>Date of Birth</Text>
                                <Datepicker
                                    placeholder='pick your birthday!'
                                    date={date}
                                    onSelect={nextDate => {
                                        setDate(nextDate);
                                        field.onChange(nextDate); // Important to manually update the form value
                                    }}
                                    min={new Date(1900, 1, 1)}
                                    accessoryRight={<Icon library='Ionicons' name='calendar' size={20} color={globalStyle.primary} />}
                                />
                            </>
                        )}
                        name="birthdate"
                    />

                    <Controller
                        control={control}
                        render={({ field }) => (
                            <Select
                            label={() => <Text style={Styles.selectLabel}>Gender</Text>}
                            style={Styles.select}
                            selectedIndex={selectedRoleState.selectedIndex}
                            onSelect={(index) => {
                                //@ts-ignore
                                selectedRoleState.onSelect(index);
                                field.onChange(index); // Important to manually update the form value
                            }}
                            >
                            <SelectItem title="Male" accessoryRight={() => <Icon library='Ionicons' name="male" size={20} color={globalStyle.primary} />} style={{ flexDirection: 'row', alignItems: 'center' }} />
                            <SelectItem title="Female" accessoryRight={() => <Icon library='Ionicons' name="female" size={20} color={globalStyle.primary} />} style={{ flexDirection: 'row', alignItems: 'center' }} />
                            <SelectItem title="Other" accessoryRight={() => <Icon library='FontAwesome' name="genderless" size={20} color={globalStyle.primary} />} style={{ flexDirection: 'row', alignItems: 'center' }} />
                            </Select>
                        )}
                        name="gender"
                    />
                    </>
                    
                    <Button style={Styles.button} onPress={handleSubmit(onSubmit)}>
                        <Text style={Styles.buttonText}>SUBMIT</Text>
                    </Button>
                </Card>
            </Layout>
        </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default SignUp