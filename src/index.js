import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { TokenProvider } from './components/TokenProvider/TokenProvider'
import { UserProvider } from './components/UserProvider/UserProvider'
import 'tachyons'

ReactDOM.render(
  <React.StrictMode>
    <TokenProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </TokenProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
