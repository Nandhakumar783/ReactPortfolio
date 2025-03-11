import React from 'react'
import "./Project.scss"
import crop from "../assets/Projects/crop.png"
import ckd from "../assets/Projects/ckd.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faThreads, faXTwitter } from '@fortawesome/free-brands-svg-icons';


const Projects = () => {
  return (
    <div className='project-container' id='projects'>
      <div className='project-container'>
        <div className='project-title text-center'>
          My <span className='font-bold project-t'>Projects</span>
        </div>

        <div className='lumina  w-12'>
          <div className='lumina-img w-5'>
            <img src={crop} alt='lumina-img' className='lumina' />
          </div>

          <div className='lumina-content w-5'>
            <span className='s-no font-bold'>01</span>
            <div className='lumina-title'>
              <span className='font-bold lumina-name'>Farmer's Friend - crop disease prediction engine</span>
            </div>

            <div className='lumina-description'>
            <p>Farmer's Friend is an AI-powered platform that empowers farmers and agricultural professionals to swiftly identify crop diseases and receive tailored treatment recommendations. By simply uploading an image of an affected crop leaf, users can access immediate analyses, enabling timely interventions to protect and enhance crop yields.Designed to offer a seamless user experience, AgriGuard allows users to diagnose plant diseases, access a comprehensive database of crop ailments, and receive personalized treatment plans. Whether dealing with common pests, nutrient deficiencies, or rare plant diseases, AgriGuard aims to make advanced agricultural support accessible and actionable.By integrating cutting-edge artificial intelligence with user-friendly interfaces, Farmer's Friend strives to revolutionize crop management practices, ensuring healthier plants and more prosperous harvests.</p>
            </div>

            <span className='share-icon cursor-pointer'>
              <a href='https://github.com/Nandhakumar783/cropddiseaseprediction' target='_blank' className='github-link'>
                <FontAwesomeIcon icon={faGithub} size="2x" />
                <span className='github-text' style={{ marginLeft: '8px' }}>GitHub</span>
              </a>
            </span>
          </div>

        </div>

        <div className='booknook mt-5 w-12'>
          <div className='booknook-content w-5'>
            <span className='s-no font-bold'>02</span>

            <div className='booknook-title'>
              <span className=' font-boldbooknook-name'>Chronic Kidney disease prediction</span>
            </div>

            <div className='booknook-description'>
              <p>CKD Engine is an AI-driven platform designed to assist healthcare professionals and individuals in the early detection and management of chronic kidney disease (CKD). By inputting blood test results, users receive immediate analysis of kidney function, enabling timely interventions to preserve kidney health and enhance patient outcomes.Utilizing advanced machine learning algorithms, NephroPredict analyzes key biomarkers from blood tests to accurately assess kidney function. This allows for the early detection of CKD, facilitating prompt and personalized treatment strategies. The platform's user-friendly interface ensures that users can easily input their data and receive comprehensive reports on their kidney health status.CKD engine aims to empower users with actionable insights into their kidney health, facilitating early detection and proactive management of chronic kidney disease.</p>
            </div>
            <a href='https://github.com/Nandhakumar783/CKD' target='_blank' className='github-link'>
              <FontAwesomeIcon icon={faGithub} size="2x" />
              <span className='github-text'>GitHub</span>
            </a>
          </div>

          <div className='booknook-img w-5'>
            <img src={ckd} alt='booknook-img' />
          </div>
        </div>


      </div>

    </div>
  )
}

export default Projects
