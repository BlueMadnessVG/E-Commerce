import { useNavigate } from "react-router-dom"

function ProductCard( {id, imageURL, discount, name, price, currency, description} : { id: number, imageURL: string, discount: number, name: string, price: number, currency: string, description: string }) {
    const navigate = useNavigate();

    return (
        <a onClick={() => { navigate("/preview/"+id) }} className="cursor-pointer" >

            { /* REGION: Image of the product */ }
            <div className="relative pb-5/6">
                <img src={imageURL} alt={name} className="absolute h-full w-full object-cover rounded-lg shadow-md"></img>
            </div>

            { /* REGION: product information */ }
            <div className="relative px-2 -mt-14 ">

                { /* CARD DIV */ }
                <div className="max-h-40 h-40 py-5 px-6 bg-white rounded-lg shadow-lg hover:border-slate-900 hover:border">
                    
                    { /* SHOW a discount if the product have */ }
                    <div className="">
                        {
                            discount !== null ? <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded uppercase font-semibold tracking-wide"> {discount}% discount </span> : ''
                        }
                        
                    </div>

                    { /* NAME - PRICE - DESCRIPTION  */ }
                    <h4 className="font-bold text-2xl leading-tight truncate"> { name } </h4>
                    <div className="mt-1">
                        <span className="font-semibold text-xl" >$ { price }</span>
                        <span className="text-gray-600 text-xs"> { currency } </span>
                    </div>
                    
                    <div className=" mt-3 text-gray-600 text-xs uppercase font-bold tracking-wide truncate">
                        { description }
                    </div>
                </div>
            </div>

        </a>
    )
}

export default ProductCard