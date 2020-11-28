import React from 'react';
import {Drop,DropTitle,Span,Form,FormInput, InputEmail, InputText,InputExp,TextArea,Submit } from './style';
import Footer from './../Footer'

function Contect (){
	
		return (
			<div>
			<Drop>
            <div className="container">
                <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                <Form action="">
                    <FormInput>
                        <InputText type="text" placeholder="Your Name"/>
                        <InputEmail type="email" placeholder="Your Email"/>
                    </FormInput>
                    <InputExp type="text"  placeholder="Your Subject"/>
                    <TextArea cols="30" rows="10" placeholder="Your Message"/>
                    <Submit type="submit" value="Send Message"/>
                </Form>
            </div>
        </Drop>	
        <Footer/>	
        </div>
		);
	}

export default Contect;