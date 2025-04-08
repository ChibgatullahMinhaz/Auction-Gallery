import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";

export const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  return (
    <div>
      <div className="flex items-center border-b-1 border-gray-200 justify-center gap-2 mb-5">
        <AiOutlineHeart />
        <h1 className="font-semibold text-xl">Favorite Items</h1>
      </div>
      {
        favorites.length ===0 ? (

            <div className="border-b-1 p-3 border-gray-400 items-center text-center py-10 gap-2 mb-5">
            <h1 className="font-semibold text-xl">No favorites yet</h1>
            <p>Click the heart icon on any item to add it to your favorites</p>
          </div>
        ) : (
            <div>hello</div>
        )
      }
     
     <div className="flex items-center justify-between mt-5 mb-5">
        <h1 className="font-semibold text-xl"> Total bids Amount</h1>
        <h1 className="font-medium text-xl">$<span>0000000</span> </h1>
     </div>
    </div>
  );
};
