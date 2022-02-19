import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background: grey;
position: absolute;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
    align-content: center;
    padding: 0 0 0 50px;
    color: black;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`;

export const FooterLink = styled.a`
color: #fff;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
margin-bottom: 40px;
font-weight: bold;
`;
