import React from 'react'
import { ListItem } from 'react-native-elements'

const SettingsItem = ({ title }) => {
  return (
    <ListItem>
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  )
}

export default SettingsItem
