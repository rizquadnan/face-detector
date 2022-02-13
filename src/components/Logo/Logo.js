import {ReactComponent as BrainIcon} from './innovative-brain.svg'

const Logo = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: '48px',
        width: '48px',
        color: "white"
      }}
    >
      <BrainIcon style={{ fill: "currentColor", color: "inherit"}}/>
    </div>
  )
}

export { Logo }
