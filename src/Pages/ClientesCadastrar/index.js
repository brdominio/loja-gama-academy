import React, { Component, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SiteHeader from '../../components/SiteHeader';
import SiteMenu from '../../components/SiteMenu';
import SiteFooter from '../../components/SiteFooter';
import * as S from './styled';


class ClientesCadastrar extends Component {

    

    constructor(props){
        super(props);
        this.nome = "";
        this.email = "";
        this.endereco = "";
        
    }     

    _handleMudancaNome(evento){
        evento.stopPropagation();
        this.nome = evento.target.value;
    }
    _handleMudancaEmail(evento){
        evento.stopPropagation();
        this.email = evento.target.value;
    }
    _handleMudancaEndereco(evento){
        evento.stopPropagation();
        this.endereco = evento.target.value;
    }     

    _salvarCliente(evento){ 
        evento.preventDefault();
        evento.stopPropagation();
        const dadosCliente = {
            "nome": this.nome,
            "email": this.email,
            "endereco": this.endereco
        };

        let ListaClientes = JSON.parse(localStorage.getItem('Clientes'));

        if(ListaClientes!==null){
            ListaClientes.push(dadosCliente);
        } else {
            ListaClientes = [dadosCliente];
        }

        localStorage.setItem('Clientes', JSON.stringify(ListaClientes));  
        
    }       
    

    render() {
        return (              
            <>
            <SiteHeader/>
            <SiteMenu/>
            <main>
                <div className="banner">            
                    <div className="container">
                    <S.Titulo>Cadastrar Cliente</S.Titulo> 
                    <S.CadastrarClientesForm className="form-cadastro"
                         onSubmit={this._salvarCliente.bind(this)}
                    >
                        <S.LinhaInput>
                            <S.CampoPadrao
                            type="text"
                            placeholder="Nome"
                            onChange={this._handleMudancaNome.bind(this)}
                            />
                        </S.LinhaInput>
                        <S.LinhaInput>
                            <S.CampoPadrao
                            type="text"
                            placeholder="email"
                            onChange={this._handleMudancaEmail.bind(this)}
                            />
                        </S.LinhaInput>    
                        <S.LinhaInput>
                            <S.CampoPadrao
                            type="text"
                            placeholder="Endereço"
                            onChange={this._handleMudancaEndereco.bind(this)}
                            />
                        </S.LinhaInput>                                        
                        
                        <S.LinhaInput>
                            <S.BotaoPadrao>
                            Cadastrar Cliente
                            </S.BotaoPadrao>
                        </S.LinhaInput>
                    </S.CadastrarClientesForm>
                    </div>
                </div>
            </main>        
            <SiteFooter/> 
        </>               
            );
    }
}
    
export default ClientesCadastrar;