import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { Link } from 'react-router-dom'
import resume from '../../assets/resume.pdf'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <div className="portfolio-intro">
            <h1 className="page-title">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'Portfolio'.split('')}
                idx={15}
              />
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo
              nibh, cursus iaculis libero ac, suscipit ullamcorper libero.
              Integer sem elit, hendrerit nec vehicula eu, imperdiet et diam.
              Donec bibendum sem eget ornare eleifend. Vestibulum pretium ex ac
              arcu vestibulum tempus. Nam pretium luctus dictum. Aliquam erat
              volutpat. Mauris sed placerat sem.
            </p>
            <Link to={resume} target="_blank" className="flat-button">
              RESUME
            </Link>
          </div>
          <div className="xp-container">
            <div className="job-container">
              <h2 className="job-title">Purolator Inc.</h2>
              <div className="skills-container">
                <span>React</span>
                <span>Node</span>
                <span>Express</span>
                <span>PostgreSQL</span>
                <span>AWS S3</span>
                <span>AWS Lambda</span>
                <span>Docker</span>
                <span>Jira</span>
                <span>OpenAPI</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo
                nibh, cursus iaculis libero ac, suscipit ullamcorper libero.
                Integer sem elit, hendrerit nec vehicula eu, imperdiet et diam.
                Donec bibendum sem eget ornare eleifend. Vestibulum pretium ex
                ac arcu vestibulum tempus. Nam pretium luctus dictum. Aliquam
                erat volutpat. Mauris sed placerat sem.
              </p>
              <div className="img-area"></div>
            </div>
            <div className="job-container">
              <h2 className="job-title">nomz Inc.</h2>
              <div className="skills-container">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Shopify LIQUID</span>
                <span>Shopify OS2.0</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo
                nibh, cursus iaculis libero ac, suscipit ullamcorper libero.
                Integer sem elit, hendrerit nec vehicula eu, imperdiet et diam.
                Donec bibendum sem eget ornare eleifend. Vestibulum pretium ex
                ac arcu vestibulum tempus. Nam pretium luctus dictum. Aliquam
                erat volutpat. Mauris sed placerat sem.
              </p>
              <div className="img-area"></div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
