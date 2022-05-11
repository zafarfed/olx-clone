import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { P, Container, Image, Wrapper, Btn, Ta, Block, ChatCont, ChatNav, Messages, Message } from "./style";
import { useContext, useState } from "react";
import { MyContext } from "../../context/context";
import { useRef } from 'react';
import { animateScroll as scroll } from "react-scroll/modules";

const Posts = () => {
    
    const chat = useRef()
    const btn = useRef()
    const {id} = useParams()
    const {datas,  text, setText, messages, setMessages} = useContext(MyContext)
         
    
    function showChat(){
   setTimeout(()=>{
        chat.current.style.display = 'flex'
        btn.current.style.display = 'none'
        scroll.scrollToBottom()
    },500)
}
    
    function chatFunc(ev){
        ev.preventDefault()
        setMessages([...messages, text])
        setText('')
    }
    
    return (
        
        <>
        <Header/>
        <Container>
        
        {datas.filter((v)=>v.id ==id.replace(':', '')).map((item, index)=>{
            return(
                <Wrapper key={index}>
                <Image src={item.img}/>
                <P> Пользователь: {item.firstname} {item.lastname}, ID: {item.id}</P>
                <P>Регион: {item.region}, Опубликовано: {item.time}</P>
                <P>Цена: {item.price}$, {item.phone}</P>
                <P c>{item.thingname}</P>
                <P>{item.about}</P>
                <Btn onClick={showChat} ref={btn}>Отправить сообщение</Btn>
                </Wrapper>
                )
            })}
            
            <Container sty ref={chat}>
            {datas.filter((v)=>v.id ==id.replace(':', '')).map((item, index)=>{
                return(
                    <Wrapper dis key={index}>
                    
                    
                    <Block>
                    <ChatCont>
                    
                    {datas.filter((v)=>v.id == id.replace(':', '')).map((item)=>{
                        return(
                            <ChatNav key={item.id}>
                            <span>{item.firstname} {item.lastname}</span>
                            <span>🟢 Чат</span>
                            <span>Вы</span>
                            </ChatNav>
                            )
                            
                        })}
                        <Messages>

                        {
                            messages.length > 0 && messages.map((msg, i) => {
                                return(
                                    <Message key={i}>{msg}</Message>
                                    )
                                })
                            }
                            </Messages>
                        
                            </ChatCont>
                        </Block>
                            <Block>
                             <form onSubmit={chatFunc}>

                                 <Ta placeholder={`Напишите сообщение ${item.firstname}...`} value={text}
                                     onChange={(e)=>setText(e.target.value)}/>
                                 <Btn type="submit">Отправить</Btn>
                             </form>
                             </Block>
                        </Wrapper> 
                        )
                        
                    })}
                    </Container>
                    </Container>
                    </>
                    )
                }
                
                export default Posts