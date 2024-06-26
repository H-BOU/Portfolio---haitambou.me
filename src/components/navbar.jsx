import { NavLink, Outlet , useLocation } from 'react-router-dom';
import icon from '../assets/moroccoStar.webp';
import { useRef } from 'react';

const NavBar = () => {
    const location = useLocation();


    const isContact = location.pathname === '/contact';
    return (
        <>
            <nav className={`absolute w-full z-10 flex justify-between items-center p-8 lg:p-10 xl:p-16 2xl:p-24 ${isContact ? 'text-black' : 'text-white'}`}>
            <NavLink to="/"><div className='flex flex-row items-center'>
                   <img src={icon} alt="moroccoStar" className='h-8 w-8 lg:h-12 2xl:h-16 lg:w-12 2xl:w-16'/>
                    <h1 className='madeInMorocco text-lg opacity-70 font-[andalousSemiBold] m-4 hover:opacity-100 duration-500'>MADE IN<br />MOROCCO</h1>
                </div> </NavLink>
                <div className={`navContainer flex flex-col space-y-4 text-sm 2xl:text-xl text-right font-[andalousSemiBold]   ${'active'}`}>
                    <NavLink to="/about" className="opacity-50 hover:opacity-100">
                    ABOUT
                    </NavLink>
        
                    <NavLink to="/work" className="opacity-50 hover:opacity-100">
                    WORK
                    </NavLink>
        
                    <NavLink to="/contact" className="opacity-50 hover:opacity-100">
                    CONTACT
                    </NavLink>
                </div>
            </nav>
        <Outlet />
        </>
  
    );
}

export default NavBar;