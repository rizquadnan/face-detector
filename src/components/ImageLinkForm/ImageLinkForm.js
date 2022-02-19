import { Button } from '../Button/Button';
import classes from './ImageLinkForm.module.css'

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
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>
          The magic brain will detect faces in your image. Paste a image link
          here
        </h1>
      </div>

      <div className={classes['input-container']}>
        <input type="text" className={classes['input-text']} onChange={onChangeInput}/>
        <Button onClick={onClickSubmit}>Detect</Button>
      </div>
    </form>
  )
}

export { ImageLinkForm }
