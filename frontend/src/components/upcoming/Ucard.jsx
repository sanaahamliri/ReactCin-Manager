import React from "react";

const Ucard = ({ item: { _id, director, title, duration } }) => {
  console.log({title});
  return (
    <>
      <div className='MovieBox'>
        <div className='img'>
          <img src={director} alt={title} />
        </div>
        <div className='text'>
          <h3>{title}</h3>
          <span>{duration}</span> <br />
          <button className='primary-btn'>
            <i className='fa fa-play'></i> Réserver
          </button>
        </div>
      </div>
    </>
  );
}

export default Ucard;
