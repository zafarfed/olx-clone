import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
background-color: #F2F4F5;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
display: ${({sty})=>sty? 'none':''};
margin-top: ${({sty})=>sty? "50px" : '0'};
`;

export const Wrapper = styled.div`
width: 70%;
background-color: #ffffff;
padding: 50px;
display: ${({dis})=>dis? 'flex' : 'block'};
@media screen and (max-width:1336px){
display: ${({dis})=>dis? 'block': 'block'};
}
@media screen and (max-width: 767px){
display: ${({dis})=>dis? 'block': 'block'};
}
`;

export const Image = styled.img`
width: 100%;
height: 500px;
@media screen and (max-width:1336px) {height:400px }
@media screen and (max-width:767px) {height:300px }
@media screen and (max-width:430px) {height:250px }
`;

export const P = styled.p`
font-weight:${({c})=>c? '800': '500'};
color: #2C395E;
text-align: ${({c})=>c? 'center': 'none'};
font-size: ${({c})=>c? '22px': '16px'};
`;

export const Btn = styled.button`
width: 200px;
height: 40px;
padding: 10px;
background-color: #002F34;
cursor: pointer;
color: white;
border-radius: 10px;
`;

export const Ta = styled.textarea`
width: 100%;
height: 120px;
font-size: 20px;
padding: 15px;
outline: none;
border-radius: 10px;
`;

export const Block = styled.div`
width: 50%;
padding: 20px;
@media screen and (max-width:1336px){
width: 90%;
}
`;

export const ChatCont = styled.div`
width: 100%;
height: 180px;
border: 1px solid #007336;
border-radius: 10px;
padding: 15px;
padding-top: 0;
position: relative;
`;
export const ChatNav = styled.div`
width: 100%;
height: 30px;
border-bottom: 1px solid #007336;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Messages = styled.div`
float: right;
display: block;
height: 80%;
text-transform: capitalize;
`

export const Message = styled.p`
padding: 8px;
border-radius: 20px;
border-bottom-right-radius: 0;
background-color: #C7BEB5;
position: relative;
`