import {    
        signUp,
        confirmSignUp, 
        type ConfirmSignUpInput,
        autoSignIn,
        signIn,
        type SignInInput,
        signOut  
        } from 'aws-amplify/auth';
import { SignUpParameters } from '../Screens.types';

export async function handleSignUp({
    username,
    password,
    email,
    phone_number,
    gender,
    birthdate
}: SignUpParameters) {
    try {
        const { isSignUpComplete, userId, nextStep } = await signUp({
            username,
            password,
            options: {
                userAttributes: {
                    email,
                    phone_number,
                    gender,
                    birthdate
                },

                autoSignIn: true
            }
        });
        
        console.log(userId);
    } catch (error:any) {
        console.log('error signing up:', error);
    }
}

export async function handleSignUpConfirmation({
    username,
    confirmationCode
}: ConfirmSignUpInput) {
    try {
        const { isSignUpComplete, nextStep } = await confirmSignUp({
          username,
          confirmationCode
        });
    
    } catch (error) {
    
        console.log('error confirming sign up', error);
    }
};

export async function handleAutoSignIn() {

    try { 
      const signInOutput = await autoSignIn();
  
      // handle sign-in steps
  
    } catch (error) {
  
      console.log(error);
    }
}

export async function handleSignIn({ username, password }: SignInInput) {

    try {
  
      const { isSignedIn, nextStep } = await signIn({ username, password });
  
    } catch (error) {
  
      console.log('error signing in', error);
  
    }
}

export async function handleSignOut() {

    try {
      // For Logging off from all devices
      // await signOut({ global: true });
      await signOut();
  
    } catch (error) {
  
      console.log('error signing out: ', error);
  
    }
}