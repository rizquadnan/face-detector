import './FaceRecognition.css'
import { useClarifaiFaceBoundingBoxes } from '../../modules/useClarifai.js'
import { Space } from '../Space/Space'
import { memo } from 'react'

const FaceRecognition = memo(({ imageUrl, onClear, afterSuccessCallback }) => {
  const [boundingBoxes, apiState] = useClarifaiFaceBoundingBoxes(
    imageUrl,
    afterSuccessCallback
  );

  const onClickClear = () => {
    onClear()
  }

  if (apiState === 'LOADING') {
    return <p>Loading...</p>
  }

  if (apiState === 'ERROR') {
    return (
      <div className="container">
        <p>Sorry, something went wrong. Is your image url valid ? </p>
        <Space style={{ height: '1rem' }} />
        <button onClick={onClickClear}>Clear</button>
      </div>
    )
  }

  if (apiState === 'SUCCESS' && boundingBoxes !== null) {
    return (
      <div className="container">
        <div className="image-container">
          {boundingBoxes.map((boundingBox) => (
            <div
              className="face-indicator-box"
              style={{
                top: `${boundingBox.top_row * 100}%`,
                bottom: `${100 - boundingBox.bottom_row * 100}%`,
                left: `${boundingBox.left_col * 100}%`,
                right: `${100 - boundingBox.right_col * 100}%`,
              }}
            />
          ))}
          <img
            src={imageUrl}
            alt="face recognition result"
            height="auto"
            width="500"
          />
        </div>
        <div style={{ height: '1rem' }}></div>
        <button onClick={onClickClear}>Clear</button>
      </div>
    )
  }

  return null
})

export { FaceRecognition }
