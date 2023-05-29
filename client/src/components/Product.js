import React from "react";
// link
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    <Link>
      <div className="grad w-full h-[362px] rounded-[8px] overflow-hidden relative group">
        {/* image */}
        <div className="w-full h-[200px] flex items-center justify-center relative">
          <img
          className="w-[160px] h-[160px] group-hover:scale-90" 
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt=""
          ></img>
        </div>
      </div>
    </Link>
  );
};

export default Product;
