import React from 'react'
import LogoutButton from '../logout'
import { Auth0Provider } from '@auth0/auth0-react'

const Dashboard = () => {
  return (
    <Auth0Provider
      domain="cratedigger1865.us.auth0.com"
      clientId="tPBirsmjejs8g1D2OUbD2MwekTaYZHMb"
      authorizationParams={{
      redirect_uri: "http://localhost:3000"
    }}>
        <div>Dashboard<br/><br/>

        <LogoutButton />
        </div>
    </Auth0Provider>
  )
}

export default Dashboard