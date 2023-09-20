import { useState } from "react";
import Links from "../Links/Links";
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = 
    [{ id: 1, name: 'Home', path: '/' }, 
    { id: 2, name: 'About', path: '/about' }, 
    { id: 3, name: 'Services', path: '/services' }, 
    { id: 4, name: 'Contact', path: '/contact' }, 
    { id: 5, name: 'NotFound', path: '*' }];


    return (
        <nav className="bg-yellow-200 h-16 flex items-center justify-between text-black">
            <div onClick={() => setOpen(!open)} className="text-xl md:hidden">
                {
                    open === true ?
                    <AiOutlineClose></AiOutlineClose>
                    : 
                    <AiOutlineMenu></AiOutlineMenu>
            
                }
            </div>
            <ul className={`md:flex duration-1000
                ${open ? 'top-16' : '-top-60'} absolute md:static  px-6 bg-yellow-200`}>
            {
                routes.map(route => <Links key={route.id} route ={route}></Links>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;