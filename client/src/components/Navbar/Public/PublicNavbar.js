import React, { Fragment } from 'react';

const PublicNavbar = () => {
  return (
    <Fragment>
      <header id='home'>
        <nav class='navbar navbar-expand-lg navbar-dark px-5'>
          <a href='#home' class='navbar-brand'>
            <img src='img/logo.png' alt='company logo' />
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#myNavbar'>
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='myNavbar'>
            <ul class='navbar-nav mx-auto'>
              <li class='nav-item active'>
                <a href='#home' class='nav-link'>
                  Home
                </a>
              </li>
              <li class='nav-item '>
                <a href='#about' class='nav-link'>
                  About
                </a>
              </li>
              <li class='nav-item '>
                <a href='#featured' class='nav-link'>
                  Featured
                </a>
              </li>
              <li class='nav-item '>
                <a href='#services' class='nav-link'>
                  Services
                </a>
              </li>
              <li class='nav-item '>
                <a href='#gallery' class='nav-link'>
                  Gallery
                </a>
              </li>
              <li class='nav-item '>
                <a href='#tour' class='nav-link'>
                  Tour
                </a>
              </li>
            </ul>
            <div class='d-none d-lg-flex align-items-baseline'>
              <p class='text-white mx-4'>
                <span class='mx-2 phone-icon'>
                  <i class='fas fa fa-phone fa-fw'></i>
                </span>
                + 123-456-789
              </p>
              <button class='btn  green__btn text-capitalize'>book now</button>
            </div>
          </div>
        </nav>

        <div class='container-fluid'>
          <div class='row'>
            <div class='col-lg-5 banner-info text-capitalize py-5 px-5'>
              <h3 class='text-green text-slant'>santa monica bay property</h3>
              <h1>modern apartment</h1>
              <p>
                <span class='text-green'>
                  {' '}
                  <i class='fas fa-map'></i>{' '}
                </span>{' '}
                1500 pershing drive santa monica , CA 90060
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                expedita impedit, officia blanditiis excepturi illum.
              </p>
              <a href='#' class='btn green__btn'>
                read more
              </a>
              <div class='banner-info__footer d-flex justify-content-around py-2'>
                <div class='text-white text-center'>
                  <i class='fas fa-bed'></i>
                  <p class='mb-0'>3</p>
                  <p>bed</p>
                </div>

                <div class='text-white text-center'>
                  <i class='fas fa-bath'></i>
                  <p class='mb-0'>2</p>
                  <p>bath</p>
                </div>

                <div class='text-white text-center'>
                  <i class='fas fa-warehouse'></i>
                  <p class='mb-0'>4000</p>
                  <p>sq.ft</p>
                </div>

                <div class='text-white text-center'>
                  <i class='fas fa-paw'></i>
                  <p class='mb-0'>pets</p>
                  <p>allowed</p>
                </div>

                <div class='text-white text-center'>
                  <i class='fas fa-bed'></i>
                  <p class='mb-0'>$3000</p>
                  <p>deposit</p>
                </div>
              </div>
            </div>

            <div class='col-lg-7 banner-img'>
              <div class='banner-img__footer px-3'>
                <div class='center-div'>
                  <p class='text-capitalize text-green mb-0'>rent price</p>
                  <h4 class='text-white'>$ 1,535/mo</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default PublicNavbar;
