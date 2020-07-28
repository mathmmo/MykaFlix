import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button';

const Menu = () => (
    <nav className="Menu">
        <a href="/">
            <img src={Logo} alt="Mykaflix" className="Logo"/>
        </a>
        <Button as="a" className="ButtonLink" href="/" >Pesquisar</Button>
    </nav>
);

export default Menu;