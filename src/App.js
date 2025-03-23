import './App.scss'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import Projects from './components/Projects'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const BASE_URL = process.env.REACT_APP_BASE_URL
  const ABOUT = process.env.REACT_APP_ABOUT
  const CONTACT = process.env.REACT_APP_CONTACT
  const PROJECTS = process.env.REACT_APP_PROJECTS
  return (
    <Routes>
      <Route path={BASE_URL} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={CONTACT} element={<Contact />} />
        <Route path={PROJECTS} element={<Projects />} />
      </Route>
    </Routes>
  )
}

export default App
