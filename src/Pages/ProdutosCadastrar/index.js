import React, { Component, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SiteHeader from '../../components/SiteHeader';
import SiteMenu from '../../components/SiteMenu';
import SiteFooter from '../../components/SiteFooter';
import * as S from './styled';


class ProdutosCadastrar extends Component {

    

    constructor(props){
        super(props);
        this.titulo = "";
        this.foto = "";
        this.preco = "";
        
    }     

    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }
    _handleMudancaFoto(evento){
        evento.stopPropagation();
        this.foto = evento.target.value;
    }
    _handleMudancaPreco(evento){
        evento.stopPropagation();
        this.preco = evento.target.value;
    }     

    _salvarProduto(evento){
        evento.preventDefault();
        evento.stopPropagation();
        const dadosProduto = {
            "titulo": this.titulo,
            "foto": this.foto,
            "preco": this.preco
        };

        let ListaProdutos = JSON.parse(localStorage.getItem('produtos'));

        if(ListaProdutos!==null){
            ListaProdutos.push(dadosProduto);
        } else {
            ListaProdutos = [dadosProduto];
        }

        localStorage.setItem('produtos', JSON.stringify(ListaProdutos));  
        
    }       
    

    render() {
        return (              
            <>
            <SiteHeader/>
            <SiteMenu/>
            <main>
                <div className="banner">            
                    <div className="container">
                    <S.Titulo>Cadastrar Produto</S.Titulo>
                    <S.CadastrarProdutosForm className="form-cadastro"
                         onSubmit={this._salvarProduto.bind(this)}
                    >
                        <S.LinhaInput>
                            <S.CampoPadrao
                            type="text"
                            placeholder="Título"
                            onChange={this._handleMudancaTitulo.bind(this)}
                            />
                        </S.LinhaInput>
                        <S.LinhaInput>
                            <S.CampoPadrao
                            type="text"
                            placeholder="Foto"
                            onChange={this._handleMudancaFoto.bind(this)}
                            />
                            <S.OBS>Use: robo-aspirador-rb-01.jpg, robo-aspirador-rb-03.jpg ou robo-aspirador-rb-04.jpg</S.OBS>
                        </S.LinhaInput>   
                        <S.LinhaInput>
                            <S.CampoPadrao
                            type="text"
                            placeholder="Preço"
                            onChange={this._handleMudancaPreco.bind(this)}
                            />
                        </S.LinhaInput>                                        
                        
                        <S.LinhaInput>
                            <S.BotaoPadrao>
                            Cadastrar Produto
                            </S.BotaoPadrao>
                        </S.LinhaInput>
                    </S.CadastrarProdutosForm>
                    </div>
                </div>
            </main>        
            <SiteFooter/> 
        </>               
            );
    }
}
    
export default ProdutosCadastrar;
      
