import { RefObject, useRef, useState } from 'react'
import './App.css'
import FifthBlock from './components/fifth-block/fifth-block'
import FirstBlock from './components/first-block/first-block'
import FooterBlock from './components/footer-block/footer-block'
import FourthBlock from './components/fourth-block/fourth-block'
import HeaderBlock from './components/header-block/header-block'
import SecondBlock from './components/second-block/second-block'
import SeventhBlock from './components/seventh-block/seventh-block'
import SixthBlock from './components/sixth-block/sixth-block'
import ThirdBlock from './components/third-block/third-block'
import Modal from './components/modal/modal'

function App() {
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => {
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const aboutRef: RefObject<HTMLDivElement> = useRef(null)
  const handleScrollToAbout = () => {
    if (aboutRef.current) {
      window.scrollTo({left: 0, top: aboutRef.current.offsetTop, behavior: 'smooth'})
    }
  }

  const servicesRef: RefObject<HTMLDivElement> = useRef(null)
  const handleScrollToServices = () => {
    if (servicesRef.current) {
      window.scrollTo({left: 0, top: servicesRef.current.offsetTop, behavior: 'smooth'})
    }
  }

  const contactsRef: RefObject<HTMLDivElement> = useRef(null)
  const handleScrollToContacts = () => {
    if (contactsRef.current) {
      window.scrollTo({left: 0, top: contactsRef.current.offsetTop, behavior: 'smooth'})
    }
  }

  const brandRef: RefObject<HTMLDivElement> = useRef(null)
  const handleScrollToBrand = () => {
    if (brandRef.current) {
      window.scrollTo({left: 0, top: brandRef.current.offsetTop, behavior: 'smooth'})
    }
  }

  const websiteRef: RefObject<HTMLDivElement> = useRef(null)
  const handleScrollToWebsite = () => {
    if (websiteRef.current) {
      window.scrollTo({left: 0, top: websiteRef.current.offsetTop, behavior: 'smooth'})
    }
  }
  const crmRef: RefObject<HTMLDivElement> = useRef(null)
  const handleScrollToCRM = () => {
    if (crmRef.current) {
      window.scrollTo({left: 0, top: crmRef.current.offsetTop, behavior: 'smooth'})
    }
  }

  return (
    <div>
      <HeaderBlock 
        scrollToAbout={handleScrollToAbout}
        scrollToContacts={handleScrollToContacts}
        scrollToServices={handleScrollToServices}
      />
      <FirstBlock 
        onClick={handleOpenModal}
        scrollToBrand={handleScrollToBrand}
        scrollToCRM={handleScrollToCRM}
        scrollToSEO={handleScrollToServices}
        scrollToWebsite={handleScrollToWebsite}
      />
      <div ref={aboutRef}>
        <SecondBlock />
      </div>
      <ThirdBlock />
      <div ref={servicesRef}>
        <FourthBlock />
      </div>
      <div ref={brandRef}>
        <FifthBlock />
      </div>
      <div ref={websiteRef}>
        <SixthBlock />
      </div>
      <div ref={crmRef}>
        <SeventhBlock />
      </div>
      <div ref={contactsRef}>
        <FooterBlock
          scrollToAbout={handleScrollToAbout}
          scrollToContacts={handleScrollToContacts}
          scrollToServices={handleScrollToServices}
        />
      </div>
      {openModal && <Modal onClose={handleCloseModal}/>}
    </div>
  )
}

export default App
