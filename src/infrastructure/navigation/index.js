import React from 'react'
import AppNavigation from './app.navigation'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigation from './auth.navigation';

const index = () => {

  const user = false;

  return (
    <NavigationContainer>
      {
        user ? (
          <AppNavigation/>
        ) : (
          <AuthNavigation />
        )
      }
    </NavigationContainer>
  )
}

export default index
