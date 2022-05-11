import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 80px;
background-color: #002F34;
display: flex;
`;

export const Card = styled.div`
width: 33%;
display: flex;
padding: 10px;
justify-content: space-around;
align-items: center;
font-size: 18px;
@media screen and (max-width: 1336px)  { 
    width: 400px; 
    justify-content: space-around;
    display: flex;
    font-size: 14px;
}
@media screen and (max-width: 767px) {
    width: 250px;
    justify-content: space-around;
    display: flex;
    font-size: 11px;
}
`;
Card.Item = styled.p`
font-weight: bold;
color: white;
cursor: pointer;
`;
