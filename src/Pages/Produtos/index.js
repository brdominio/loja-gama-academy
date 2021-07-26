import React, { Component } from 'react';
import SiteHeader from '../../components/SiteHeader';
import SiteMenu from '../../components/SiteMenu';
import SiteFooter from '../../components/SiteFooter';
import * as S from './styled';


class Produtos extends Component {

    _obtemDados(){
        let ListaProdutos = JSON.parse(localStorage.getItem('produtos'));
        return ListaProdutos;
    }
    
    render() {
        return (              
            <>
            <SiteHeader/>
            <SiteMenu/>
            <main>
                <div className="banner">            
                    <div className="container">
                    <S.Titulo>Listando Produtos</S.Titulo>

                    <S.Items>
                    {
                        this._obtemDados().map(produtos => {
                            return (
                            <S.Item>
                                <S.Subtitulo>{produtos.titulo}</S.Subtitulo>
                                <S.ProdutoImg src={produtos.foto} />
                                <S.Preco>R$ {produtos.preco}</S.Preco>
                            </S.Item>
                            )
                        })
                    }
                    </S.Items>

                    

                    </div>
                </div>
            </main>        
            <SiteFooter/> 
        </>               
            );
    }
}
    
export default Produtos;
      
