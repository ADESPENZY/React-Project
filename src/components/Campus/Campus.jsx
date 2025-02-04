import React from 'react';
import './Campus.css';
import gallery_1 from '../../assets/gallery_1.jpg';
import gallery_2 from '../../assets/gallery_2.jpg';
import gallery_3 from '../../assets/gallery_3.jpg';
import gallery_4 from '../../assets/gallery_4.jpg';
import white_arrow from '../../assets/white_arrow.png';

const Campus = () => {
  return (
    <div className="campus">
        <div className="gallery">
          <img src={gallery_1} alt="Gallery 1" />
          <img src={gallery_2} alt="Gallery 2" />
          <img src={gallery_3} alt="Gallery 3" />
          <img src={gallery_4} alt="Gallery 4" />
        </div>
        <button>See more here <img src={white_arrow} alt="Arrow" /></button>
    </div>
  );
};

export default Campus;