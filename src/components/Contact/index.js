import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_rfdl8de',
        'template_0l3jtah',
        refForm.current,
        '28SzXRU9fZyp1CQx0'
      )
      .then(
        (result) => {
          console.log(result.text)
          window.location.reload(true)
        },
        (error) => console.log(error.text)
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Contact me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            I am interested in co-op opportunities - especially ambitious or
            large projects. However, if you have any other requests or
            questions, don't hesitate to contact me.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="from_subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Sina Vahidi,
          <br />
          Canada,
          <br />
          Newmarket, ON
          <br />
          <span>s2vahidi@uwaterloo.ca</span>
          <br />
          <span>647-671-3324</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[44.0618657, -79.5010341]} zoom={5}>
            <TileLayer
              url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
            />
            <Marker position={[44.0618657, -79.5010341]}>
              <Popup>I live around here, come over for a cup of coffee!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
