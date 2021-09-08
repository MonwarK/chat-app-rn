import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'

const AuthNavigation = () => {
  const Stack = createStackNavigator();

  const BasicPage = () => {
    return (
      <View>
        <Text>Page</Text>
      </View>
    )
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={BasicPage} />
      <Stack.Screen name="RegisterScreen" component={BasicPage} />
    </Stack.Navigator>
  )
}

export default AuthNavigation
