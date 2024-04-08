import React, { useEffect } from "react"
import ProductCard from "./ProductCard"
import ProductFilters from "./ProductFilters"
import { getProducts } from "../../../services/ApiCalls"
import Loader from "../../Static/Loader/Loader"

const Catalog = () => {
    // -------------------------------------------------
  //           CATALOG useState
  const [products, setProducts] = React.useState([]);
  const [error, setError] = React.useState(false);

  // -------------------------------------------------
  //           CATALOG FUNCTIONS

  /* USE EFECT TO CALL THE API AND GET ALL PRODUCTS */
  useEffect(() => {
    const getProducts_API = async () => {
      const response = await getProducts();

      //  set error if api retun with error
      if( response === undefined ) {
        setError(true);
      }
      else {
        
        setProducts(response);
      }
    };

    getProducts_API();

  }, [])

    return (
      <div className="antialiased text-gray-900 py-6 w-full flex flex-col md:flex-row">

        { /*REGION: PRODUCTS FILTER REGION */ }
        <div className="w-full md:w-[20%] p-2">
          <ProductFilters />
        </div>
        {
          /*REGION: PRODUCT CARD SHOW */
          error === true ? <div> Ningun producto encontrado </div>  :
          products.length === 0 ? <Loader /> :         
          <div className="px-4 w-full md:w-[80%] grid gap-8 xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3">
            { products.map( ( product: any, index ) => {
              return <ProductCard
                key={index} 
                id= {product.id}
                imageURL= {product.imageUrl !== null ? product.imageUrl : "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081"}
                discount = {product.discount}
                name= {product.name}
                price=  {product.price}
                currency= { product.currency }
                description= { product.description }
                />
            } ) }
          </div>
        }

      </div>
    )
  }
  
export default Catalog