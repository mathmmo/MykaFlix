import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { gallery } from "../../data/gallery";
import styled from 'styled-components';

const Div = styled.div`
  padding: 16px;
  margin-top: 12px;
`;

const FieldSet = styled.fieldset`
  border-radius: 6px;
`;

FieldSet.Legend = styled.legend`
  font-size: 28px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  /* background: #DC1A28; */
  border-radius: 4px;
  padding: 4px;
`;

const GalleryPhotos = ({ legend, album }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [fieldSetIsOpen, setFieldSetIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const openFieldSet = () => {
    if(fieldSetIsOpen){
      setFieldSetIsOpen(false);
    } else {
      setFieldSetIsOpen(true);
    }
  };

  const {kid , teen, friends, family, me} = gallery;

  var photos = me;
  switch (album) {
    case 'kid':
      photos = kid
      break;
    case 'teen':
      photos = teen
      break;
    case 'friends':
      photos = friends
      break;
    case 'family':
      photos = family
      break; 
    default:
      break;
  }

 return(
    <Div>
      <FieldSet>
        <FieldSet.Legend onClick={openFieldSet}>
          {legend}
        </FieldSet.Legend>
        {fieldSetIsOpen && <div>
            <Gallery photos={photos} onClick={openLightbox} style={{ maxHeight: "50px"}} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        }
      </FieldSet>
    </Div>
  );
}

export default GalleryPhotos;