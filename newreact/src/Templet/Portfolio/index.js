import React,{Component} from 'react';
import axios from 'axios'
import {PortfolioSection,PortfolioTitle,Span,PortfolioList,PortfolioItem,Image,Img,Overlay,OverlaySpan} from './style'


class Portfolio extends Component{
	state={
		portfolio:[]
	}
	componentDidMount(){
		axios.get('js/data.json').then(res => {this.setState({portfolio: res.data.portfolio})})
	}
	render(){	const {portfolio}=this.state;
	const ImgList =portfolio.map(  (ImgItem) =>{
		return(  
                <Image key={ImgItem.id}>
                    <Img src={ImgItem.image} alt=""/>
                    <Overlay>
                       
                    </Overlay>
                </Image>
           	
		)})
return(
<PortfolioSection>
	<PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
	<PortfolioList>
		<PortfolioItem active>All</PortfolioItem>
		<PortfolioItem>HTML</PortfolioItem>
		<PortfolioItem>Photoshop</PortfolioItem>
		<PortfolioItem>Wordpress</PortfolioItem>
		<PortfolioItem>Mobile</PortfolioItem>
	</PortfolioList>
	
<div>
{ImgList}     
	</div>
            
			</PortfolioSection>

)

	}


};
export default Portfolio;