import React from 'react'
//icons
import {FiGithub} from 'react-icons/fi'
import {CgWebsite} from 'react-icons/cg'

function Projectcard({title, skills, git, link, bg}) {
  return (
    <div className={`mb-2 w-[300px] h-[300px] bg-[${bg}] rounded transition-all hover:rounded-lg`}>
        <div id="title">
            {title}
        </div>
        <div id="skills">
            {skills.map((skill)=>{
               return (<span>{skill}</span>)
            })}
        </div>
        <div id="githubandlink">
            <span><FiGithub /></span>
            <span><CgWebsite /></span>
        </div>
    </div>
  )
}

export default Projectcard