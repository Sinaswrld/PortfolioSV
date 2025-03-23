import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import IMG1 from '/Users/sinavahidi/Desktop/PortfolioSV/src/assets/images/CurrWeb.png'
import IMG2 from '/Users/sinavahidi/Desktop/PortfolioSV/src/assets/images/PrevWeb.png'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const HEADER = process.env.REACT_APP_PROJECTS_H
  const GG_GITURL = process.env.REACT_APP_GGREPO_URL
  const WEBURL = process.env.REACT_APP_URL
  const TW_GITURL = process.env.REACT_APP_TWREPO_URL

  const projects = [
    {
      img: IMG1,
      title: process.env.REACT_APP_P1_TITLE,
      desc: process.env.REACT_APP_P1_DESC,
      live: WEBURL,
      code: GG_GITURL,
    },
    {
      img: IMG2,
      title: process.env.REACT_APP_P2_TITLE,
      desc: process.env.REACT_APP_P2_DESC,
      code: TW_GITURL,
    },
  ]
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={HEADER.split('')}
              idx={15}
            />
          </h1>

          <div className="projects-wrap">
            {projects.map((project, i) => {
              return (
                <div class="project-card-sm">
                  <div class="card-border-gradient"></div>
                  <div class="card-container">
                    <img src={project.img} alt="" />
                    <div class="wrapper">
                      <h2>{project.title}</h2>
                      <p>{project.desc}</p>
                      <div className="btn-wrapper">
                        <a
                          className={project.live ? '' : 'hide'}
                          href={project.live}
                        >
                          View Live
                        </a>
                        <a href={project.code}>Github Repo</a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
