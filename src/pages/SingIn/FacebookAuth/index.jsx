import React from 'react'
import SocialButton from './SocialButton'

export default function FacebookAuth() {
  return (
    <SocialButton
        provider="facebook"
        appId="3404739599801682"
        onLoginSuccess={ console.log('Login efetuado com sucesso!')}
        onLoginFailure={ console.log('Tente novamente!')}
        style={{
        backgroundColor: "#4267B2",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        cursor: 'pointer',
        color: '#fff',
        borderRadius: "0",
        padding: ".7rem 2rem"
        }}
    >
        Continuar com Facebook
    </SocialButton>
  )
}
