import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
background-color: #F2F4F5;
`;

export const Wrapper = styled.div`
width: 70%;
height: 81.5vh;
background-color: white;
display: flex;
justify-content: space-around;
padding: 20px;
@media screen and (max-width: 767px) {
display: flex;
flex-wrap: wrap;
justify-content: center;
}
`;

export const Card = styled.div`
width: 400px;
height: 150px;
border: 1px solid gray;
border-radius: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
cursor: pointer;
:hover{
    box-shadow: 0 0 10px ;
}
@media screen and (max-width: 1336px) {
width: 80%;
}
@media screen and (max-width: 767px) {
width: 400px;
margin-top: 10px;
}
@media screen and (max-width: 450px) {
width: 100%;
margin-top: 10px;
}


`
Card.Img = styled.img`
width: 150px;
height: 100%;
border-radius: 20px;

`