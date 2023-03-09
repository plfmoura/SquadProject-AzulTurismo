import React, { useState } from 'react'
import Button from '../../components/Button'
import FacebookAuth from './FacebookAuth'
import GoogleAuth from './GoogleAuth'
import style from './singIn.module.css'

export default function SingIn() {
    const [ login, setLogin ] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Usuário cadastrado com sucesso!')
    }
  return (
    <div>
      {login ? (<form onSubmit={ handleSubmit } className={style.singInContainer}>
        <div className={style.formHeader}>
            <img src="azul.png" alt="Logo da Empresa Azul Turismo" />
            <span>Cadastre-se agora</span>
            <p>Faça seu cadastro agora e comece a explorar nossos passeios.</p>
        </div>
        <div className={style.formMain}>
            <input type="text" placeholder='Insira seu nome'/>            
            <input type="email" placeholder='Insira seu email'/>            
            <input type="password" placeholder='Insira uma senha'/>            
            <input type="password" placeholder='Confirme sua senha'/>            
        </div>
        <div className={style.formFooter}>
            <Button onPress={ handleSubmit } text='Cadastrar'/>
            <span>ou</span>
            <FacebookAuth />
            <GoogleAuth />
            <span onClick={() => setLogin(!login)}>Já tem uma conta? <strong>Entrar</strong></span>
        </div>
      </form>) : (
        <form onSubmit={ handleSubmit } className={style.loginContainer}>
        <div className={style.formHeader}>
            <img src="azul.png" alt="Logo da Empresa Azul Turismo" />
            <span>Entre como usuário</span>
            <p>Entre agora e comece a explorar nossos passeios.</p>
        </div>
        <div className={style.formMain}>
            <input type="email" placeholder='Email cadastrado'/>            
            <input type="password" placeholder='Senha de usuário'/>            
        </div>
        <div className={style.formFooter}>
            <Button onPress={ handleSubmit } text='Entrar como Usuário'/>
            <span>ou</span>
            <FacebookAuth />
            <GoogleAuth />
            <span onClick={() => setLogin(!login)}>Não é cadastrado? <strong>Cadastre-se</strong></span>
        </div>
      </form>
      )}
    </div>
  )
}
