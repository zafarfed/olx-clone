import styled from 'styled-components'

export const Container = styled.div`
width: 100wv;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;


export const Form = styled.form`
width: 400px;
border: 1px solid black;
height: 300px;
padding: 50px 0;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
border-radius: 15px;
@media screen and (max-width: 470px) {height:100vh; padding: 0; border: none}
`;

export const ProfileImg = styled.img`
width: 90px;
height: 90px;
border-radius: 50%;
border: 1px solid gray;
margin-top: -50px;
align-items: center;
display: flex;
justify-content: center;
object-fit: cover;
@media screen and (max-width: 470px) { 
margin-top: 0px;

}
`

export const Input = styled.input`
width: 80%;
height: 30px;
text-align: center;
outline: none;
display: ${({ds})=>ds? 'none' :''};
`;
export const Label = styled.label`
cursor: pointer;
margin-top: -90px;
width: 50px;
height: 70px;
text-align: center;
font-size: 45px;
opacity: 0;
@media screen and (max-width: 470px) {
margin-top: -140px;

}
`
export const A = styled.a`
cursor: pointer;
margin-top:-45px;
margin-right:-270px ;
@media screen and (max-width: 470px) {
margin-top: -100px;
}
`;
export const Button = styled.button`
background-color: transparent;
color: blue;
border: none;
cursor: pointer;
border-bottom: 1px solid blue;
`