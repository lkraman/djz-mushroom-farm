import React from 'react';
import one from '../assets/img/portfolio/thumbnails/one.jpg';
import two from '../assets/img/portfolio/fullsize/two.jpg';
import three from '../assets/img/portfolio/fullsize/three.jpg';

const Gallery = () => {
  return (
    <div>
      <div id="portfolio">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-4 col-sm-4">
              <a
                className="portfolio-box"
                href="../assets/img/portfolio/fullsize/one.jpg"
              >
                <img className="img-fluid" src={one} alt="" />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    Mushroom Gallery
                  </div>
                  <div className="project-name"></div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-4">
              <a
                className="portfolio-box"
                href="../assets/img/portfolio/fullsize/one.jpg"
              >
                <img className="img-fluid" src={two} alt="" />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    Mushroom Gallery
                  </div>
                  <div className="project-name"></div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-4">
              <a
                className="portfolio-box"
                href="../assets/img/portfolio/fullsize/one.jpg"
              >
                <img className="img-fluid" src={three} alt="" />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">
                    Mushroom Gallery
                  </div>
                  <div className="project-name"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
