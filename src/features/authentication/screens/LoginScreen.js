import React from 'react'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import { SafeArea } from "../../../components/SafeArea"
import { Input, Text } from "react-native-elements"
import styled from 'styled-components/native'
import AuthButton from "../components/AuthButton"

const Container = styled(View)`
  justify-content: center;
  flex: 1;
`;

const LoginScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <Container>
        <Text h1 h1Style={{ textAlign: "center", marginBottom: 25 }}>LOGIN</Text>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "heights"}>  
          <Input placeholder="Email" />
          <Input placeholder="Password" />
        </KeyboardAvoidingView> 
        <AuthButton title="LOGIN" />
        <AuthButton title="REGISTER" type="outline" onPress={() => navigation.navigate("Register")} />
      </Container>
    </SafeArea>
  )
}

export default LoginScreen
