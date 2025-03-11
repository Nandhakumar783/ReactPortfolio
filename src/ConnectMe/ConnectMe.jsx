import React from 'react'
import './ConnectMe.scss'

const ConnectMe = () => {
  return (
    <div className='connectme-container' id='connectme'>
      <div className='connectme-content'>
        <div className='header font-bold'>
          Let's <span className='outline-text'>talk</span> for something special
        </div>

        <p className='description'>
          I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
        </p>

        <div className='contact-info'>
          <div className='email-phone'>
            <span className='font-bold flex align-items-center justify-content-center'>
              <i className='flex align-items-center justify-content-center mr-3 pi pi-envelope'/>
              nandhakumaran999@gmail.com
            </span>
          </div>
          
          <div className='email-phone mt-3'>
            <span className='font-bold flex align-items-center justify-content-center'>
              <i className='flex align-items-center justify-content-center mr-3 pi pi-phone'/>
              +91 6381716873
            </span>
          </div>

          <div className='social-links mt-4'>
            <h3 className='text-center mb-3'>Connect With Me</h3>
            <div className='flex justify-content-center gap-4'>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className='pi pi-linkedin text-xl'></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className='pi pi-github text-xl'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectMe
