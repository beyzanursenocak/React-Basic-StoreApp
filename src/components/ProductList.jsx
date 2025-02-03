import { items } from './data'
import Product from './Product'

export default function ProductList() {
    return (
      <>
        {
          items.length > 0 ? (
            <div className='row row-cols-2 row-cols-md-3 row-cols-xl-4 g4' id='product-list'>
            {
              items.map((item, index) => (
                <div className='col pb-3' 
                key = { index }
                >
                  <Product 
                    productObj = { item }
                  />
                </div>
              ))
            }
          </div>
          ) : (
            <p>Şuan satışta olan ürünümüz yoktur</p>
          )
        }
      </>
    )
  }