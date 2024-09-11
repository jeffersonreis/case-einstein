import React from 'react';
import einstein from '../../assets/einstein.svg';
import normalLogo from '../../assets/normal-logo.svg';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <section className='final-footer'>
      <img src={einstein} alt="Einstein" className='einstein' draggable='false'/>
      <img src={normalLogo} alt="Logo" className='logo-normal' draggable='false'/>
      <button className='act-footer'>
        Apoie
      </button>
    </section>
  );
};

export default Footer;
