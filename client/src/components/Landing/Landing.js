import React, { Fragment } from 'react';
import Footer from '../Footer/Footer';
import ggf2 from '../../img/ggf2.jpg';
import ggf3 from '../../img/ggf3.jpg';
import ggf5 from '../../img/ggf5.jpg';
import ceo from '../../img/ceo.jpg';

const Landing = () => {
  return (
    <Fragment>
      <div className='banner-height'>
        <div className='container-fluid'>
          <div className=' row banner-height justify-content-center align-items-center text-center'>
            <div className=' col-lg-3 border shadow-lg rounded bg-danger h-100 d-flex flex-column justify-content-center form_bg'>
              <div>
                <h1 className=' display-6 mb-5 text-white'>Support us</h1>
                <form>
                  <div className=' mb-3'>
                    <input
                      placeholder='Username'
                      className=' form-control form-control-sm'
                    />
                  </div>

                  <div className=' mb-3'>
                    <input
                      placeholder='Username'
                      className=' form-control form-control-sm'
                    />
                  </div>

                  <div>
                    <input
                      placeholder='Username'
                      className=' form-control form-control-sm'
                    />
                  </div>

                  <div className=' inline-block mt-5'>
                    <button
                      type='button'
                      className='btn btn-primary'
                      data-toggle='modal'
                      data-target='#registerToggler'
                      data-whatever='@mdo'>
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className='col-lg-9 '>
              <div className='d-none d-lg-block'>
                <div
                  id='carouselExampleCaptions'
                  className='carousel slide banner_slider'
                  data-ride='carousel'>
                  <ol className='carousel-indicators'>
                    <li
                      data-target='#carouselExampleCaptions'
                      data-slide-to='0'
                      className='active'></li>
                    <li
                      data-target='#carouselExampleCaptions'
                      data-slide-to='1'></li>
                    <li
                      data-target='#carouselExampleCaptions'
                      data-slide-to='2'></li>
                  </ol>
                  <div className='carousel-inner'>
                    <div className='carousel-item active'>
                      <img src={`${ggf2}`} className=' img-fluid' alt='ggf2' />
                      <div className='carousel-caption d-none d-md-block'>
                        <h5>First slide label</h5>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </div>
                    </div>
                    <div className='carousel-item'>
                      <img src={ggf3} className='d-block w-100' alt='...' />
                      <div className='carousel-caption d-none d-md-block'>
                        <h5>Second slide label</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div className='carousel-item'>
                      <img src={ggf5} className='d-block w-100' alt='ceo' />
                      <div className='carousel-caption d-none d-md-block'>
                        <h5>Third slide label</h5>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    className='carousel-control-prev'
                    href='/'
                    role='button'
                    data-slide='prev'>
                    <span
                      className='carousel-control-prev-icon'
                      aria-hidden='true'></span>
                    <span className='sr-only'>Previous</span>
                  </a>
                  <a
                    className='carousel-control-next'
                    href='#carouselExampleCaptions'
                    role='button'
                    data-slide='next'>
                    <span
                      className='carousel-control-next-icon'
                      aria-hidden='true'></span>
                    <span className='sr-only'>Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* !header */}

      <div className='container-fluid'>
        <div className='row mt-5 mb-5 justify-content-center align-items-center text-center'>
          <div className='col-md-6 col-lg-4'>
            <img
              src={ceo}
              className='img-fluid img-thumbnail ceo-img'
              alt='company'
            />
          </div>

          <div className='col-md-6'>
            <h1>Mesage from the Founder</h1>
            <p>
              Takimata sed amet gubergren et gubergren sea kasd, lorem nonumy
              gubergren sanctus aliquyam ipsum takimata sed, amet vero justo et
              et sed gubergren consetetur erat. Ea sit tempor consetetur
              aliquyam et ipsum. Kasd lorem ut et accusam ipsum consetetur clita
              sed est. Kasd tempor amet eirmod sed amet clita et sed, diam amet
              sed elitr ipsum no labore ipsum rebum. Sadipscing ipsum et ipsum
              est eirmod diam. Magna sit accusam stet rebum, clita erat dolores
              clita lorem lorem dolor sed diam sit, vero magna sed sanctus
              dolor, clita dolor dolores.
            </p>
            <button className='btn btn-outline-primary btn-lg'>
              Support us
            </button>
          </div>
        </div>

        <div className='row bg-info justify-content-center align-items-center banner-info-2'>
          <div className='col-lg-5 '>
            <div className='child-1'>
              <div className='text-center'>
                <h1 className='mb-5 pt-5'>We’re on a mission to lifes</h1>
                Takimata sed amet gubergren et gubergren sea kasd, lorem nonumy
                gubergren sanctus aliquyam ipsum takimata sed, amet vero justo
                et et sed gubergren consetetur erat. Ea sit tempor consetetur
                aliquyam et ipsum. Kasd lorem ut et accusam ipsum consetetur
                clita sed est. Kasd tempor amet eirmod sed amet clita et sed,
                diam amet sed elitr ipsum no labore ipsum rebum. Sadipscing
                ipsum et ipsum est eirmod diam. Magna sit accusam stet rebum,
                clita erat dolores clita lorem lorem dolor sed diam sit, vero
                magna sed sanctus dolor, clita dolor dolores.
              </div>
            </div>
          </div>

          <div className='col-lg-6'>
            <img src={ggf2} className='img-fluid img-thumbnail' alt='ceo' />
          </div>
        </div>
        {/* Upcoming Donation */}
      </div>

      <div className='container-fluid mt-5 '>
        <div className='row text-center justify-content-center align-items-center'>
          <div className='col-md-6'>
            <img src={ggf2} className='img-fluid' alt='company' />
          </div>
          <div className='col-md-6'>
            <h1>Upcoming Donation</h1>
            Takimata sed amet gubergren et gubergren sea kasd, lorem nonumy
            gubergren sanctus aliquyam ipsum takimata sed, amet vero justo et et
            sed gubergren consetetur erat. Ea sit tempor consetetur aliquyam et
            ipsum. Kasd lorem ut et accusam ipsum consetetur clita sed est. Kasd
            tempor amet eirmod sed amet clita et sed, diam amet sed elitr ipsum
            no labore ipsum rebum. Sadipscing ipsum et ipsum est eirmod diam.
            Magna sit accusam stet rebum, clita erat dolores clita lorem lorem
            dolor sed diam sit, vero magna sed sanctus dolor, clita dolor
            dolores.
          </div>
        </div>
      </div>
      {/* Recent donations */}
      <div className='container-fluid'>
        <h1 className='text-center'>Our Recent Donations</h1>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='card'>
              <img src={ggf2} className='card-img-top' alt='donation' />
              <div className='card-body'>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4'>
            <div className='card'>
              <img src={ggf2} className='card-img-top' alt='donation' />
              <div className='card-body'>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-4'>
            <div className='card'>
              <img src={ggf2} className='card-img-top' alt='donation' />
              <div className='card-body'>
                <p className='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Landing;
