import './App.css'
import { Header } from './components/Header/Header'
import { ParticlesBackground } from './components/ParticlesBackground/ParticlesBackground'
import { Home } from './pages/Home'

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { SignIn } from './pages/SignIn'
import { Register } from './pages/SignUp'

function Layout() {
  return (
    <main className="App">
      <ParticlesBackground>
        <Header />
        <Outlet />
      </ParticlesBackground>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SignIn />} />
          <Route path="sign-up" element={<Register />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
