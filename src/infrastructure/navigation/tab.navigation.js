import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import { View, Text } from 'react-native'
import ChatsScreen from '../../features/chats/screens/chats.screen';
import SettingsScreen from '../../features/settings/screens/settings.screen';

const TabNavigation = () => {
  const Tab = createMaterialTopTabNavigator();

  const BasicPage = () => {
    return (
      <View>
        <Text>Page</Text>
      </View>
    )
  }

  return (
    <Tab.Navigator>
      <Tab.Screen name="Chats" component={ChatsScreen} options={{ title: "Chats" }} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: "Settings" }} />
    </Tab.Navigator>
  )
}

export default TabNavigation
