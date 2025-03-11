import React from 'react'
import './AboutMe.scss'
import Bannerimg from "../assets/About/About.png"

const AboutMe = () => {
    return (
        <div className='aboutme-container' id='aboutme'>
            <div className='aboutme-content'>
                <div className='banner-img'>
                    <img src={Bannerimg} alt='banner' className='banner' />
                </div>

                <div className='aboutme-text flex-1'>
                    <div className='aboutme-title'>
                        About <span className='font-bold skills-t'>Me</span>
                    </div>

                    <div className='aboutme-desc'>
                        <p className='about-me-desc-text'>
                            I am a dedicated software engineer with a passion for developing efficient, user-centric applications by seamlessly integrating frontend and backend technologies. At Pixwik, I serve as a Junior Full Stack Developer, where I design and implement APIs using Node.js and manage databases with MongoDB. My responsibilities include creating intuitive user interfaces with React for projects such as content management systems and admin panels, ensuring a cohesive and responsive user experience.Previously, during my data science internship at Shiash Info Tech Solution, I acquired foundational knowledge in data analysis and machine learning by working on real-world projects, including an automobile price prediction model. This experience enhanced my analytical skills and deepened my understanding of data-driven application development.
                        </p>
                        <p className='about-me-desc-text'>
                            Known for my adaptability and problem-solving abilities, I thrive in collaborative environments where cross-functional teamwork fosters innovation and efficiency. I approach each project with a commitment to continuous learning and delivering impactful solutions that align with current technological trends and business needs, particularly in fast-paced, evolving environments.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutMe
