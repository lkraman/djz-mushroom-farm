import React from 'react';

const AboutSection = () => {
  return (
    <div>
      <section className="page-section bg-primary" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">
                We've got the mushrooms you want!
              </h2>
              <hr className="divider light my-4" />
              <p className="text-white-50 mb-4">
                We are passionate about mushrooms! We know you'll love our
                mushrooms as much as we do! Contact us now!
              </p>
              <a
                className="btn btn-light btn-xl js-scroll-trigger"
                href="#contact"
              >
                Contact Us!
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
