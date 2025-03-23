import React from 'react'
import "../Style/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <div>
       <div className='container mt-5 text-center'>
      <div className='row flex-column flex-md-row alig-items-center pt-5 footer'>
      <div className='col-4 d-none d-lg-block'>
       <h1 className='custo fs-1 mt-5'>We'd love to work with you.
       Call us now!
       </h1>
       </div>
       <div className='col-8 colo'>
        <div>
          <h5 className='fs-4 fw-bold'>ADDRESS</h5>
          <p>Shop 14 Falomo Shopping Complex, Ikoyi Lagos State</p>
        </div>
        <div>
          <h5 className='fs-4 fw-bold'>PHONE</h5>
          <p>+234 9030250040</p>
        </div>
        <div >
          <h5 className='fs-4 fw-bold'>EMAIL</h5>
          <p>molluxuryinteriorfinishing@gmail.com</p>
        </div>
        <div className='fs-4 fw-bold' >
          <h5>SOCIAL</h5>
        <Link to="https://www.instagram.com/mol_luxury?igsh=MTYzanZhdnZlbjR0bQ"><p><FontAwesomeIcon icon={faInstagram} size="2x" color="#E1306C"/></p>
        </Link>
        </div>
       </div>
      </div>
       </div>
    </div>
  )
}

export default Footer