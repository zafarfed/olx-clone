import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
display: flex;
background-color: white;
justify-content: center;
background-color: #F2F4F5;
`

export const Box= styled.div`
width: 70%;
height: 87.5vh;
background-color: white;
@media screen and (max-width: 999px){
height: 0;
}
`

export const Form = styled.form`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 20px 0;

@media screen and (max-width: 999px){
display: flex;
justify-content: center;
}

`;

export const Input = styled.input`
padding: 10px;
width: 40%;
outline: none;
border-radius: 10px;
border-color: #002F34;
margin-bottom: 30px;
@media screen and (max-width: 999px){
width: 70%;
}
@media screen and (max-width: 470px){
width: 100%;
}
`;
export const InputImg = styled.input`
padding: 10px;
width: 40%;
border-radius: 10px;
border-color: #002F34;
`

export const Select = styled.select`
padding: 10px;
width: 42%;
outline: none;
border-radius: 10px;
border-color: #002F34;
margin-bottom: 30px;
@media screen and (max-width: 999px){
width: 70%;
}
`
export const TextArea =styled.textarea`
width: 40%;
height: 150px;
outline: none;
border-color: #002F34;
border-radius: 10px;
padding: 8px;
font-size: 15px;
@media screen and (max-width: 999px){
width: 70%;
}
`
export const Button =styled.button`
padding: 10px;
width: 40%;
height: 50px;
color: white;
background-color: #002F34;
font-weight: bold;
font-size: 20px;
cursor: pointer;
margin-top: 30px;

`;