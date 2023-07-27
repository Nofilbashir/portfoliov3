import React from 'react'
import './Projects.css'
import Card from './Card'


const data = [
    {
        img:require('../../Assets/c1.jpg'),
        skills:["HTML", "CSS", "JS", "MONGO DB", "React","CSS", "JS", "MONGO DB", "React", "Node js", "Express"],
        description:"Lorem, ipsum dolor.",
        title:"First Project",
        links:[{title:"live", link:"https://nofil.netlify.app"}, {title:"Code", link:"https://github.com/nofilbashir"}]
    },
    {
        img:require('../../Assets/c2.png'),
        skills:["HTML", "CSS", "JS", "MONGO DB", "React","CSS", "JS", "MONGO DB", "React", "Node js", "Express"],
        description:"Lorem, ipsum dolor.",
        title:"Second Project",
        links:[{title:"live", link:"https://nofil.netlify.app"}, {title:"Code", link:"https://github.com/nofilbashir"}]
    },
    {
        img:require('../../Assets/c3.png'),
        skills:["HTML", "CSS", "JS", "JS", "MONGO DB", "React", "Node js", "Express"],
        description:"Lorem, ipsum dolor.",
        title:"Third Project",
        links:[{title:"live", link:"https://nofil.netlify.app"}, {title:"Code", link:"https://github.com/nofilbashir"}]
    },
    {
        img:require('../../Assets/c3.png'),
        skills:["HTML", "CSS", "JS", "JS", "MONGO DB", "React", "Node js", "Express"],
        description:"Lorem, ipsum dolor.",
        title:"Third Project",
        links:[{title:"live", link:"https://nofil.netlify.app"}, {title:"Code", link:"https://github.com/nofilbashir"}]
    },
    {
        img:require('../../Assets/c3.png'),
        skills:["HTML", "CSS", "JS", "JS", "MONGO DB", "React", "Node js", "Express"],
        description:"Lorem, ipsum dolor.",
        title:"Third Project",
        links:[{title:"live", link:"https://nofil.netlify.app"}, {title:"Code", link:"https://github.com/nofilbashir"}]
    }
]
const Projects = () => {
  return (
    <div className='projects'>
        <div className="box p_box"></div>
        <div className="p_top">
            <div className='p_top_left'>
            <h3><span style={{color:"#C778DD"}}>#</span>projects</h3>
            <div className='line'></div>
            </div>
          
            <button>view All </button>
        </div>
        <div className="p_bottom">
            {data.map((item)=>{
                return (
                    <Card img={item.img} skills={item.skills} title={item.title} description={item.description} links={item.links}/>
                )
            })}

        </div>
    </div>
  )
}

export default Projects