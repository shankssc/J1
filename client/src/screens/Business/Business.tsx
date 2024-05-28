import React from 'react';
import { TouchableWithoutFeedback, 
    ScrollView, 
    KeyboardAvoidingView,
    TouchableOpacity, 
    Platform,
    ImageBackground,
    Image } from 'react-native';
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
import { createNewBusiness } from './Business.API';
import MyInput from '../../components/Input';
import Icon from '../../components/Icons';
import CustomModal from '../../components/Modal';
import globalStyle from '../../styles/globalStyle';
import { BusinessParameters } from '../Screens.types';
import { CreateBusinessInput } from '../../API';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { Amplify } from 'aws-amplify';
import { getCurrentUser } from 'aws-amplify/auth';

const Business = ({ navigation }:any):React.ReactElement => {

    const [isSuccessModalVisible, setIsSuccessModalVisible] = React.useState<boolean>(false);
    const toggleSuccessModal = () => {
        setIsSuccessModalVisible(!isSuccessModalVisible);
    };

    const useSelectState = (initialState = undefined) => {
        const [selectedIndex, setSelectedIndex] = React.useState(initialState);
        return { selectedIndex, onSelect: setSelectedIndex };
    };

    const [imageUri, setImageUri] = React.useState(null);

    const selectedRoleState = useSelectState();

    const { register, handleSubmit, control, formState: { errors } } = useForm<BusinessParameters>();

    async function currentAuthenticatedUser() {
        try {
            const { username, userId, signInDetails } = await getCurrentUser();
          // console.log(`The username: ${username}`);
          // console.log(`The userId: ${userId}`);
          // console.log(`The signInDetails: ${signInDetails}`);
          return username
        } catch (err) {
          console.log(err);
        }
    }

    const currentUser = currentAuthenticatedUser()

    const selectFile = () => {
        launchImageLibrary({mediaType: 'photo'}, (response) => {
            if (response.didCancel) {
                console.log("User cancelled image selection");
            }
            else if (response.errorMessage) {
                console.log("ImagePicker Error: ", response.errorMessage);
            }
            else {
                //@ts-ignore
                const source = { uri: response.assets[0].uri };
                //@ts-ignore
                setImageUri(source.uri);
            }
        });
    }

    const onSubmit = async (data:BusinessParameters) => {
        const businessDetails: CreateBusinessInput = {
            ...data,
            picture: imageUri,
            email: await currentUser,
        }
        try {
            const newBusiness = await createNewBusiness(businessDetails);
            console.log('Business created:', newBusiness);
            toggleSuccessModal();
        } catch (error:any) {
            console.error('Error creating business:', error);
        }
    }

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

                <Button style={Styles.uploadButton} 
                        onPress={selectFile}
                        accessoryLeft={() => <Icon library='MaterialIcons' name="attachment" size={20} color={globalStyle.primary} />}>
                        Select File
                </Button>
                
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