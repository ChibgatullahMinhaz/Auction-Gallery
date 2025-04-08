import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

export const Favorite = ({ favorites }) => {
    const [totalPrice, setTotalPrice] = useState(0);

  const [totalBidAmount, setTotalBidAmount] = useState(0);
    const handleRemoveItem = (itemId) => {
        const updatedFavorites = favorites.filter((item) => item.id !== itemId);
        setTotalBidAmount(
        updatedFavorites.reduce((total, item) => total + item.currentBidPrice, 0)
        );
    };
  return (
    <div>
      <div className="flex items-center border-b-1 border-gray-200 justify-center gap-2 mb-5">
        <AiOutlineHeart />
        <h1 className="font-semibold text-xl">Favorite Items</h1>
      </div>
      {favorites.length === 0 ? (
        <div className="border-b-1 p-3 border-gray-400 items-center text-center py-10 gap-2 mb-5">
          <h1 className="font-semibold text-xl">No favorites yet</h1>
          <p>Click the heart icon on any item to add it to your favorites</p>
        </div>
      ) : (
        favorites.map((data) => {
          return (
            <div
              key={data.id}
              className="flex items-center justify-between border-b-1 gap-1 border-gray-200 px-5 mb-5"
            >
              <img src={data.image} alt={data.title} className="h-15 w-15" />
              <div>
                <h1>{data.title}</h1>
                <div className="flex items-center justify-between">
                <h1 className="font-normal text-gray-600">{data.currentBidPrice}</h1>
                <h1 className="font-normal text-gray-600">Bids:{data.bidsCount}</h1>
                </div>
              </div>
             <div>
             <button onClick={handleRemoveItem}>
             <RxCross2 />

             </button>
             </div>
            </div>
          );
        })
      )}

      <div className="flex items-center justify-between mt-5 mb-5">
        <h1 className="font-semibold text-xl"> Total bids Amount</h1>
        <h1 className="font-medium text-xl">
          $<span>{totalPrice}</span>
        </h1>
      </div>
    </div>
  );
};
