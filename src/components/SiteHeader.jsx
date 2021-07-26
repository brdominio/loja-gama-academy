import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import iconeFacebook from '../assets/img/icons/facebook.png';
import iconeInstagram from '../assets/img/icons/instagram.png';

class SiteHeader extends Component {
    render(){

        return(
            <>
                <header>
                    <div className="container flex">
                        <a>
                            <img src={logo} className="logo" alt="Robô Aspirador Mondial" title="Robô Aspirador Mondial" />
                        </a>
                        <ul className="flex">
                            <li><a title="Curta nossa página no Facebook"><img src={iconeFacebook} alt="Curta nossa página no Facebook" title="Curta nossa página no Facebook"/></a></li>
                            <li><a title="Siga a Mondial no Instagram"><img src={iconeInstagram} alt="Siga a Mondial no Instagram" title="Siga a Mondial no Instagram"/></a></li>
                        </ul>
                    </div>
                </header>                            
            </>
        );

    }
}

export default SiteHeader;