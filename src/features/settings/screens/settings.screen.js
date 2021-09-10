import React from 'react'
import { SafeArea } from '../../../components/SafeArea'
import SettingsItem from '../components/settings-item.component'

const SettingsScreen = () => {
  return (
    <SafeArea>
      <SettingsItem title="My Account" />
      <SettingsItem title="Logout" />
    </SafeArea>
  )
}

export default SettingsScreen
