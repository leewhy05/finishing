import React from 'react'
import '../Style/staff.css'
import Tunde from '../assets/photo_2_2025-01-28_04-57-55.jpg'
import Leewhy from '../assets/leewhy.jpg'
import Panda from '../assets/panda.jpg'
import Home from '../assets/photo_14_2025-01-28_04-57-55.jpg'
import Stage from '../assets/photo_3_2025-01-28_04-57-55.jpg'
import Funiture from '../assets/funiture.jpg'

const Staff = () => {
  return (
    <>
    <div className='container'>
    <div className='staff'>
       <div className='container mt-5'>
       <hr className='text-light'/>
       <div className='text-center'>
       <h2 className='text-light custom'>Get to Know our Team</h2>
       </div>
       </div>
       <div className='container mt-5'>
      <div className='row flex-column flex-md-row alig-items-center nap'>
        <div className='col-12 col-md-4 d-flex justify-content-center'>
        <img src={Tunde} alt="" className='img-fluid stafff' />
     <div className='text-light mt-5 ms-3'>
      <h5 className='custom'>AWOYEMI BABATUNDE OLABANJI</h5>
      <p>CEO</p>
     </div>
      </div>
        <div className='col-12 col-md-4 d-flex justify-content-center' >
        <img src={Leewhy} alt="" className='img-fluid stafff' />
     <div className='text-light mt-5 ms-3'>
      <h5 className='custom'>ODUTAYO AYOMIDE TAIWO</h5>
      <p>Frontend Developer</p>
     </div>
      </div>
        <div className='col-12 col-md-4 d-flex justify-content-center'>
        <img src={Panda} alt="" className='img-fluid stafff ' />
     <div className='text-light mt-5 ms-3'>
      <h5 className='custom'>AKINWUMIJU OLUWASEUN TOBILOBA</h5>
      <p>Tech Support Team</p>
     </div>
      </div>
       </div>
    </div>
    <hr className='text-light mt-5'/>

   <div className='mt-5'>
   <div>
      <section>
        <div>
          <h2 className='text-light text-center custom'>What we can do for you</h2>
        </div>

        <div className='container mt-5'>
          <div className='row flex-column flex-md-row alig-items-center nap'>
          <div className='col-12 col-md-4 d-flex justify-content-center'>
            <img src={Home} alt="" className='img-fluid home' />

          </div>
          <div className='col-12 col-md-4 d-flex justify-content-center'>
            <img src={Stage} alt="" className='img-fluid home'/>
          </div>
          <div className='col-12 col-md-4 d-flex justify-content-center'>
            <img src={Funiture} alt=""className='img-fluid home' />
          </div>
          </div>
        </div>
        {/* <div className='container'>
          <div className='row flex-column flex-md-row alig-items-center'>
          <div className='col-12 col-md-4 d-flex justify-content-center'>
            <p className='text-light custom'>HOME DESIGN</p>
          </div>
          <div className='col-12 col-md-4 d-flex justify-content-center'>
            <p className='text-light custom'>HOME STAGGING</p>
            <hr className='text-light'/>
          </div>
          <div className='col-12 col-md-4 d-flex justify-content-center'>
            <p className='text-light custom'>FUNITURE LEASING</p>
            <hr className='text-light'/>
          </div>
          </div>
        </div> */}
      </section>
    </div>
   </div>
    </div>
   
    </div>
    </>
  )
}

export default Staff