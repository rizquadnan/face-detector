import { Link } from 'react-router-dom'
import { UserCredentialForm } from '../components/UserCredentialForm/UserCredentialForm'
import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from 'react';
import { useFetch } from '../modules/useFetch';
import { UserSetContext } from '../components/UserProvider/UserProvider';
import { TokenSetContext } from '../components/TokenProvider/TokenProvider';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';

function SignIn() {
  const navigate = useNavigate();
  const formRef = useRef();
  const fetch = useFetch();

  const setUser = useContext(UserSetContext);

  const setToken = useContext(TokenSetContext);

  const [error, setError] = useState(null);

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
        onSubmit={({ email, password }) => {
          if (!email || !password) {
            setError("Input not valid");
            return;
          }
        
          fetch('sign-in', {
            method: 'POST',
            body: JSON.stringify({
              email,
              password,
            }),
          })
            .then((response) => response.json())
            .then(({ status, data: { user, token } }) => {
              if (status === "SUCCESS") {
                setUser(user);
                setToken(token);
                
                navigate("/home")
              } else {
                formRef.current.clearForm();
              }
            })
        }}
      />
    </section>
  )
}

export { SignIn }
