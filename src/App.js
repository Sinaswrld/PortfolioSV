import './App.scss'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
