import { IProduct } from "../App";



interface ProductPros{
    product: IProduct;
    handleAddTOCartClick(id:number):void
  }
  
  
 function Product({product,handleAddTOCartClick}:ProductPros) {
    return (
      <div>
        {
          <div>
            <h1 >{product.title}</h1>
            <h3>$ {product.price}</h3>
            <div>
                <button onClick={()=>handleAddTOCartClick(product.id)}>Add to cart</button>
            </div>
          </div>
          
        }
      </div>
    )
  }

  export default Product



