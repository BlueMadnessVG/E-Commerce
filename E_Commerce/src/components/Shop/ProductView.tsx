import { RiDeleteBin2Fill }  from "react-icons/ri"
import { useNavigate } from "react-router-dom";

function ProductView({id, imageURL, name, quantity, price, currency} : {id: string, imageURL: string, name: string, quantity: number, price: number, currency: number}) {
  const navigate = useNavigate();
  
  function deletItem() {
    const storedItems = localStorage.getItem('items');

    if(storedItems != null) {
      //search fot the item
      const items = JSON.parse(storedItems);
      const index = items.findIndex((i: any) => i.info.id === id);

      if (index !== -1) {
        items.splice(index, 1);
        localStorage.setItem('items', JSON.stringify(items));

        window.location.reload();
      } 
    }

  }

  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row place-items-center">
      
      <div className="flex flex-col md:flex-row">
        
        <div className="h-28 ">
          <img src={imageURL} className=" p-1 w-28 h-28 rounded-xl" />
        </div>
        <div className="px-4 pt-3 flex flex-col justify-between place-items-start">
          <a onClick={() => {navigate("/preview/"+id)}} className="text-lg font-medium cursor-pointer hover:text-[#007bff] "> {name} </a>
          
          <div className="flex flex-row gap-2">
            <p className="text-sm border border-slate-900 px-2 py-1 rounded font-semibold">Quantity: {quantity}</p>
            <button className="border border-red-500 px-2 py-1 rounded text-red-500 text-lg hover:bg-red-500 hover:text-white" onClick={deletItem}> <RiDeleteBin2Fill  /> </button>
          </div>
        </div>
      </div>
     
      <div className="flex flex-row place-items-end">
        <h1 className="text-lg font-semibold"> ${(price * quantity)} </h1>
        <span className="text-gray-600 text-xs ml-1"> { currency } </span>
      </div>

    </div>
  )
}

export default ProductView