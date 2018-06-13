//Validar datos ingresados; loading state boton login; preguntar cookie

import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import FontAwesome from 'react-fontawesome';
import './Loginscreen.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email:'',
			password:''
		};
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	validateForm() {
		var regex = /\S+@\S+\.\S+/;	//Muy simple, solo chequea formato@como.este
		return (regex.test(this.state.email) && this.state.password.length > 5);
	}

	callAPI = (event) => {
		if(event) event.preventDefault();
		const API_URL = 'https://api.drapp.zap.do/login';
		fetch(API_URL,
		{
			body:JSON.stringify({"email": this.state.email, "password": this.state.password}),
			headers: { "Content-Type": "application/json" },
			method: "POST"
		})
		.then(response => response.json())
		.then(json => {
			if (json.ok === true) alert("Login correcto.");
			else alert("Login incorrecto.");
		})
		.catch(error => {
			alert("Se produjo un error al conectarse con la base de datos.");
			console.log(error);
		});
	}
	/*
	close = () => {
		this.props.close
	}
	*/
	render() {
		return (
			<form className="LoginForm" onSubmit={this.callAPI}>
				/*{this.props.close && */ <FontAwesome className="closeBtn fa-times-circle" size="2x" /*onClick={this.close} }*//>
				<h1>Ingreso</h1>
				<h4>Introduzca sus datos a continuación</h4>
				<FormGroup controlId="email" bsSize="large">
					<FormControl autoFocus type="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} />
				</FormGroup>
				<FormGroup controlId="password" bsSize="large">
					<FormControl type="password" value={this.state.password} placeholder="Contraseña" onChange={this.handleChange} />
				</FormGroup>
				<Button className="submitBtn" block type="submit" bsSize="large" bsStyle="primary" disabled={!this.validateForm()}>
					Iniciar sesión
				</Button>
				<Button className="animate" bsSize="small">¿Olvidó su contraseña?</Button>
				<Button className="btnFloatRight animate" bsSize="small">Registrarse</Button>
			</form>
		);
	}
}

export default Login;
