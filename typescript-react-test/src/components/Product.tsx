import { IProduct } from "../App";



interface ProductPros{
    product: IProduct
  }
  
  
 function Product({product}:ProductPros) {
    return (
      <div>
        {
          <div>
            <h1>{product.title}</h1>
            <h3>{product.price}</h3>
            
          </div>
        }
      </div>
    )
  }

  export default Product



