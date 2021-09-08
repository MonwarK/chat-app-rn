import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import TabNavigation from './tab.navigation';

const AppNavigation = () => {
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
      <Stack.Screen 
        name="TabScreen" 
        component={TabNavigation} 
        options={{ title: "Chat Application" }} 
      />
      <Stack.Screen 
        name="ChatScreen" 
        component={BasicPage} 
      />
      <Stack.Screen 
        name="AddChatScreen" 
        component={BasicPage} 
      />
    </Stack.Navigator>
  )
}

export default AppNavigation
