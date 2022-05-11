import React, { useState } from 'react'
import Header from '../../components/Header'; 
import { registration } from '../../mock/mock';
import { Container, Wrapper, Card } from './style';

const Accounts = () => {

    const oneUser = JSON.parse(localStorage.getItem('users'))

    const [users, setUser] = useState(oneUser? oneUser : registration)
  return (
    <>
    <Header/>
    <Container>
        
        <Wrapper>
            {users && users.map((item)=>{
                return(
                    <Card key={item.id}>
                        <Card.Img src={item.profImg}/>
                            <div>
                                <p>User {item.id}</p>
                                 <p>{item.username}</p>
                                <p>{item.name}</p>
                               <p>{item.surname}</p>
                            </div>
                    </Card>
                )
            })}
            
        </Wrapper>
    </Container>
    </>
  )
}
export default Accounts;