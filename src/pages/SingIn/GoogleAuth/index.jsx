import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { googleLogout } from '@react-oauth/google';

import React from 'react'

export default function GoogleAuth() {
  return (
    <GoogleOAuthProvider clientId="973512195077-aabhc3laek2v39701j20qpqoo6mdpuei.apps.googleusercontent.com">
      <div>
        <GoogleLogin
        // onSuccess={credentialResponse => {
        //     const details = jwtDecode(credentialResponse.credential)
        //     console.log(details)
        // }}
        // onError={() => {
        //     console.log('Login Failed');
        // }}
        />
      </div>
    </GoogleOAuthProvider>
  )
}
