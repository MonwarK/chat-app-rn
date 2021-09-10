import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import ChatScreen from '../../features/chats/screens/chat.screen';
import TabNavigation from './tab.navigation';
import { AntDesign } from "@expo/vector-icons"
import { Avatar } from 'react-native-elements';

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
        name="TabNav" 
        component={TabNavigation} 
        options={{ title: "Chat Application" }} 
      />
      <Stack.Screen 
        name="Chat" 
        component={ChatScreen}
        options={{
          headerBackTitle: " ",
          headerTitle: () => (
            <View style={{ flexDirection: "row" }}>
              <Avatar
                source={{ uri: "dn\knd" }}
                rounded
              />
              <View style={{ width: "100%" }}>
                <Text>USERNAME</Text>
              </View>
            </View>
          ),
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
