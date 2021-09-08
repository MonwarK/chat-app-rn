import React, { useState } from 'react'
import { FlatList, Platform, KeyboardAvoidingView } from 'react-native'
import { SearchBar, SpeedDial } from 'react-native-elements'
import ChatListItem from '../components/ChatListItem.component'
import { SafeArea } from "../../../components/SafeArea"

const ChatsScreen = () => {
  const [isOpen, setIsOpen] = useState(false)
  const array = [1,2,3,4,5,6,7,8,9]

  return (
    <SafeArea>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <SearchBar placeholder="Search for chats" lightTheme round platform={Platform.OS === "ios" ? "ios" : "android" } />
        </KeyboardAvoidingView>
        <FlatList
          data={array}
          renderItem={({index}) => (
            <ChatListItem index={index} />
          )}
        />
      <SpeedDial
        isOpen={isOpen}
        icon={{ name: 'edit', color: '#fff' }}
        openIcon={{ name: 'close', color: '#fff' }}
        onOpen={() => setIsOpen(!isOpen)}
        onClose={() => setIsOpen(!isOpen)}

      >
        <SpeedDial.Action
          icon={{ name: 'add', color: '#fff' }}
          title="Add"
          onPress={() => console.log('Add Something')}
        />
        <SpeedDial.Action
          icon={{ name: 'delete', color: '#fff' }}
          title="Delete"
          onPress={() => console.log('Delete Something')}
        />
      </SpeedDial>
    </SafeArea>
  )
}

export default ChatsScreen
