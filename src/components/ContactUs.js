import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <section class="page-section" id="contact">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="mt-0">Let's Get In Touch!</h2>
              <hr class="divider my-4" />
              <p class="mb-5">Contact us now!</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
              <i class="fas fa-phone fa-3x mb-3"></i>
              <div>+1 (555) 123-4567</div>
            </div>
            <div class="col-lg-4 mr-auto text-center mb-5">
              <i class="fas fa-envelope fa-3x mb-3"></i>

              <a class="d-block" href="mailto:email@djzmushroomfarm.com">
                email@djzmushroomfarm.com
              </a>
            </div>
            <div class="col-lg-4 mr-auto text-center">
              <i class="fas fa-map-marker fa-3x mb-3"></i>

              <a
                class="d-block"
                href="
https://goo.gl/maps/bwVjtYqcSSzN3izz5"
              >
                575 Rosedale Rd
                <br />
                Kennett Square, Pa 19348
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
