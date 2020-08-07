import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
`;

const PageDefault = ({ children }) => (
    <React.Fragment>
        <Menu />
        <Main>
            {children}
        </Main>
        <Footer />
    </React.Fragment>
);

export default PageDefault;