import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SiteMenu extends Component {
    render(){
        return(
            <>
                <nav id="menu-principal">
                    <div className="container flex">
                        <label className="open-menu-all" for="open-menu-all">
                            <input className="input-menu-all" id="open-menu-all" type="checkbox" name="menu-open"/>
                            <div className="navegacao-mobile">
                                <span className="linha-menu"></span>
                                <span className="linha-menu"></span>
                                <span className="linha-menu"></span>
                            </div>            
                            <ul className="list-menu">
                                <li className="item-menu"><Link to="/ProdutosCadastrar">Cadastrar Produtos</Link></li>
                                <li className="item-menu"><Link to="/Produtos">Ver Produtos</Link></li>
                                <li className="item-menu"><Link to="/ClientesCadastrar">Cadastrar Clientes</Link></li>
                                <li className="item-menu"><Link to="/Clientes">Ver Clientes</Link></li>
                            </ul>
                        </label>
                    </div>
                </nav>                            
            </>
        );

    }
}

export default SiteMenu;