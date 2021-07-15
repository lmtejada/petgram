import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { LoginMutation } from '../container/LoginMutation'
import { RegisterMutation } from '../container/RegisterMutation'
import { Layout } from '../components/Layout'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <Layout title='Para ingresar debe registrarse o iniciar sesion'>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(({ data: { signup } }) => {
                activateAuth(signup)
              })
            }

            const errorMsg = error && 'Ha ocurrido un problema'

            return <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmit={onSubmit} />
          }
        }
      </RegisterMutation>

      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data: { login } }) => {
                activateAuth(login)
              })
            }

            const errorMsg = error && 'Usuario o password invalido'

            return <UserForm disabled={loading} error={errorMsg} title='Iniciar Sesion' onSubmit={onSubmit} />
          }
        }
      </LoginMutation>
    </Layout>
  )
}
