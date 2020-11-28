import React, { Component } from 'react';
import About  from './About/index';

import Footer from './Footer/index';
import Home from './Home/index';

import Portfolio from './Portfolio/index';
import Profail from './Profail/index';
import Media from './SocailMedia/index';
import Work from './Work/index';
class Index extends Component{
render(){
		return (
			
		<div>
		<Home />
		<Work />
		<Portfolio />
		<Profail />
		<About />
		<Media />
		<Footer />
		
		
		</div>		
		);
	}
}
export default Index;