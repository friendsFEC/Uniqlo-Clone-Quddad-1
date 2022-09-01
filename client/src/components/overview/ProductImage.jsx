import React, { useReducer, useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import MainImageCarousel from './MainImageCarousel.jsx';


const ProductImage = ({ photosData }) => {
  const length = photosData.length;

  //reducer function for button functionality
  const selectImage = (count, action) => {
    //action -> {type: 'changeImage'}
    switch(action.type) {
      case 'next':
        if (count < length) {
          return count = count + 1;
        }
      case 'prev':
        if (count !== 0) {
          return count = count - 1;
        }
      case 'changeImage':
        return count = action.idx
        default:
          return count;
      }
  }

  const [count, dispatch] = useReducer(selectImage, 0);

  return (
    <div className="ov-imageBox">
      <MainImageCarousel photosData={photosData} dispatch={dispatch} selected={count}/>
      {count > 0 && <GrFormPrevious className="ov-imageBox_prev ov-btn" onClick={() => dispatch({type:'prev'})}/>}
      {count < length - 1 && <GrFormNext className="ov-imageBox_next ov-btn" onClick={() => dispatch({type: 'next'})}/>}
      <div className="ov-imageBox ov-MainImageBox">
        {photosData.map((photo, index) => {
          return (
            <div key={index} className={index === count ? 'ov-imageBox_activeSlide' : 'ov-imageBox_slide'}>
              <img className="ov-imageBox_mainImage"src={photo.url}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default ProductImage;