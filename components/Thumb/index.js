import React from 'react';
import PropTypes from 'prop-types';

const Thumb = props => {
  return (
    <div className={props.classes}>
    	<div className="image_container">
      		<img src={props.src} alt={props.alt} title={props.title} />
      	</div>
      <div className="shelf-item__buy-btn">View on Amazon</div>
    </div>
  );
};

Thumb.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  classes: PropTypes.string,
  src: PropTypes.string.isRequired
};

export default Thumb;
