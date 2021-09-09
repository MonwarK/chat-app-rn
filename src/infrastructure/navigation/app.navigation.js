import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import ChatScreen from '../../features/chats/screens/chat.screen';
import TabNavigation from './tab.navigation';
import { AntDesign } from "@expo/vector-icons"

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
        name="Chat" 
        component={ChatScreen} 
        options={{
          headerBackTitle: " ",
          headerRight: () => (
            <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
              <AntDesign name="phone" style={{ marginRight: 20 }} size={24} color="blue" />
              <AntDesign name="videocamera" size={24} color="blue" />
            </View>
          )
        }}
      />
      <Stack.Screen 
        name="AddChat" 
        component={BasicPage} 
      />
    </Stack.Navigator>
  )
}

export default AppNavigation
