import React from 'react'
import { NavLink } from 'react-router-dom';
import "./CardStyles.css";
import coffee from "../assets/coffee.jpg"
const Card = () => {
  return (
    <div>
        <div className='work-container'>
            <h1 className='project-heading'>Projects</h1>
            <div className='project-container'>
                <div className='project-card'>
                    <img src= {coffee} alt="image"></img>
                    <h2 className='project-title'>Project Title</h2>
                    <div className='pro-details'>
                        <p>This is a text</p>
                        <div className='pro-btns'>
                            <NavLink to = "url.com" className="btn">View</NavLink>

                        </div>
                    </div>
                </div>
                <div className='project-card'>
                    <img src= {coffee} alt="image"></img>
                    <h2 className='project-title'>Project Title</h2>
                    <div className='pro-details'>
                        <p>This is a text</p>
                        <div className='pro-btns'>
                            <NavLink to = "url.com" className="btn">View</NavLink>

                        </div>
                    </div>
                </div>
                <div className='project-card'>
                    <img src= {coffee} alt="image"></img>
                    <h2 className='project-title'>Project Title</h2>
                    <div className='pro-details'>
                        <p>This is a text</p>
                        <div className='pro-btns'>
                            <NavLink to = "url.com" className="btn">View</NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
