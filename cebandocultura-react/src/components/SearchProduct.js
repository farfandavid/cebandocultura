import React from 'react'

const SearchProduct = () => {
  return (
    <div>
         <div className="search-product">
      <h2>Search Product</h2>

      <div className="product-card">
        <div className='img'></div>
        <div className="product-details">
          <h3>Product 2</h3>
          <p class="product-price">$15</p>
          <button class="add-to-cart-button">Add to Cart</button>
        </div>
      </div>


      <div className="product-card">
      <div className='img'></div>
        <div className="product-details">
          <h3>Product 2</h3>
          <p class="product-price">$15</p>
          <button class="add-to-cart-button">Add to Cart</button>
        </div>
      </div>

      <div className="product-card">
      <div className='img'></div>
        <div className="product-details">
          <h3>Product 3</h3>
          <p class="product-price">$20</p>
          <button class="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SearchProduct
