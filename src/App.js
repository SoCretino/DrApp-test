//Click afuera del div cierra login; de alguna forma meter el div login aca

import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import FontAwesome from 'react-fontawesome';
import Loginscreen from './Loginscreen';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showLogin: false //change to false
		};
		this.closeLogin = this.closeLogin.bind(this);
		this.escFunction = this.escFunction.bind(this);
	}
	
	openLogin() {
		this.setState({
			showLogin: true
		});
	}
	closeLogin() {
		this.setState({
			showLogin: false
		});
	}
	
	escFunction(event){
		if(event.keyCode === 27 && this.state.showLogin === true ) {
			this.closeLogin();
		}
	}
	componentDidMount(){
		document.title = "DrApp | Plataforma de Salud Digital";
		document.addEventListener("keydown", this.escFunction, false);
	}
	componentWillUnmount(){
		document.removeEventListener("keydown", this.escFunction, false);
	}

	render() {
		return (
			<div className="App">
				{
					this.state.showLogin ? <Loginscreen className="Login" closeLogin={this.closeLogin.bind(this)}/> : null
				}
				<img className="oval-left" src="https://drapp.zap.do/static/images/turno-oval1.svg" alt=""/>
				<img className="oval-right" src="https://drapp.zap.do/static/images/turno-oval2.svg" alt=""/>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<img src="https://drapp.zap.do/static/images/logo-drapp.svg" alt="DrApp"/>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<NavItem>
								Plataforma
							</NavItem>
							<NavItem>
								Soporte
							</NavItem>
							<NavItem>
								Planes y Precios
							</NavItem>						
							<NavItem>
								Quienes Somos
							</NavItem>
							<NavItem href="#login" onClick={this.openLogin.bind(this)}>
								<span className="navLoginBtn">Iniciar sesión</span>
							</NavItem>
							<NavItem href="#signup">
								<span className="navSignUpBtn">Registrarse</span>
							</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<div className="main container text-center">
					<div className="col-sm-offset-2 col-sm-8">
						<h2>Informática médica para una práctica simple</h2>
						<h4>Historia Clínica Electrónica & Agenda Inteligente</h4>
						<div className="signUpBtn">
							Crear una cuenta <FontAwesome className="fa-long-arrow-right"/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
