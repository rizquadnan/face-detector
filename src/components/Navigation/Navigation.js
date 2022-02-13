import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext, { UserSetContext } from '../UserProvider/UserProvider'

const Navigation = () => {
  const user = useContext(UserContext);
  const setUser = useContext(UserSetContext);
  const isUserSignedIn = user !== null
  
  const navigate = useNavigate();

  return isUserSignedIn ? (
    <nav>
      <button
        style={{
          backgroundColor: 'unset',
          border: 'none',
          fontSize: '1.5rem',
          color: 'white',
          cursor: 'pointer',
        }}
        onClick={() => {
          setUser(null);

          navigate("/");
        }}
      >
        Sign out
      </button>
    </nav>
  ) : null
}

export { Navigation }
