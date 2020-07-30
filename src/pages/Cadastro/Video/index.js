import React from 'react';
import PageDefault from '../../../components/pageDefault';
import { Link } from 'react-router-dom';

const CadastroVideo = () => (
    <PageDefault>
        <h1>Cadastro de Video</h1>
        <Link to='/cadastro/categoria'>Cadastrar Categoria</Link>
    </PageDefault>
);

export default CadastroVideo;