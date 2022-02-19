import { Link } from 'react-router-dom'
import { UserCredentialForm } from '../components/UserCredentialForm/UserCredentialForm'
import { useNavigate } from 'react-router-dom'
import { useContext, useRef, useState } from 'react'
import { UserSetContext } from '../components/UserProvider/UserProvider'
import { TokenSetContext } from '../components/TokenProvider/TokenProvider'
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage'
import { useRemoteService } from '../modules/useRemoteService'

function SignIn() {
  const navigate = useNavigate()
  const formRef = useRef()

  const setUser = useContext(UserSetContext)

  const setToken = useContext(TokenSetContext)

  const [error, setError] = useState(null)

  const signInService = useRemoteService(
    'sign-in',
    { method: 'POST' },
    {
      successCallback: ({ status, data: { user, token } }) => {
        if (status === 'SUCCESS') {
          setUser(user)
          setToken(token)

          navigate('/home')
        } else {
          formRef.current.clearForm()
        }
      },
    },
  )

  return (
    <section>
      <h1>Sign in</h1>
      <p>
        New here ?{' '}
        <Link to="sign-up">
          <span>Sign up here</span>
        </Link>
      </p>
      {error && <ErrorMessage label={error} />}

      <UserCredentialForm
        ref={formRef}
        isLoading={signInService.status === 'LOADING'}
        onSubmit={({ email, password }) => {
          if (!email || !password) {
            setError('Input not valid')
            return
          }

          signInService.execute({ email, password })
        }}
      />
    </section>
  )
}

export { SignIn }
