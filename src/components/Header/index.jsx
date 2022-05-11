import { Container, Card } from "./style"
import logo from '../../img/logo.png'
import { useNavigate } from 'react-router-dom';
import {FaRegHeart} from "react-icons/fa";

export const Header=()=>{
    const navigate = useNavigate()

    return(
        <Container>
            <Card>
                <Card.Item>
                    <img src={logo} width='100' onClick={()=>navigate('/')}/>
                </Card.Item>

            </Card>

            <Card>
                <Card.Item> Ру | O'z </Card.Item>
                <Card.Item><FaRegHeart/></Card.Item>
            </Card>

            <Card>
            <Card.Item onClick={()=>navigate('/signup')}>Мой профиль</Card.Item>
            <Card.Btn onClick={()=>navigate('/newpost')}>Подать объявление</Card.Btn>
            </Card>
        </Container>
    )
};export default Header;