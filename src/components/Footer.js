import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer py-5">
        <div className="container">
          <div className="small text-center text-muted">
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a className="text-muted" href="https://tbsolutioninc.com/" alt="">
              {' '}
              T&B Solution Inc.{' '}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
