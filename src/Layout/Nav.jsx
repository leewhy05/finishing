import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../Style/nav.css'
import First from '../Pages/First';
import Staff from '../Pages/Staff';

const Nav = () => {
  return (
    <>
    <div className='container back'>
    <Navbar expand="lg" className="pt-5 ps-5">
        <main className='w-50 text-cent'>
          <Navbar.Brand href="#"><img src={Logo} alt="" className='img-fluid border'/></Navbar.Brand>
        </main>
      </Navbar>
    <section className='txt'>
      <h1 className='fs-1 text-light text-center custom'>Your Home,
      Designed.</h1>
      </section>
      <hr className='text-light'/>
      <p className='text-center text-light DM'>Learn more</p>
      <p className='text-center text-light DM'><FontAwesomeIcon icon={faChevronDown}/></p>
    </div>
    <section>
      <First/>
    </section>
    <div>
    <section>
      <Staff/>
    </section>
    </div>
    </>
  )
}

export default Nav