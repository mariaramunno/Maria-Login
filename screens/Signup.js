import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import {Octicons, Ionicons} from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Formik } from 'formik';
import {
    StyledContainer, 
    InnerContainer, 
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


import { View, TouchableOpacity } from "react-native";

const {brand, darkLight, primary} = Colors;

const Signup = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));
    const [message, setMessage] = useState();
    const [messageType, setMessageType] = useState();
  
    // Actual value to be sent
    const [dob, setDob] = useState();
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(false);
      setDate(currentDate);
      setDob(currentDate);
    };
  
    const showDatePicker = () => {
      setShow('date');
    };

    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageTitle>Flower Crib</PageTitle>
                <SubTitle>Account Signup</SubTitle>

                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    />
                )}


                <Formik
                    initialValues={{fullName:'', email:'', dateOfBirth:'', password:'', confirmPassword:''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}>
                        {({handleChange, handleBlur, handleSubmit, values}) => (
                        <StyledFormArea>
                            <MyTextInput
                                label="Full Name"
                                icon="person"
                                placeholder="Maria Ramunno"
                                placeholderTextColor= {darkLight}
                                onChangeText={handleChange('fullName')}
                                onBlur={handleBlur('fullName')}
                                value={values.fullName}
                            /> {/*}
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
                                label="Date of Birth"
                                placeholder="YYYY - MM - DD"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('dateOfBirth')}
                                onBlur={handleBlur('dateOfBirth')}
                                value={dob ? dob.toDateString() : ''}
                                icon="calendar"
                                editable={false}
                                isDate={true}
                                showDatePicker={showDatePicker}
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
                            <MyTextInput
                                label="Confirm Password"
                                icon="lock"
                                placeholder="* * * * * * *"
                                placeholderTextColor= {darkLight}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value={values.confirmPassword}
                                secureTextEntry={hidePassword}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                                isPassword={true}
                            />
                            <MessageBox>...</MessageBox>
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>
                                    Signup
                                </ButtonText>
                            </StyledButton>
                            <Line />
                            <ExtraView>
                                <ExtraText>
                                    Already have an account? 
                                </ExtraText>
                                <TextLink>
                                    <TextLinkContent > Login</TextLinkContent>
                                </TextLink>
                        </ExtraView> {*/}
                        </StyledFormArea>)}
                </Formik> 
            </InnerContainer>
        </StyledContainer>
    )
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand}/>
            </LeftIcon>
            {/* <StyledInputLabel>{label}</StyledInputLabel>
            
        {isDate && (
            <TouchableOpacity onPress={showDatePicker}>
            <StyledTextInput {...props} />
            </TouchableOpacity>
        )}
        {!isDate && <StyledTextInput {...props} />}
        
            {isPassword && (
                <RightIcon >
                    <Ionicons onPress={() => setHidePassword(!hidePassword)} name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )} */}
        </View>
    );
};

export default Signup;