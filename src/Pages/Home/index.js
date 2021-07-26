import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SiteHeader from '../../components/SiteHeader';
import SiteMenu from '../../components/SiteMenu';
import SiteFooter from '../../components/SiteFooter';
import banner from '../../assets/img/banner.png';
import * as S from './styled';

function App(props) {
  const history = useHistory();
  return (
    <>
        <SiteHeader/>
        <SiteMenu/>
        <main>
            <div className="banner">            
                <div className="container">
                   <S.HomeContainer>Utilize o menu acima para navegar no sistema</S.HomeContainer> 
                </div>
            </div>
        </main>        
        <SiteFooter/> 
    </> 
  );
}

export default App;
