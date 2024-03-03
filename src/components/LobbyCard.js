import React from 'react';

export default function LobbyCard({ image, title, description }) {
  return (
    <div>
      <div className='row mb-4 align-items-center d-flex justify-content-center'>
        <div className='col-md-4 text-center text-md-start'>
          <img
            src={`${image}`}
            alt=''
            className='rounded w-75 h-75 mb-3 wow animate__animated animate__fadeInRight animate__slow'
          />
        </div>
        <div className='col-md-4 text-center text-md-start'>
          <div className='p-4 wow animate__animated animate__fadeInLeft animate__slow'>
            <h4 className='title-category'>{`${title}`}</h4>
            <p>{`${description}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
