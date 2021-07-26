import React, { Component } from 'react';
import SiteHeader from '../../components/SiteHeader';
import SiteMenu from '../../components/SiteMenu';
import SiteFooter from '../../components/SiteFooter';
import * as S from './styled';


class Clientes extends Component {

    _obtemDados(){
        let ListaClientes = JSON.parse(localStorage.getItem('Clientes'));
        return ListaClientes;
    }
    
    render() {
        return (              
            <>
            <SiteHeader/>
            <SiteMenu/>
            <main>
                <div className="banner">            
                    <div className="container">
                    <S.Titulo>Listando Clientes</S.Titulo>

                    <S.Items>
                    {
                        this._obtemDados().map(Clientes => {
                            return (
                            <S.Item>
                                <S.Subtitulo>{Clientes.titulo}</S.Subtitulo>
                                <S.ProdutoImg src={Clientes.foto} />
                                <S.Preco>R$ {Clientes.preco}</S.Preco>
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
    
export default Clientes;
      
