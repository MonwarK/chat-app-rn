import React from 'react'
import { View, Text } from 'react-native'
import { Avatar } from 'react-native-elements'
import { ListItem } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'

const ChatListItem = ({index = 1, navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
      <ListItem bottomDivider>
        <Avatar
          rounded
          source={{
            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        />
        <ListItem.Content>
          <ListItem.Title>Title {index + 1}</ListItem.Title>
          <ListItem.Subtitle>This is the description for {index + 1}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  )
}

export default ChatListItem
