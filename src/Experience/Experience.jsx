import React from 'react'
import "./Experience.scss"
import pixwik from "../assets/Company/Pixwik.png";
import shiash from "../assets/Company/shiash.png"

const Experience = () => {
    const company = [
        {
            id: 1,
            companyName: "Pixwik Technologies Pvt Ltd",
            duration: "Oct 2024 - Present",
            role: "Junior Full Stack Developer",
            img: pixwik,
            url: "https://www.pixwik.com",
            description: "As a Full Stack Developer, designing and developing dynamic web applications using the MERN stack. Troubleshooting across the full stack to ensure application quality and stability. Collaborating with UX/UI designers to create visually appealing and user-friendly interfaces. Developing efficient APIs, server-side logic, and data management systems using MongoDB, Express.js, and Node.js. Ensuring high performance, secure authentication, and authorization mechanisms."
        },
        {
            id: 2,
            companyName: "Shiash info Tech Solutions",
            duration: "March 2024 - June 2024",
            role: "Data Science Intern",
            img: shiash,
            url: "https://www.shiash.com/",
            description: "As a Data Science Intern at Shiash Info Tech Solutions, I engaged in the foundational aspects of data science, applying my learning to practical scenarios. I contributed to a real-time project focused on predicting automobile prices in India, where I collected, cleaned, and analyzed data to build predictive models. This experience enhanced my skills in data preprocessing, statistical analysis, and machine learning algorithms, providing valuable insights into the Indian automotive market."

        }
    ]

    const handlePageRoute = (pageUrl) => {
        window.open(pageUrl, '_blank');
    }






    return (
        <div className="experience-container" id="experience">
            <div className="expereince-content">
                <div className="experience-title text-center">
                    My <span className="font-bold experience-t "> Experience</span>
                </div>

                <div className="experience-content mt-5">
                    {company.map((company) => (
                        <div
                            className="company-list p-4 cursor-pointer"
                            onClick={() => {
                                handlePageRoute(company.url);
                            }}
                        >
                            <div className="company-header">
                                <div className="logo-role">
                                    <div className="company-logo">
                                        <img
                                            className="companyimg"
                                            src={company.img}
                                            alt="company -img"
                                        />
                                    </div>

                                    <span className="company-name">{company.role}</span>
                                </div>
                                <span className="duration">{company.duration}</span>
                            </div>
                            <div className="company-description mt-2">
                                <p>{company.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience
