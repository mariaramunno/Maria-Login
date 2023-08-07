import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  Avatar,
  WelcomeImage,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  InnerContainer,
  WelcomeContainer,
  ButtonText,
  Line,
} from './../components/styles';

const Welcome = () => {
    
    return ( 
    <>
        <StatusBar style="light" />
        <InnerContainer>
            <WelcomeImage resizeMode="cover" source={require('./../assets/img/expo-bg2.png')} />

            <WelcomeContainer>
            <PageTitle welcome={true}>Welcome! Buddy</PageTitle>
            <SubTitle welcome={true}>{'Maria Ramunno'}</SubTitle>
            <SubTitle welcome={true}>{'mariacarmelina7@gmail.com'}</SubTitle>

            <StyledFormArea>
                <Avatar resizeMode="cover" source={require('./../assets/img/expo-bg2.png')} />

                <Line />
                <StyledButton>
                <ButtonText>Logout</ButtonText>
                </StyledButton>
            </StyledFormArea>
            </WelcomeContainer>
        </InnerContainer>
    </>
  );
};

export default Welcome;