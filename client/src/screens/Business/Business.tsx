import React from 'react';
import { TouchableWithoutFeedback, 
    ScrollView, 
    KeyboardAvoidingView,
    TouchableOpacity, 
    Platform,
    ImageBackground } from 'react-native';
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

import Styles from './Business.styles';
import MyInput from '../../components/Input';
import Icon from '../../components/Icons';
import CustomModal from '../../components/Modal';
import globalStyle from '../../styles/globalStyle';
import { BusinessParameters } from '../Screens.types';

const Business = ({ navigation }:any):React.ReactElement => {

    const [isSuccessModalVisible, setIsSuccessModalVisible] = React.useState<boolean>(false);
    const toggleSuccessModal = () => {
        setIsSuccessModalVisible(!isSuccessModalVisible);
    };

    const useSelectState = (initialState = undefined) => {
        const [selectedIndex, setSelectedIndex] = React.useState(initialState);
        return { selectedIndex, onSelect: setSelectedIndex };
    };

    const selectedRoleState = useSelectState();

    const { register, handleSubmit, control, formState: { errors } } = useForm<BusinessParameters>();

    return (<KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >

        <CustomModal
        visible={isSuccessModalVisible}
        setVisible={toggleSuccessModal}
        message="Your business was successfully registered"
        buttonText="OK"
        />

        
            
                <ImageBackground source={require('../../../assets/images/BB-2.jpg')} style={Styles.image}>
                <ScrollView>
                <Card style={Styles.card}>
                <Text category="h5" style={Styles.text}>Get started</Text>
                <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field, fieldState, formState }) => (
                            <MyInput 
                                label="Store name" 
                                placeholder='Example: Goodfellas pizzeria' 
                                value={field.value}
                                onChangeText={(text) => field.onChange(text)} 
                                style={[Styles.input]}
                            />
                    )}
                        name="name"
                />

                <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field, fieldState, formState }) => (
                            <MyInput 
                                label="Street Address" 
                                placeholder='Example: 123 Street' 
                                value={field.value}
                                onChangeText={(text) => field.onChange(text)} 
                                style={[Styles.input]}
                            />
                    )}
                        name="address"
                />

                <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field, fieldState, formState }) => (
                            <MyInput 
                                label="First name" 
                                placeholder='' 
                                value={field.value}
                                onChangeText={(text) => field.onChange(text)} 
                                style={[Styles.input]}
                            />
                    )}
                        name="firstName"
                />

                <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field, fieldState, formState }) => (
                            <MyInput 
                                label="Last name" 
                                placeholder='' 
                                value={field.value}
                                onChangeText={(text) => field.onChange(text)} 
                                style={[Styles.input]}
                            />
                    )}
                        name="lastName"
                />

                <Controller
                        control={control}
                        render={({ field }) => (
                            <Select
                            label={() => <Text style={Styles.selectLabel}>Business type</Text>}
                            style={Styles.select}
                            selectedIndex={selectedRoleState.selectedIndex}
                            onSelect={(index) => {
                                //@ts-ignore
                                selectedRoleState.onSelect(index);
                                field.onChange(index); // Important to manually update the form value
                            }}
                            >
                            <SelectItem title="Restaurant" accessoryRight={() => <Icon library='Ionicons' name="restaurant" size={20} color={globalStyle.primary} />} style={{ flexDirection: 'row', alignItems: 'center' }} />
                            <SelectItem title="Convenience store" accessoryRight={() => <Icon library='MaterialIcons' name="local-convenience-store" size={20} color={globalStyle.primary} />} style={{ flexDirection: 'row', alignItems: 'center' }} />
                            <SelectItem title="Grocery store" accessoryRight={() => <Icon library='MaterialIcons' name="local-grocery-store" size={20} color={globalStyle.primary} />} style={{ flexDirection: 'row', alignItems: 'center' }} />
                            <SelectItem title="Liquor store" accessoryRight={() => <Icon library='MaterialIcons' name="liquor" size={20} color={globalStyle.primary} />} style={{ flexDirection: 'row', alignItems: 'center' }} />
                            </Select>
                        )}
                        name="type"
                />
                
                <Button style={Styles.button} onPress={() => {}}>
                        <Text style={Styles.buttonText}>SUBMIT</Text>
                </Button>
                </Card>
            </ScrollView>
            </ImageBackground>
            
        </KeyboardAvoidingView>)
}

export default Business;