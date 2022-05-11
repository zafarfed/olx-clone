import Accounts from "../pages/accounts";
import AddPost from "../pages/addPost/AddPost";
import Home from "../pages/Home/Home";
import Posts from "../pages/Posts";
import SignUp from "../pages/signUp";

export const data = [{
    id:1,
    component: <Home/>,
    path:"/",
    child:[]
},
{
    id:2,
    component: <AddPost/>,
    path:"/newpost",
    child:[]
},
{
    id:3,
    component: <Posts/>,
    path:"/posts:id",
    child:[]
},
{
    id:4,
    component: <SignUp/>,
    path: '/signup',
    child:[]
},
{
    id:5,
    component: <Accounts/>,
    path: '/accounts',
    child:[]
},
]