import React from 'react'
import "./Home.scss"
import Heroimg from "../.././src/assets/Banner/Banner.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faThreads, faXTwitter } from '@fortawesome/free-brands-svg-icons';
const Home = () => {
    return (
        <div className='hero-container' id='hero'>
            <div className='hero-content flex align-items-center gap-4'>
                <div className='hero-text flex-1'>
                    <div className='hero-title-content'>
                        <div className='intro'>
                            Hello I'am <span className='font-bold'>Nandha Kumar</span>
                        </div>
                        <div className='s-e'>
                            <span className='animate-text'>
                                <span>S</span>
                                <span>o</span>
                                <span>f</span>
                                <span>t</span>
                                <span>w</span>
                                <span>a</span>
                                <span>r</span>
                                <span>e</span>
                            </span>
                            {" "}
                            <span className='text-outline animate-text'>
                                <span className='grad-letter'>E</span>
                                <span>n</span>
                                <span>g</span>
                                <span>i</span>
                                <span>n</span>
                                <span>e</span>
                                <span>e</span>
                                <span>r</span>
                            </span>
                        </div>
                        <div className='location'>
                            Living in <span className='font-vold'>Theni</span>
                        </div>
                    </div>
                    <div className='profile-desc'>
                        <p>
                            I am a dedicated software engineer with a strong passion for creating innovative, high-quality solutions. Driven by a commitment to excellence, I focus on building efficient, user-centered applications that make a real impact. I thrive on tackling complex challenges and continuously refining my skills to deliver robust and scalable software that meets the evolving needs of users and organizations alike.
                        </p>
                    </div>

                    <div className='social-icons flex align-items-row gap-2'>
                        <span className='s-i cursor-pointer'>
                            <a href='https://www.linkedin.com/in/nandha-kumar-470700265' target='_blank'>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </span>
                        <span className='s-i cursor-pointer'>
                            <a href="">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>

                        </span>
                        <span className='s-i cursor-pointer'>
                            <a href="">
                                <FontAwesomeIcon icon={faXTwitter} />
                            </a>

                        </span>
                        <span className='s-i cursor-pointer'>
                            <a href="">
                                <FontAwesomeIcon icon={faThreads} />
                            </a>

                        </span>
                    </div>



                </div>
                <div className='hero-img flex-1'>
                    <img className='hero' src={Heroimg} alt='her-img' ></img>

                </div>
            </div>
        </div>
    )
}

export default Home
