import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button';

const Menu = () => (
    <nav className="Menu">
        <Link to="/">
            <img src={Logo} alt="Mykaflix" className="Logo"/>
        </Link>
        <Button as={Link} className="ButtonLink" to="/cadastro/video" >Novo Video</Button>
    </nav>
);

export default Menu;