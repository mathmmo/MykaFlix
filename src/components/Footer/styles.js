import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 8  px;
  }
`;

export const ImgLogo = styled.img`
  width: 30%;
  @media (max-width: 800px) {
    width: 90%;
  }
`;
