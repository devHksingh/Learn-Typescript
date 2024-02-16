import { useState } from 'react'
// import {Product} from './components/Product'
import Product from './components/Product'

import './App.css'

export interface IProduct{
  id: number;
  title: string;
  price: number;
}

function App() {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id:1,
      title:'Iphone',
      price:3900
    },
    {
      id:2,
      title:'MacBook',
      price:5000
    },
    {
      id:3,
      title:'camera',
      price:2500
    },
  ])

  return (
    <>
      {
        products.map(product => <Product product={product} key={product.id}/>)
      }
    </>
  )
}

export default App
