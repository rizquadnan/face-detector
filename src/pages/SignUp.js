import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { TokenSetContext } from "../components/TokenProvider/TokenProvider";
import { UserCredentialForm } from "../components/UserCredentialForm/UserCredentialForm"
import { UserSetContext } from "../components/UserProvider/UserProvider";
import { useRemoteService } from "../modules/useRemoteService";

function Register() {
  const navigate = useNavigate();
  const formRef = useRef();

  const setUser = useContext(UserSetContext);

  const setToken = useContext(TokenSetContext);

  const [error, setError] = useState(null);

  const signUpService = useRemoteService(
    'register',
    { method: 'POST' },
    {
      successCallback: ({ status, data: { user, token }, description }) => {
        if (status === 'SUCCESS') {
          setUser(user)
          setToken(token)

          navigate('/home')
        } else {
          setError(description);
          formRef.current.clearForm()
        }
      },
    },
  )

  return (
    <section>
      <h1>Sign up</h1>
      <p>Already have an account ? <Link to="/"><span>Sign in here</span></Link></p>
      {error && <ErrorMessage label={error} />}
      
      <UserCredentialForm
        ref={formRef}
        isLoading={signUpService.status === "LOADING"}
        isUsedForRegister={true}
        onSubmit={({ name, email, password }) => {
          if (!email || !password || !name) {
            setError("Input not valid");
            return;
          }

          signUpService.execute({ name,
            email,
            password })
        }}
      />
    </section>
  )
}

export { Register }
