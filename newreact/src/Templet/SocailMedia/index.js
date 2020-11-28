import React, { Component } from 'react';
import axios from 'axios'
import {SocialMedia, Icon,Social,SocialDesc,Span,SpanInfo } from './style';
class Media extends Component{
	state= {social:[]}
	componentDidMount(){
		axios.get('js/data.json').then(res => {this.setState({social: res.data.social})})
	}
	render(){
const {social}=this.state;
const SocialList= social.map((soc)=>{

return(
	<Social item={soc.id} key={soc.id}  >
                <Icon className={soc.icon}></Icon>
                <SocialDesc>
<Span >{soc.title}</Span>
<SpanInfo>{soc.body}</SpanInfo>
                </SocialDesc>
            </Social>
)

	
})
		return (
			
			<SocialMedia>
            
            {SocialList}
        </SocialMedia>	
		)
	}
};
export default Media;