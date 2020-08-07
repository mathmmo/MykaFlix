import React from 'react';
import { FooterBase, ImgLogo } from './styles';
import Logo from '../../assets/img/MO.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.github.com/mathmmo" target="_blank">
        <ImgLogo src={Logo} alt="Matheus Oliveira"/>
      </a>
      <br></br>
      <small style={{margin: 0}}>
        Feito para uma garota especial!
      </small>
    </FooterBase>
  );
}

export default Footer;