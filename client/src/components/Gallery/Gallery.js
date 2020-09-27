import React, { useState } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css';
import img1 from '../../img/ggf8.jpg';
import img2 from '../../img/ggf9.jpg';
import img3 from '../../img/ggf10.jpg';
import img4 from '../../img/ggf3.jpg';
import img5 from '../../img/ggf5.jpg';
import img6 from '../../img/ggf7.jpg';
import img7 from '../../img/ggf11.jpg';
import img8 from '../../img/ggf9.jpg';
import img9 from '../../img/ggf4.jpg';
const PHOTOS = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ReactBnbGallery
        key={Math.random()}
        show={isOpen}
        photos={PHOTOS}
        onClose={() => setIsOpen(false)}
      />

      <div className='gallery-container'>
        <div class='container-fluid gallery-container'>
          <div className='row gallery-container justify-content-center align-items-center'>
            <div className='col-lg-'>
              <button
                className='btn btn-outline-warning btn-lg'
                onClick={setIsOpen}>
                View our galleries
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
