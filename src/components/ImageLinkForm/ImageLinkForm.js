import { Button } from '../Button/Button';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInput, onSubmit }) => {
  const onChangeInput = (e) => {
    onInput(e.target.value)
  };

  const onClickSubmit = (e) => {
    e.preventDefault();

    onSubmit()
  };

  return (
    <form>
      <div className='titleContainer'>
        <h1 className="title">
          The magic brain will detect faces in your image. Paste a image link
          here
        </h1>
      </div>

      <div className="input-container">
        <input type="text" className="input-text" onChange={onChangeInput}/>
        <Button onClick={onClickSubmit}>Detect</Button>
      </div>
    </form>
  )
}

export { ImageLinkForm }
