import React, {useState, useRef} from 'react'
import { A, Form, Container, Input, ProfileImg, Label, Button } from './style'
import { FaUserEdit, FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { registration } from '../../mock/mock';

const SignUp = () => {

    const navigate  = useNavigate()

    const inp  = useRef()
    const eye  = useRef()

    const [user, setUser] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [passwords, setPasswords] = useState('')
    const [register, setRegister] = useState(registration)

    const [picture,setPicture ] = useState('https://blueocean.ca/wp-content/uploads/2015/05/Male-Profile-Picture.jpg')

    function setImg(e){

        const reader = new FileReader()
        reader.onload=()=>{
            if (reader.readyState === 2) {
                setPicture( reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    function showPass(){
        if(inp.current.type === 'password')  {
            inp.current.type = 'text'
            eye.current.style.color = '#2c9c51'
        } else {
            inp.current.type = 'password'
            eye.current.style.color = 'black'
        }        
    }

    function handleClick(e){
        e.preventDefault()
        const newUser = [...register, {
            id:register.length+1,
            username: user,
            name: firstname,
            surname: lastname,
            password: passwords,
            profImg: picture
        }]
        setUser(newUser)
        localStorage.setItem('users', JSON.stringify(newUser))
        navigate('/accounts')
    }
    
  return (
    <Container>
        <Form onSubmit={handleClick}>
             
                    <ProfileImg src={picture}/>
                     <Input type={'file'} id={'prImg'} ds onChange={setImg}/>
                     <Label htmlFor={'prImg'} ><FaUserEdit/></Label>
                
                    <Input type={'text'} placeholder='Юзернейм' value={user} required onChange={(e)=>setUser(e.target.value)} />
                    <Input type={'text'} placeholder='Имя' value={firstname} required onChange={(e)=>setFirstname(e.target.value)}/>
                 <Input type={'text'} placeholder='Фамилия' value={lastname} required onChange={(e)=>setLastname(e.target.value)}/>
                 <Input type={'password'} placeholder='Пароль' ref={inp} required value={passwords} 
                 onChange={(e)=>setPasswords(e.target.value)}/>
                <A onClick={showPass} ref={eye}> <FaEye/></A>

            <Button type='submit'>Вход</Button>
        </Form>
    </Container>
  )
}

export default SignUp;