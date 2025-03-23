import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import {
  faAws,
  faDocker,
  faBitbucket,
  faNodeJs,
  faJira,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

const About = () => {
  const HEADER = process.env.REACT_APP_ABOUT_H
  const P1 = process.env.REACT_APP_ABOUT_P1
  const P2 = process.env.REACT_APP_ABOUT_P2
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={HEADER.split('')}
              idx={15}
            />
          </h1>
          <p>{P1}</p>
          <p align="LEFT">{P2}</p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAws} color="#183153" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faNodeJs} color="#68a063" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faDocker} color="#384d54" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJira} color="#0747A6" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faBitbucket} color="#2684ff" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
