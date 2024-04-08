import React, { useEffect } from "react";
import ProductView from "./ProductView";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ShopCar() {
  const navigate = useNavigate();

  //REGION:   PAGE CONST
  const [items, setItems] = React.useState([] as any);
  const [subTotal, setSubTotal] = React.useState(0);

  useEffect(()=> {
    //REGION: OBTAIN ITEMS LOCAL STORAGE
    const storedItems = localStorage.getItem('items');

    //save te items from local storage and add the sub total
    if (storedItems !== null){
      const parsedItems = JSON.parse(storedItems);
      setItems(parsedItems);
      
      //obtain the subtotal
      let total = 0;
      for (let index = 0; index < parsedItems.length; index++) {
        total += parsedItems[index].info.price * parsedItems[index].quantity
      }

      setSubTotal(total);
    };
  }, []);
  
  //REGION:   COMPLATE PAYMENT
  function CompletePayment() {
    toast.success('Payment completed!', {
      style: {
        background: '#333',
        color: '#fff'
      }
    });

    localStorage.removeItem('items');
    //navigate to Cart
    setTimeout(() => navigate('/'), 1000 );
  }

  return (
    <div className="antialiased px-10 text-gray-900 py-6 w-full flex flex-col justify-between md:flex-row gap-4">
      
      <Toaster
          position="bottom-right"
          reverseOrder={false}
          gutter={8}
        />

      {/* REGION: ITEM TABLE */}
      <div className="p-4 w-full md:w-[75%] grid gap-8 bg-white rounded-lg">
        
        {/* table top */}
        <div className="flex flex-row justify-between place-items-end border-b-2 pb-2 "> 
          <h1 className="text-2xl font-semibold" > Cart </h1>
          <h4 className="text-sm text-gray-600" > Subtotal </h4>
        </div>

        {
          /* show the product from the local storage */
          items.length === 0 ? <div> NO PRODCUTS IN CART </div> :
          items.map( (item: any, index: number) => {
            return <ProductView 
              key={index} 
              id={item.info.id}
              imageURL={item.info.imageUrl !== null ? item.info.imageUrl : "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081"}
              name={item.info.name}
              quantity={item.quantity}
              price={item.info.price}
              currency={item.info.currency}
              />
          } )
        }

      </div>

        {/* REGION: SOBTOTAL */}
      <div className="w-full md:w-[25%] ">
        <div className="border rounded-md p-2 bg-white">
           
           {/* subtotal of the items */}
          <div className="flex flex-row justify-between ">
            <h1 className="text-lg font-semibold">Subtotal: </h1>
            <span className="text-lg font-normal"> $ {subTotal} </span> 
          </div>

            {/* button to complate payment */}
            <button className="w-full mt-5 px-2 py-1 rounded bg-white-500 text-green-500 font-semibold border border-green-500 hover:bg-green-500 hover:text-white" onClick={CompletePayment}> Complete payment </button>
        </div>
      </div>
    </div>
  )
}

export default ShopCar