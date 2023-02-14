import './index.scss'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClose,
  faBars,
  faEnvelope,
  faHome,
  faUser,
  faFile,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import resume from '../../assets/SV-CV2AFinal.pdf'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <div className="nav-items-container">
          <NavLink
            onClick={() => setShowNav(false)}
            exact="true"
            activeclassname="active"
            className="home-link"
            to="/"
            end
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            onClick={() => setShowNav(false)}
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            onClick={() => setShowNav(false)}
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
          <NavLink
            onClick={() => setShowNav(false)}
            exact="true"
            activeclassname="active"
            className="resume-link"
            to={resume}
            target="_blank"
          >
            <FontAwesomeIcon icon={faFile} color="#4d4d4e" />
          </NavLink>
          <FontAwesomeIcon
            icon={faClose}
            color="#ffd700"
            size="3x"
            className="close-icon"
            onClick={() => setShowNav(false)}
          />
        </div>
        <ul className="mobile">
          <li>
            <a
              className="linkedin-link"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sina-vahidi"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              className="github-link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Sinaswrld"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sina-vahidi"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Sinaswrld"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
        onClick={() => setShowNav(true)}
      />
    </div>
  )
}

export default Sidebar
