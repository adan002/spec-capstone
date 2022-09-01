import React from 'react';
import "./Products.css";

const Products = ({ productItems }) => {
  return (
    <div className="products">
        {productItems.map((productItem) => (
            <div className="card">
                <div>
                    <img
                     className="product-image"
                     src={productItem.image}
                     alt={productItem.name}
                     />
                </div>

                </div>

        ))}
         </div>
  )
}

export default Products