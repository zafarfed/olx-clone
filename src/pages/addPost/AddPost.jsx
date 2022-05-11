import { Container,Form, Box, Input, Select, TextArea, Button} from "./style";
import { Header } from "../../components/Header";
import { region } from "../../mock/mock";
import { useContext } from "react";
import { MyContext } from "../../context/context";
import { toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const AddPost =()=>{

    const toastify =()=> toast.success('Добавлено!')
    const date = new Date()
    const addedTime = `${date.getHours()}:${date.getMinutes()}  ${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
    
    const {
        name, setName,
        surname, setSurname,
         number, setNumber,
          title, setTitle, 
          choosRegion, setChooseRegion, 
          thingprice, setThingprice,
        aboutProd, setAboutProd,
        image, setImage,
        datas, setDatas,
        productImg
    } = useContext(MyContext)

    function addNewPost(event){
        event.preventDefault();

        const newPost = [...datas, {
            id: datas.length+1,
            firstname: name,
            lastname: surname,
            phone: number,
            thingname: title,
            region: choosRegion,
            price: thingprice,
            about: aboutProd,
            time: addedTime,
            img: image,
        }]
        
        localStorage.setItem('posts', JSON.stringify(newPost) )
        setDatas(newPost)

        setName('')
        setSurname('')
        setNumber('')
        setTitle('')
        setChooseRegion('')
        setAboutProd('')
        setThingprice('')
        setImage()
        toastify()
    }

    return(
        <>
    <Header/>
<Container>
    <Box>
    <Form onSubmit={addNewPost}>
            <Input type={'text'} placeholder="Имя" required value={name} 
            onChange={(e)=>setName(e.target.value)}/>

            <Input type={'text'} placeholder="Фамилия" required value={surname} 
            onChange={(e)=>setSurname(e.target.value)}/>

            <Input type={'number'} placeholder="+998 91 0123456" required value={number} 
            onChange={(e)=>setNumber(e.target.value)}/>

         <Select onChange={(e)=>setChooseRegion(e.target.value)}>
            {region.map((item,index)=>{return(
                    <option key={index} value={item.name} defaultValue={item.name[0]}>{item.name}</option>
                    )})}
         </Select>

            <Input type={'text'} placeholder="Титл" required value={title} 
            onChange={(e)=>setTitle(e.target.value)}/>


            <Input type={'number'} placeholder="Цена" required value={thingprice} 
            onChange={(e)=>setThingprice(e.target.value)}/>

            <TextArea placeholder="Напишите что нибудь..." required value={aboutProd} 
            onChange={(e)=>setAboutProd(e.target.value)}/>

            <Input type={'file'} onChange={productImg} required/>

            <Button type="submit">Add</Button>

    </Form>
    </Box>
</Container>
 <ToastContainer/>
        </>
    )
}; export default AddPost;