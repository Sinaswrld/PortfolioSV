import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const JOB = process.env.REACT_APP_JOB_SD
  const INA = process.env.REACT_APP_INA
  const POSITIONS = process.env.REACT_APP_POSITIONS
  const CONTACT = process.env.REACT_APP_CONTACT_ME
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = INA.split('')
  const jobArray = JOB.split('')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <span className={`${letterClass} _13`}> </span>
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={27}
            />
          </h1>
          <h2>{POSITIONS}</h2>
          <Link to="/contact" className="flat-button">
            {CONTACT}
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
