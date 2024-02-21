import React from 'react';
import { TouchableWithoutFeedback, 
         ScrollView, 
         KeyboardAvoidingView,
         TouchableOpacity, 
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
import globalStyle from '../../styles/globalStyle';
import { SignUpParameters,GenderStore } from '../Screens.types';
import { handleSignUp } from './Auth.API';
import { validateSignUp } from './Auth.validation';
import { auth } from '../../reducers/user';
import { useDispatch } from 'react-redux';

const SignUp = ({ navigation }:any):React.ReactElement => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);
    const [date, setDate] = React.useState(new Date());
    const dispatch = useDispatch();

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
            //@ts-ignore
            let formattedDate = data.birthdate.toLocaleDateString();

            const user = await handleSignUp({
                username: data.email,
                password: data.password,
                email: data.email,
                phone_number: data.phone_number,
                //@ts-ignore
                gender: gen,
                birthdate: formattedDate,
            });
            
            const payload = {
                email: data.email,
            }

            dispatch(auth(payload));

            // Continue with any logic you need after successful signup
            console.log('Signup successful:', user);

            navigation.navigate("Verify");
            
        } catch (error) {
            console.log('Error signing up:', error);
            // Handle error, e.g., display an error message to the user
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
                    <Text category="h5" style={Styles.text}>Sign up</Text>
                    
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
                        style={[Styles.input]}
                        accessoryRight={renderPassIcon}
                        secureTextEntry={!showPassword}
                        />
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