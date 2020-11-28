import styled from 'styled-components'

export const PortfolioSection =styled.div` 
    background: #f8f8f8;
    padding-top: 20px; 
    overflow: hidden;
`

export const PortfolioTitle =styled.h2`
    text-align: center;
    font-size: 35px
`

export const Span=styled.span` 
    font-weight: normal
`

export const PortfolioList=styled.ul` 
    list-style: none;
    text-align: center;
    margin: 20px 0
`

export const  PortfolioItem =styled.li`
    display: inline-block;
    width: 100px;
    padding: 10px;
    background: ${props => props.active ?  '#eb5424' : ''};
    color: ${props => props.active ?  '#fff' : '#000'}
    `
    export const Image =styled.div` 
        width: 25%;
        float: left;
        font-size: 0;
        position: relative;
        &:hover >div{opacity: 1}
    `



export const Img=styled.img`
    width: 100%
`

export const Overlay =styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0
`



