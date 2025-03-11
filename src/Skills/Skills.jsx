import React from 'react'
import "./Skills.scss"
import Javascript from "../assets/Skills/javascript.png";
import Reactjs from "../assets/Skills/reactjs.png";
import Nodejs from "../assets/Skills/nodejs.png";
import python from "../assets/Skills/python.png.png"
import mongodb from "../assets/Skills/mongodb.png.png"
import Expressjs from "../assets/Skills/expressjs.png"
import sql from "../assets/Skills/sql-server.png"
import datascience from "../assets/Skills/data-science.png"
import machinelearning from "../assets/Skills/machine-learning.png"

const Skills = () => {
const skills=[
    {
        id:1,
        label:"Javascript",
        img:Javascript
    },
    {
        id:2,
        label:"Reactjs",
        img:Reactjs
    },
    {
        id:3,
        label:"nodeJs",
        img:Nodejs
    },
    {
        id: 4,
        label: "Expressjs",
        img: Expressjs
    },
    {
        id:5,
        label:"MongoDB",
        img:mongodb
    },
    {
        id:6,
        label:"python",
        img:python
    },
    {
        id:7,
        label:"Data Science",
        img:datascience
    },
    {
        id:8,
        label:"Machine Learning",
        img:machinelearning
    },
    {
        id:9,
        label:"SQL",
        img:sql
    }



    

]
  return (
    <div className='skills-container' id='skills'>
        <div className='skills-content'>

            <div className='myskils-title text-center'>
                My <span className='font-bold skills-t'>Skills</span>
            </div>

            <div className='skills-list mt-4'>
                {
                    skills.map((item)=>
                    <div className='list-item' key={item.id}>
                        <img src={item.img} alt={item.label} className='skill-img'/>
                        <span className='font-bold label'>{item.label}</span>
                    </div>)
                    }
                
            </div>
        </div>
      
    </div>
  )
}

export default Skills
