import React, { createContext, useState} from 'react';
import { data } from '../mock/mock';
export const MyContext = createContext();

export const Context = ({children})=>{

    const [name, setName]= useState('')
    const [surname, setSurname]= useState('')
    const [number, setNumber]= useState('')
    const [title, setTitle]= useState('')
    const [choosRegion, setChooseRegion]= useState('')
    const [thingprice, setThingprice]= useState('')
    const [aboutProd, setAboutProd]= useState('')
    const [image, setImage]= useState()
    const [text, setText] = useState('')
    const [messages, setMessages] = useState([])

    const [datas, setDatas]= useState(JSON.parse(localStorage.getItem('posts')) || data)
    
    function productImg(e){
        const reader = new FileReader()
        reader.onload=()=>{
            if (reader.readyState === 2) {
                setImage( reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    

    return(
        
        <MyContext.Provider value={{
            aboutProd, setAboutProd,
            image, setImage,
            thingprice, setThingprice,
            choosRegion, setChooseRegion,
            name, setName,
            surname, setSurname,
            number, setNumber,
            title, setTitle,
            datas, setDatas,
            text, setText,
            messages, setMessages,
             productImg
        }}>
            {children}
        </MyContext.Provider>
    )
}; export default Context;