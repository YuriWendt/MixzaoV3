import styled from "styled-components";
import { theme } from "../../global/theme";
import cardbackground from "../../assets/cardbackground.png";

export const Card = styled.div`
    width: 207px;
    height: 88px;
    margin-right: 16px;
    border: 1px solid ${theme.colors.black.color40};
    box-sizing: border-box;
    border-radius: 6px;

    span{
        display: block;
        margin: 16px 16px;
    }
`;

export const CardPlayer = styled.div`
    position: relative;
	width: 400px;
	height: 450px;
	background-image: url(${cardbackground});
	background-position: center center;
	background-size: 100% 100%;
	background-repeat: no-repeat;
	padding: 3.8rem 0;
	z-index: 2;
	-webkit-transition: 200ms ease-in;
	-o-transition: 200ms ease-in;
	transition: 200ms ease-in;
    
`;

export const CardPicture = styled.div`

    width: 100%;
	height: 100%;
	-o-object-fit: contain;
	object-fit: contain;
	position: relative;
	right: -1.5rem;
	bottom: 0;
    top: 2rem;
    left: 9rem;
    img{
        border-radius: 6px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    }
`;
export const CardName = styled.h1`
    position: absolute;
    left: 0px;
    top: 300px;
    color:  rgba(205,186,3,1);
    width: 100%;
	text-align: center;
	font-size: 1.6rem;
	text-transform: uppercase;
	overflow: hidden;
`;

export const CardStats = styled.div`
    position: absolute;
    width: 300px;
    height: 150px;
    left: 50px;
    top: 350px;
    color:  rgba(205,186,3,1);
	font-size: 1.6rem;
	text-transform: uppercase;
	overflow: hidden;
`;

export const CardStatsName = styled.h2`
    color:  rgba(205,186,3,1);
    width: 100%;
	font-size: 1.0rem;
	text-transform: uppercase;
	overflow: hidden;
`;