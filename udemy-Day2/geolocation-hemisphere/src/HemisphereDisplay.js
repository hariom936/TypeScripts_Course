import React from "react";
import './HemisphereDisplay.css'
//images

import pic1 from './images/nth.jpg'
import pic2 from './images/sth.jpg'


const HemisphereDisplay = ({ latitude }) => {

    const handleHemisphere = () => {
      if (latitude > 0) {
        return (
          <>
            <div className='hemisphere-div'>
              <h3>Hey, You are in Northern Hemisphere</h3>
              <img src={pic1} alt='northern-hemisphere'></img>
            </div>
          </>
        )
      }
      else {
        return (
          <>
            <div className='hemisphere-div'>
              <h3>Hey, You are in Southern Hemisphere</h3>
              <img src={pic2} alt='southern-hemisphere'></img>
            </div>
          </>
        )
      }
    }
  
    return (
      <div>
        {handleHemisphere()}
      </div>
    )
  }
  
export default HemisphereDisplay;