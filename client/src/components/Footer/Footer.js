import React, { Fragment } from 'react';
import logo from '../../img/ggf4.jpg';

const Footer = () => {
  return (
    <Fragment>
      <footer className='footer py-5' id='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 px-3 text-center my-3'>
              <img
                src={logo}
                className='img-fluid ceo-img'
                alt='company logo'
              />
              <p className='text-muted my-3 text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                incidunt et perferendis ratione quod accusamus sit dolor optio
                eveniet vero.
              </p>
              <a href='/' className='text-green service-link text-capitalize'>
                facebook
              </a>

              <a href='/' className='text-green service-link text-capitalize'>
                twitter
              </a>

              <a href='/' className='text-green service-link text-capitalize'>
                Youtube
              </a>
            </div>
            <div className='col-md-8 col-lg-6 col-xl-5 mx-auto px-3 text-center my-3'>
              <div className='row'>
                <div className='col text-center mb-3'>
                  <h1 className='text-uppercase text-white'>contact us</h1>
                  <div className='title-underline my-3 bg-secondary'>
                    <div className='title-underline__center'></div>
                  </div>
                </div>
              </div>

              <div className='single-contact px-5 my-3 d-flex justify-content-between'>
                <span className='text-warning mr-3'>
                  <svg
                    width='1em'
                    height='1em'
                    viewBox='0 0 16 16'
                    className='bi bi-arrow-90deg-right'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      d='M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z'
                    />
                  </svg>
                </span>
                <p className='text-white text-capitalize'>
                  123 main street Venice, CA 90020
                </p>
              </div>

              <div className='single-contact px-5 my-3 d-flex justify-content-between'>
                <span className='text-warning mr-3'>
                  <svg
                    width='1em'
                    height='1em'
                    viewBox='0 0 16 16'
                    className='bi bi-arrow-90deg-right'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      d='M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z'
                    />
                  </svg>
                </span>
                <p className='text-white text-capitalize'>+ 123 456 789</p>
              </div>

              <div className='single-contact px-5 my-3 d-flex justify-content-between'>
                <span className='text-warning mr-3'>
                  <svg
                    width='1em'
                    height='1em'
                    viewBox='0 0 16 16'
                    className='bi bi-arrow-90deg-right'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      d='M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z'
                    />
                  </svg>
                </span>
                <p className='text-white text-capitalize'>email@email.com</p>
              </div>

              <div className='single-contact px-5 my-3 d-flex justify-content-between'>
                <span className='text-warning mr-3'>
                  <svg
                    width='1em'
                    height='1em'
                    viewBox='0 0 16 16'
                    className='bi bi-arrow-90deg-right'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      d='M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z'
                    />
                  </svg>
                </span>
                <p className='text-white text-capitalize'>
                  mon - sat 8:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
