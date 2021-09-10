import React from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import { SafeArea } from "../../../components/SafeArea"
import { Input, Text } from "react-native-elements"
import styled from 'styled-components'
import AuthButton from "../components/AuthButton"

const Container = styled(View)`
  justify-content: center;
  flex: 1;
`;

const RegisterScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <Container>
        <Text h1 h1Style={{ textAlign: "center", marginBottom: 25 }}>Register</Text>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "heights"}>  
          <Input placeholder="Full Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
        </KeyboardAvoidingView> 
        <AuthButton title="REGISTER" />
        <AuthButton title="BACK TO LOGIN" type="outline" onPress={() => navigation.goBack()} />
      </Container>
    </SafeArea>
  )
}

export default RegisterScreen
