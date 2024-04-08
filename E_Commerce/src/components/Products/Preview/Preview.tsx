import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProducts_ID } from "../../../services/ApiCalls";
import React from "react";
import Loader from "../../Static/Loader/Loader";
import { Toaster, toast } from "react-hot-toast";

const Preview = () => {
  const navigate = useNavigate();
   /* REGION: PAGE INFO */ 
    //ID OF THE PRODUCT
    const {id} = useParams();

    //GET INFROMATION FRON API
    const [info, setInfo] = React.useState({} as any);
    const [error, setError] = React.useState(false);

    //AMOUNT HANDLER
    const [amount, setAmount] = useState(1);
    
    //API CALL
    useEffect(() => {
      const getProductsInfo_API = async () => {
        const response = await getProducts_ID(id);
          //  set error if api retun with error
          if( response === undefined ) {
            setError(true);
          }
          else {
            response.discount = 10;
            setInfo(response);

          }
      }
      getProductsInfo_API();

    }, []);

    //REGION:     ADD TO CART FUCNTION
    //        ADD TO CART FUNTION
    function addCar(quantity: number, id: any) {
      
      //get the items from local storage
      const storedItems = localStorage.getItem('items');
  
      //verify is the item are already in LS or if is null
      if( storedItems == null  ) {
        //save the new item
        const item = JSON.stringify( [{ quantity: quantity, info: info }] );
        localStorage.setItem('items', item );
      }
      else {
        //search fot the item
        const items = JSON.parse(storedItems);
        const index = items.findIndex((i: any) => i.info.id === id);

        const item = JSON.stringify( { quantity: quantity, info: info } );

        //if it found someting, modify the quantity
        if( index > -1 ){
          items[index].quantity += quantity;
        }
        else {
          items.push(JSON.parse(item));
        }
        
        //save in LS
        localStorage.setItem('items', JSON.stringify(items));
      }

      //reset amount and show toast
      setAmount(1);
      toast.success('Product Added to Cart!', {
        style: {
          background: '#333',
          color: '#fff'
        }
      });
      //navigate to Cart
      setTimeout(() => navigate('/ShopCart'), 1000 );
     

    }

    return (
      //verify is fownd the item
      error === true ? <div> Ningun producto encontrado </div>  :
      //setting the item
      info.id === undefined ? <Loader /> :
      <div className="antialiased px-10 text-gray-900 py-6 w-full flex flex-col justify-between md:flex-row gap-16 lg:items-center"> 
        
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
        />

        {/* REGION: Image holder */}
        <div className="flex flex-col gap-4 lg:w-4/12 "> 
          { /* MAIN IMAGE */ }
          <img src={info.imageUrl !== null ? info.imageUrl : "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081" } alt={info.name} className="w-full h-full aspect-square object-cover rounded-xl" />
          {/* Posible more images */}
          <div className="flex flex-row justify-between h-20">
            <img src={info.imageUrl !== null ? info.imageUrl : "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081" } className="p-1 w-20 h-20 rounded cursor-pointer hover:border hover:border-blue-500" />
            <img src={info.imageUrl !== null ? info.imageUrl : "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081" } className="p-1 w-20 h-20 rounded cursor-pointer hover:border hover:border-blue-500" />
            <img src={info.imageUrl !== null ? info.imageUrl : "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081" } className="p-1 w-20 h-20 rounded cursor-pointer hover:border hover:border-blue-500" />
          </div>
        </div>
        {/* REGION: About */}
        <div className="flex flex-col gap-4 lg:w-2/4">

          {/* Product title and discount */}
          <div>
            {
              info.discount !== null ? <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded uppercase font-semibold tracking-wide"> {info.discount}% discount </span> : ''
            }
            <h1 className="text-3xl font-bold"> {info.name} </h1>

            { info.dimensions !== undefined && info.dimensions.width !== null ?  <span className="inline-block bg-gray-500 text-white font-semibold text-xs px-2 py-1 rounded uppercase tracking-wide">· {info.dimensions.width} {info.units.width} </span> : '' }
            { info.dimensions !== undefined && info.dimensions.height !== null ?  <span className="inline-block bg-gray-500 text-white font-semibold text-xs px-2 py-1 rounded uppercase tracking-wide">· {info.dimensions.height} {info.units.height}</span> : '' }
            { info.dimensions !== undefined && info.dimensions.length !== null ?  <span className="inline-block bg-gray-500 text-white font-semibold text-xs px-2 py-1 rounded uppercase tracking-wide">· {info.dimensions.length} {info.units.length}</span> : '' }
            { info.dimensions !== undefined && info.dimensions.weight !== null ?  <span className="inline-block text-gray-500 font-bold text-sm px-1 py-1 rounded uppercase tracking-wide"> · {info.dimensions.weight} {info.units.weight}</span> : '' }
           </div>

          {/* Description and price */}
          <p className="text-gray-500"> {info.description !== null ? info.description : "This product don't have description" } </p>
          <div className="mt-1">
              <span className="font-semibold text-2xl" >$ { info.price }</span>
              <span className="text-gray-600 text-xs"> { info.currency } </span>
          </div>

          { /* REGION: Add cart buttons */}
          <div className="flex flex-col items-center gap-12 md:flex-row">

            { /* Add buttons */ }
            <div className="bg-white flex flex-row items-center">
              <button className="items-center bg-slate-900 py-2 px-5 rounded-lg text-white text-3xl hover:bg-[#007bff]" 
              onClick={() => setAmount((prev) =>  prev == 1 ? prev : prev - 1 )}>-</button>
              <span className=" py-4 px-6 rounded-lg">{amount}</span>
              <button className="items-center bg-slate-900 py-2 px-4 rounded-lg text-white text-3xl hover:bg-[#007bff]" 
              onClick={() => setAmount((prev) => prev >= info.quantity ? prev : prev + 1)}>+</button>
            </div>
            { /* Add to cart 
              Check if the product is in stock */ 
              info.quantity <= 0 ? <h1 className="cursor-not-allowed border border-2 border-red-500 py-3 px-16 rounded-md font-semibold text-red-500 bg-white"> PRODUCT OUT OF STOCK </h1> :
              <button className="bg-[#007bff] text-white font-semibold py-3 px-16 rounded-xl h-full hover:bg-slate-900 " onClick={() => addCar(amount, id)}> ADD TO CART </button>
            }
                        
            
          </div>
          
        </div>

      </div>
    )
  }
  
export default Preview;