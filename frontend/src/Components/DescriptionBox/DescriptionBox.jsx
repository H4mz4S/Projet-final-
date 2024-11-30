import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
        "Step into a world where style meets comfort. Our collection is thoughtfully curated to celebrate individuality,
         blending timeless elegance with modern trends. From casual essentials to statement pieces, each item is crafted with premium materials and meticulous attention to detail. 
         Whether you're dressing up for a special occasion or keeping it cozy at home, 
         our apparel is designed to fit your lifestyle beautifully. Discover your perfect look today! 
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
