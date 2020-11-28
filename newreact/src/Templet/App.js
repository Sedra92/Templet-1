import React, { Component } from 'react';
import {BrowserRouter, Route}from 'react-router-dom';
import Index  from './index';
import Contect  from './Contect/index';
import Navbar from './Navbar/index';


class App extends Component{
render(){
		return (
		<BrowserRouter>	
		<Navbar />
	<Route exact path='/' component={Index }/>
	<Route exact path='/Contect' component={Contect}/>
	
		</BrowserRouter>
		
		
				
		);
	}
}
export default App;