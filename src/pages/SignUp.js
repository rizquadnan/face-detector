import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { TokenSetContext } from "../components/TokenProvider/TokenProvider";
import { UserCredentialForm } from "../components/UserCredentialForm/UserCredentialForm"
import { UserSetContext } from "../components/UserProvider/UserProvider";
import { useFetch } from "../modules/useFetch";

function Register() {
  const navigate = useNavigate();
  const fetch = useFetch();
  const formRef = useRef();

  const setUser = useContext(UserSetContext);

  const setToken = useContext(TokenSetContext);

  const [error, setError] = useState(null);

  return (
    <section>
      <h1>Sign up</h1>
      <p>Already have an account ? <Link to="/"><span>Sign in here</span></Link></p>
      {error && <ErrorMessage label={error} />}
      
      <UserCredentialForm
        ref={formRef}
        isUsedForRegister={true}
        onSubmit={({ name, email, password }) => {
          if (!email || !password || !name) {
            setError("Input not valid");
            return;
          }
          
          fetch('register', {
            method: 'POST',
            body: JSON.stringify({
              name,
              email,
              password,
            }),
          })
            .then((response) => response.json())
            .then(({ status, data: { user, token }, description }) => {
              if (status === "SUCCESS") {
                setUser(user);
                setToken(token);

                navigate("/home")
              } else {
                setError(description);
                formRef.current.clearForm();
              }
            })
        }}
      />
    </section>
  )
}

export { Register }
