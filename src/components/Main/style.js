import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
background-color: #F2F4F5;
display: flex;
flex-wrap: wrap;
`;

export const Wrapper = styled.div`
width: 100%;
height: 150px;
display: flex;
align-items: center;
@media screen and (max-width: 767px) {flex-direction: column;}
`;

export const InputBox = styled.div`
width: 50%;
height: 100%;
padding: 10px;
display: flex;
align-items: center;
justify-content: center;
`;

export const Box = styled.div`
width: 50px;
height: 50px;
border: none;
padding: 10px;
background-color: white;
display: flex;
align-items: center;
justify-content: space-around;
`;
 export const Input = styled.input`
 padding: 5px;
 width: 60%;
 height: 60px;
 text-align: center;
 font-size: 15px;
 font-weight: bold;
 color: #002F34;
 outline: none;
 border: none;
 @media screen and (max-width: 767px) {text-align:start; font-size:12px}
::placeholder{
    color: #002F34;
}`;
 export const Select = styled.select`
 padding: 5px;
 width: 60%;
 height: 70px;
 text-align: center;
 font-size: 15px;
 font-weight: bold;
 color: #002F34;
 outline: none;
 border: none;
 @media screen and (max-width: 767px) {text-align:start; font-size:12px}
::placeholder{
    color: #002F34;
}`;

export const SearchBtn = styled.button`
width: 100px;
height: 70px;
padding: 10px;
background-color: white;
border:none;
margin-left: 2px;
cursor: pointer;
:hover{
    background-color: #002F34;
    color: white;
    transition: all .5s;
}
`;

export const Text= styled.div`
align-items: center;
justify-content: center;
display: flex;
width: 100%;
height: 100px;
color: #002F34;
font-size: 25px;
font-weight: bold;
@media screen and (max-width:767px){
    font-size: 20px;
}
`;
export const Card = styled.div`
width: 100%;
padding: 50px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;
Card.Item = styled.div`
width: 250px;
height: 300px;
padding: 10px;
display: block;
background: white;
margin-bottom: 20px;
color: #002F34;
cursor: pointer;
:hover{
    box-shadow: 0 0 15px ;
    transition: all .3s;
}
`

export const A = styled.a`
border: ${({a})=>a? '1px solid #002F34':'none'};
float: ${({a})=>a? 'right':'left'};
padding: ${({a})=>a? '1px':'none'};
border-radius: ${({a})=>a? '6px':'none'};
color: ${({a})=> a? '#002F34': ''};
background-color: ${({a})=> a? 'white': ''};

:hover{
    color: ${({a})=> a? 'white': ''};
    background-color: ${({a})=> a? '#002F34': 'white'};
}
`;