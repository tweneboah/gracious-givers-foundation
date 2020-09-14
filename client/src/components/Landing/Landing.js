import React, { Fragment } from 'react';

const Landing = () => {
  return (
    <Fragment>
      <div className='banner-height2'>
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
                      class='btn btn-primary'
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
                      <img
                        src='https://cdn.pixabay.com/photo/2013/01/04/02/37/children-73476_1280.jpg'
                        className='d-block w-100'
                        alt='...'
                      />
                      <div className='carousel-caption d-none d-md-block'>
                        <h5>First slide label</h5>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </div>
                    </div>
                    <div className='carousel-item'>
                      <img
                        src='https://cdn.pixabay.com/photo/2013/01/04/02/37/children-73476_1280.jpg'
                        className='d-block w-100'
                        alt='...'
                      />
                      <div className='carousel-caption d-none d-md-block'>
                        <h5>Second slide label</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </div>
                    </div>
                    <div className='carousel-item'>
                      <img
                        src='https://cdn.pixabay.com/photo/2013/01/04/02/37/children-73476_1280.jpg'
                        className='d-block w-100'
                        alt='...'
                      />
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
                    <span class='sr-only'>Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* !header */}

      {/* Section */}

      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 text-center'>
            <div className=' display-2 text-danger'>
              <svg
                width='1em'
                height='1em'
                viewBox='0 0 16 16'
                class='bi bi-clock-history'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  d='M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z'
                />
                <path
                  fill-rule='evenodd'
                  d='M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z'
                />
                <path
                  fill-rule='evenodd'
                  d='M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z'
                />
              </svg>
            </div>

            <h1>Mission</h1>
            <p>
              Justo takimata est diam lorem lorem amet stet ea aliquyam.
              Aliquyam est et justo sit sit nonumy, eos nonumy eos.
            </p>
            <button className='btn btn-info inline-block'>Support us</button>
          </div>
          <div className='col-lg-4 text-center'>
            <div className=' display-2 text-danger'>
              <svg
                width='1em'
                height='1em'
                viewBox='0 0 16 16'
                class='bi bi-clock-history'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  d='M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z'
                />
                <path
                  fill-rule='evenodd'
                  d='M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z'
                />
                <path
                  fill-rule='evenodd'
                  d='M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z'
                />
              </svg>
            </div>

            <h1>Mission</h1>
            <p>
              Justo takimata est diam lorem lorem amet stet ea aliquyam.
              Aliquyam est et justo sit sit nonumy, eos nonumy eos.
            </p>
            <button className='btn btn-info inline-block'>Support us</button>
          </div>

          <div className='col-lg-4 text-center'>
            <div className=' display-2 text-danger'>
              <svg
                width='1em'
                height='1em'
                viewBox='0 0 16 16'
                class='bi bi-clock-history'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill-rule='evenodd'
                  d='M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z'
                />
                <path
                  fill-rule='evenodd'
                  d='M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z'
                />
                <path
                  fill-rule='evenodd'
                  d='M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z'
                />
              </svg>
            </div>

            <h1>Mission</h1>
            <p>
              Justo takimata est diam lorem lorem amet stet ea aliquyam.
              Aliquyam est et justo sit sit nonumy, eos nonumy eos.
            </p>
            <button className='btn btn-info inline-block'>Support us</button>
          </div>
        </div>
      </div>

      {/* Container 3 */}
      <div className='container-fluid justify-content-center'>
        <div className='row'>
          <div className='col-lg-7 '>
            <img
              src='https://cdn.pixabay.com/photo/2013/01/04/02/37/children-73476_1280.jpg'
              class='img-fluid '
              alt='avatar'
            />
          </div>
          <div className='col-lg-5 align-self-center '>
            <h1>We need your help</h1>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-5 align-self-center '>
            <h1>We need your help</h1>
          </div>
          <div className='col-lg-7 '>
            <img
              src='https://cdn.pixabay.com/photo/2013/01/04/02/37/children-73476_1280.jpg'
              class='img-fluid '
              alt='avatar'
            />
          </div>
        </div>
      </div>

      {/* Recent donations */}
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-3'>
            <div class='card'>
              <img
                src='https://cdn.pixabay.com/photo/2013/01/04/02/37/children-73476_1280.jpg'
                class='card-img-top'
                alt='avatar'
              />
              <div class='card-body'>
                <h5 class='card-title'>Card title</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='/' class='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className='col-lg-3'>
            <div class='card'>
              <img
                src='https://cdn.pixabay.com/photo/2013/01/04/02/37/children-73476_1280.jpg'
                class='card-img-top'
                alt='...'
              />
              <div class='card-body'>
                <h5 class='card-title'>Card title</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='/' class='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className='col-lg-3'>
            <div class='card'>
              <img
                src='https://cdn.pixabay.com/photo/2013/01/04/02/37/children-73476_1280.jpg'
                class='card-img-top'
                alt='avatar'
              />
              <div class='card-body'>
                <h5 class='card-title'>Card title</h5>
                <p class='card-text'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='/' class='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          <div className='col-lg-3'>
            <div class='card'>
              <img
                src='https://cdn.pixabay.com/photo/2013/01/04/02/37/children-73476_1280.jpg'
                class='card-img-top'
                alt='avatar'
              />
              <div class='card-body'>
                <h5 class='card-title'>Card title</h5>
                <p class='card-text text-right'>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href='/' class='btn btn-primary'>
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class='modal fade'
        id='registerToggler'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'>
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>
                New message
              </h5>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>
              <form>
                <div class='form-group'>
                  <label for='recipient-name' class='col-form-label'>
                    Recipient:
                  </label>
                  <input type='text' class='form-control' id='recipient-name' />
                </div>
                <div class='form-group'>
                  <label for='message-text' class='col-form-label'>
                    Message:
                  </label>
                  <textarea class='form-control' id='message-text'></textarea>
                </div>
              </form>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-secondary'
                data-dismiss='modal'>
                Close
              </button>
              <button type='button' class='btn btn-primary'>
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
