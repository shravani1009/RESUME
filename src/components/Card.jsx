import React from 'react'
import { NavLink } from 'react-router-dom';
import "./CardStyles.css";
import coffee from "../assets/coffee.jpg"
import amazon from "../assets/amazon.jpeg"

const Card = () => {
  return (
    <div>
        <div className='work-container'>
            <h1 className='project-heading'>Projects</h1>
            <div className='project-container'>
                <div className='project-card'>
                    <img src= {amazon} alt="image"></img>
                    <h2 className='project-title'>Amazon Dupe</h2>
                    <div className='pro-details'>
                        <p>I created an Amazon dupe as one of my first projects using HTML, CSS, and JavaScript , it successfully replicated the core features and layout of the e-commerce platform.</p>
                        <div className='pro-btns'>
                            <NavLink to = "url.com" className="btn">View</NavLink>

                        </div>
                    </div>
                </div>
                <div className='project-card'>
                    <img src= {coffee} alt="image"></img>
                    <h2 className='project-title'>Retail-price-optimization</h2>
                    <div className='pro-details'>
                        <p>
                        This project uses machine learning for retail price optimization, predicting customer satisfaction to develop dynamic pricing strategies that boost sales and satisfaction. </p>
                        <div className='pro-btns'>
                            <NavLink to = "url.com" className="btn">View</NavLink>

                        </div>
                    </div>
                </div>
                <div className='project-card'>
                    <img src= {coffee} alt="image"></img>
                    <h2 className='project-title'>Geo-Tracker Recommendation System</h2>
                    <div className='pro-details'>
                        <p>This app is designed to recommend places based on user reviews.</p>
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
