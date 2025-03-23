import React from 'react'
import pics1 from '../assets/background 1.webp'
import '../Style/first.css'

const First = () => {
  return (
    <div className='container mt-5 lay'>
      <div className='row flex-column flex-md-row alig-items-center'>
        <div className='col-12 col-md-6 d-flex justify-content-center'>
          <img src={pics1} alt="" className='img-fluid' />
        </div>
        <div className='col-12 col-md-6 text-light p-3'>
          <hr />
          <h2 className='text-bold fs-1 custom-font'>SPACES THAT MAKE YOU WANT TO STAY</h2>
          <p className='custom-font'>What's special about your product, service, or company? Use this space to highlight the things that set you apart from your competition, whether it's a special feature, a unique philosophy, or awards and recognition that you have received. Think of this as your elevator pitch to get the reader's attention.</p>
        </div>
      </div>
      <hr className='text-light' />
    </div>
  )
}

export default First