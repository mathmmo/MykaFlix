import React from 'react'
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer'; 
import GalleryPhotos from '../../components/Gallery';
import styled from 'styled-components';

function Home() {

  const Div = styled.div`
    color: var(--white);
    border-bottom: 1px solid #C0C0C0;
    margin: 32px 32px 0 32px;
    font-weight: bold;
  `;

  Div.Span = styled.span`
    font-size: 28px;
  `;
  
  return (
    <div className="App" style={{ background: "#141414"}}>
      <Menu />

      <BannerMain
        url={dadosIniciais.categorias[0].videos[0].url} 
        videoDescription={"Essa é uma pequena homenagem para a Mykaele, por aqui você vai encontrar algumas mensagens e umas fotos que uma galera que a ama muito se organizou e juntou tudo no mesmo lugar!"}
        thanks={"Agradecimento especial para todos vocês que no meio de tanta correria da vida, tiraram um tempinho pra homenagear essa pessoinha ESPECIAL!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Div>
        <Div.Span>Galeria de Fotos</Div.Span>
      </Div>
      
      <GalleryPhotos
        legend='Myka Criança'
        album='kid'
      />

      <GalleryPhotos
        legend='Myka Adolescente'
        album='teen'
      />

      <GalleryPhotos
        legend='Myka & Amigos'
        album='friends'
      />

      <GalleryPhotos
        legend='Myka & Família'
        album='family'
      />
      
      <GalleryPhotos
        legend='Myka Tudo Misturado'
        album='me'
      />

      <Footer />
    </div>
  );
}

export default Home;