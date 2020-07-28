import React from 'react';
import { FooterBase, ImgLogo } from './styles';
import Logo from '../../assets/img/MO.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.github.com/mathmmo" target="_blank">
        <ImgLogo src={Logo} alt="Matheus Oliveira"/>
      </a>
      <p>
        Orgulhosamente criado durante a Quarentena
        {' '}
        <a href="https://www.github.com./mathmmo" target="_blank">
          Matheus Martins de Oliveira
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
