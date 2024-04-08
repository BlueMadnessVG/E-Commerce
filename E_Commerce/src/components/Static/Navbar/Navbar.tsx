import { PiListBold, PiShoppingCartSimple } from "react-icons/pi";

import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

const Navbar = () => {
    const navigate = useNavigate();
/*
    const [items, setItems] = React.useState(0);
    
    //REGION: useEffect to check product save in local storage
     useEffect(()=> {
      const storedItems = localStorage.getItem('items');

      if (storedItems !== null){
        const items = JSON.parse(storedItems);
      }

      const listener = () => {
        console.log("entro");
        const storedItems = localStorage.getItem('items');

        if (storedItems !== null) {
          const items = JSON.parse(storedItems);
          setItems(items);
        }
      };

      window.addEventListener('storage', listener);

      return () => {
        window.removeEventListener('storage', listener);
      };

    }, []); */

    
    // Enable the menu Items to dropdown
    const [isToggle, setIsToggle] = useState(false);
    const handleToggle = () => {
      setIsToggle(!isToggle);
    }

    return (
      <nav>
        <div className="flex flex-wrap items-center max-lg:gap-y-6 max-sm:gap-x-4">

          { /* Logo and links section */ }
          <a className="cursor-pointer w-36 text-white text-3xl font-semibold uppercase" onClick={() => {navigate("/")}} > ESHOP </a>

          { /* Icons section*/ }
          <div className="flex items-center ml-auto lg:order:1">
            { /* Car items */ }
            <button className="relative p3" onClick={() => {navigate("/ShopCart")}}>
              <PiShoppingCartSimple className=" fill-[#FFF] hover:fill-[#007bff] text-2xl" />
{/*               <span id="itemsCounter" className="absolute -top-1 -right-1 rounded-full bg-red-500 text-white  w-4 h-4 flex items-center justify-center text-xs"> { items } </span> */}
            </button>

            { /* Displayable menu*/ }
            <button id="toggle" onClick={() => handleToggle() } className="lg:hidden ml-7">
              <PiListBold   className="fill-[#FFF] hover:fill-[#007bff] text-3xl inline-block" />
            </button>
          </div>

          { /* Menu Items */ }
          <ul className={ isToggle ? "block max-lg:w-full lg:space-x-10 max-lg:space-y-3 lg:absolute lg:left-1/2 lg:-translate-x-1/2 " : "lg:!flex max-lg:hidden max-lg:w-full lg:space-x-10 max-lg:space-y-3 lg:absolute lg:left-1/2 lg:-translate-x-1/2 " }>
            <li className="cursor-pointer max-lg:border-b max-lg:py-2"> 
              <a className=" text-white font-bold hover:text-[#007bff] text-[15px] block"> Catalog 1 </a> 
            </li> 
            <li className="cursor-pointer max-lg:border-b max-lg:py-2"> 
              <a className="text-white font-bold hover:text-[#007bff] text-[15px] block"> Catalog 2 </a> 
            </li> 
            <li className="cursor-pointer max-lg:border-b max-lg:py-2"> 
              <a className="text-white font-bold hover:text-[#007bff] text-[15px] block"> Catalog 3 </a> 
            </li> 
            <li className="cursor-pointer max-lg:border-b max-lg:py-2"> 
              <a className="text-white font-bold hover:text-[#007bff] text-[15px] block"> Catalog 4 </a> 
            </li> 
            <li className="cursor-pointer max-lg:border-b max-lg:py-2"> 
              <a className="text-white font-bold hover:text-[#007bff] text-[15px] block"> Catalog 5 </a> 
            </li> 
          
          </ul>
       
        </div>

        { /* Search-bar secction  */ }
        <SearchBar />
      </nav>
    )
  }
  
export default Navbar;