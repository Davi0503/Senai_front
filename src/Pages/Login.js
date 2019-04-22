
import React, { Component } from "react";
import {parseJwt} from '../../services/auth';
import {Link} from 'react-router-dom';

class longin extends Component{

    render(){
        return (
            <section className="container flex">
              <div className="img__login">
                <div className="img__overlay" />
              </div>
      
              <div className="item__login">
                <div className="row">
                  <div className="item">
                    <Link to="/">
                      <img src={logo} className="icone__login" alt="SviGufo" />
                    </Link>
                  </div>
                  <div className="item" id="item__title">
                    <p className="text__login" id="item__description">
                      Bem-vindo! Faça login para acessar sua conta.
                    </p>
                  </div>
                  <form onSubmit={this.efetuaLogin.bind(this)}>
                    <div className="item">
                      <input
                        className="input__login"
                        placeholder="username"
                        type="text"
                        value={this.state.email}
                        onChange={this.atualizaEstadoEmail.bind(this)}
                        name="username"
                        id="login__email"
                      />
                    </div>
                    <div className="item">
                      <input
                        className="input__login"
                        placeholder="password"
                        value={this.state.senha}
                        onChange={this.atualizaEstadoSenha.bind(this)}
                        type="password"
                        name="password"
                        id="login__password"
                      />
                    </div>
                    <p className="text__login" style={{ color : 'red',  textAlign : 'center' }}>{this.state.erroMensagem}</p>
                    <div className="item">
                      <button type="submit" className="btn btn__login" id="btn__login">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          );
    }
    
}