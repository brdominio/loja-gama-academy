import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import ProdutosCadastrar from './Pages/ProdutosCadastrar';
import Produtos from './Pages/Produtos';
import ClientesCadastrar from './Pages/ClientesCadastrar';
import Clientes from './Pages/Clientes';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/ProdutosCadastrar' exact component={ProdutosCadastrar} />
                <Route path='/Produtos' exact component={Produtos} />
                <Route path='/ClientesCadastrar' exact component={ClientesCadastrar} />
                <Route path='/Clientes' exact component={Clientes} />                
            </Switch>
        </BrowserRouter>
    )
}