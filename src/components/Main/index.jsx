import { Container, Wrapper, InputBox,Box, Input, SearchBtn, Text, Card, A, Select} from "./style";
import { FaSearch, FaMapMarkerAlt, FaHeart} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { data, region } from "../../mock/mock";
import { useState } from "react";

export const Main=()=>{

    const navigate = useNavigate()
    const [datas, setDatas]= useState(JSON.parse(localStorage.getItem('posts')) || data)

    function search(e){
        let word = e.target.value.toLowerCase()
        const searchItem = data.filter((value)=>value.thingname.toLowerCase().includes(word))
        setDatas(searchItem)
    }
    return (
        <Container>
            <Wrapper>
                  <InputBox>
                        <Box>
                            <FaSearch/>
                        </Box>
                        <Input placeholder="931 989 объявлений рядом" onChange={search}/>
                    </InputBox>

                    <InputBox>
                        <Box>
                             <FaMapMarkerAlt/>
                        </Box>
                        <Select>
                            {region.map((item)=>{
                                return(
                                    <option key={item.id} value={item.name}>{item.name}</option>
                                )
                            })}
                        </Select>
                        <SearchBtn><FaSearch/></SearchBtn>
                    </InputBox>
            </Wrapper>

            <Text>
                <p>Премиум объявления</p>
            </Text>

            <Card>
                {datas.map((item, index)=>{
                    return(
                        <Card.Item key={index} title={item.name} onClick={()=>navigate(`/posts:${item.id}`)}>
                             <img src={item.img} width='250' height={150}/>
                             <p>{item.thingname}</p>
                             <b>{item.region}</b>
                             <p>{item.price} $</p>
                             <A>{item.time}</A> <A a><FaHeart/></A>
                         </Card.Item>
                )})}
            </Card>
        </Container>
    )
};export default Main;