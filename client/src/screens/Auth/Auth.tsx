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
import Styles from './Auth.styles';
import MyInput from '../../components/Input';
import Icon from '../../components/Icons';
import Home from '../Home/Home';
import globalStyle from '../../styles/globalStyle';

const Auth = ():React.ReactElement => {
    const [showPassword, setShowPassword] = React.useState<boolean>(true);
    const [isSignup, setIsSignup] = React.useState(true);
    const [date, setDate] = React.useState(new Date());

    const useToggleState = (initialState = false): ToggleProps => {
        const [checked, setChecked] = React.useState(initialState);
    
        const onCheckedChange = (isChecked: any): void => {
          setChecked(isChecked);
          setIsSignup(isSignup => !isSignup);
        };
    
        return { checked, onChange: onCheckedChange };
    };
    
    const authToggleState = useToggleState();

    const useSelectState = (initialState = undefined) => {
        const [selectedIndex, setSelectedIndex] = React.useState(initialState);
        return { selectedIndex, onSelect: setSelectedIndex };
    };

    const selectedRoleState = useSelectState();



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
                    <Text category="h5" style={Styles.text}>{isSignup ? 'Sign up' : 'Sign in'}</Text>

                    <Toggle status="info" {...authToggleState} style={Styles.toggle}/>

                    <MyInput label="username" placeholder='enter a valid username' value="" onChangeText={() => {}} style={[Styles.input]}/>

                    <MyInput label="email" placeholder='enter a valid email' value="" onChangeText={() => {}} style={[Styles.input]}/>
                    
                    { isSignup && (
                    <>
                    <MyInput label="phone" placeholder='enter a valid phone number' value="" onChangeText={() => {}} style={[Styles.input]}/>
                    </>
                    )}

                    <MyInput label="password" placeholder='enter a valid password' value="" onChangeText={() => {}} style={[Styles.input]}/>
                    
                    { isSignup && (
                    <>
                    <Text style={{ color: globalStyle.colors.accent, marginBottom: 10 }}>Date of Birth</Text>
 
                    <Datepicker placeholder='pick your birthday!' date={date} onSelect={nextDate => setDate(nextDate)} accessoryRight={<Icon library='Ionicons' name='calendar' size={20} color={globalStyle.primary}/>} />

                    <Select
                    label={() => <Text style={Styles.selectLabel}>Gender</Text>}
                    // caption={() => <Text style={Styles.selectLabel}>Please select your gender</Text>}
                    style={Styles.select}
                    selectedIndex={selectedRoleState.selectedIndex}
                    >
                        <SelectItem title="Male" accessoryRight={() => <Icon library='Ionicons' name="male" size={20} color={globalStyle.primary}/>} style={{ flexDirection: 'row', alignItems: 'center' }}/>
                        <SelectItem title="Female" accessoryRight={() => <Icon library='Ionicons' name="female" size={20} color={globalStyle.primary}/>} style={{ flexDirection: 'row', alignItems: 'center' }}/>
                        <SelectItem title="Other" accessoryRight={() => <Icon library='FontAwesome' name="genderless" size={20} color={globalStyle.primary}/>} style={{ flexDirection: 'row', alignItems: 'center' }}/>
                    </Select>
                    </>
                    )}
                    
                    <Button style={Styles.button} onPress={() => {}}>
                        <Text style={Styles.buttonText}>SUBMIT</Text>
                    </Button>
                </Card>
            </Layout>
        </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default Auth