import { useCallback, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import { Button } from '../components/Button/Button'
import { FaceRecognition } from '../components/FaceRecognition/FaceRecognition'
import { ImageLinkForm } from '../components/ImageLinkForm/ImageLinkForm'
import { Rank } from '../components/Rank/Rank'
import TokenContext from '../components/TokenProvider/TokenProvider'
import UserContext, {
  UserSetContext,
} from '../components/UserProvider/UserProvider'
import { useFetch } from '../modules/useFetch'

function Home() {
  const [urlInput, setUrlInput] = useState('')
  const [imageUrl, setImageUrl] = useState(null)

  const user = useContext(UserContext)
  const setUser = useContext(UserSetContext)
  const isUserSignedIn = user !== null
  const fetch = useFetch()

  const token = useContext(TokenContext);
  console.log(user);

  const navigate = useNavigate()

  const onInput = (value) => {
    setUrlInput(value)
  }

  const onSubmit = () => {
    setImageUrl(urlInput)
  }

  const onClearImage = useCallback(() => {
    setImageUrl('')
  }, [])

  const afterSuccessCallback = () =>
    fetch(`user/${user.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        ...user,
        uploadentries: user.uploadentries + 1,
      }),
      headers: {
        authorization: token
      }
    })
      .then((response) => response.json())
      .then(({ status, data }) => {
        if (status === 'SUCCESS') {
          setUser(data[0])
        }
      })

  return (
    <div
      style={{
        textAlign: 'center',
        width: '100%',
        maxWidth: 1000,
      }}
    >
      {isUserSignedIn ? (
        <>
          <Rank nameOfUser={user.name} count={user.uploadentries} />

          <ImageLinkForm onInput={onInput} onSubmit={onSubmit} />
          {imageUrl ? (
            <FaceRecognition
              imageUrl={imageUrl}
              onClear={onClearImage}
              afterSuccessCallback={afterSuccessCallback}
            />
          ) : null}
        </>
      ) : (
        <div>
          <h1>You are not signed in</h1>
          <Button onClick={() => navigate("/")}>Sign in here</Button>
        </div>
      )}
    </div>
  )
}

export { Home }
