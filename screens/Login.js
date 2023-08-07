import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import { Formik } from 'formik';
import {
    StyledContainer, 
    InnerContainer, 
    PageLogo, 
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon, 
    Colors,
    StyledButton, 
    ButtonText,
    MessageBox,
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent
} from './../components/styles';


import { View } from "react-native";

const {brand, darkLight, primary} = Colors;

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/flower.avif')}/>
                <PageTitle>Flower Crib</PageTitle>
                <SubTitle>Account Login</SubTitle>
                <Formik
                    initialValues={{email:'', password:''}}
                    onSubmit={(values) => {
                        console.log(values)
                    }}>
                        {({handleChange, handleBlur, handleSubmit, values}) => (
                        <StyledFormArea>
                            <MyTextInput
                                label="Email Address"
                                icon="mail"
                                placeholder="mariaramunno@email.com"
                                placeholderTextColor= {darkLight}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            <MyTextInput
                                label="Password"
                                icon="lock"
                                placeholder="* * * * * * *"
                                placeholderTextColor= {darkLight}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                                isPassword={true}
                            />
                            <MessageBox>...</MessageBox>
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>
                                    Login
                                </ButtonText>
                            </StyledButton>
                            <Line />
                            <StyledButton google={true} onPress={handleSubmit}>
                                <Fontisto name="google" size={25} color={primary}></Fontisto>
                                <ButtonText google={true}>
                                    Sign in with Google
                                </ButtonText>
                            </StyledButton>
                            <ExtraView>
                                <ExtraText>
                                    Don't have an account already? 
                                </ExtraText>
                                <TextLink>
                                    <TextLinkContent> Signup</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    )
}

const MyTextInput = ({label, icon, isPassword, hidePassword,setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand}/>
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props}/>
            {isPassword && (
                <RightIcon >
                    <Ionicons onPress={() => setHidePassword(!hidePassword)} name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    );
};

export default Login;