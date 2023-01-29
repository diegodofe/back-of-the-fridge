import React from 'react';

const OrDivider = () => {
  return (
    <div className="or-divider">
      <div className="or-divider__line-top">
        <div className='or-divider__line__left'></div>
        <div className='or-divider__line__right'></div>
      </div>
      <div className="or-divider__text">or</div>
      <div className="or-divider__line-bottom">
        <div className='or-divider__line__left'></div>
        <div className='or-divider__line__right'></div>
      </div>
    </div>
  );
};

export default OrDivider;