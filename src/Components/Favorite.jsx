import { AiOutlineHeart } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

export const Favorite = ({ favorites, totalPrice,handleRemoveItem }) => {
 
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
              <div className="px-3">
                <h1 className="line-clamp-1 font-semibold">{data.title}</h1>
                <div className="flex items-center gap-4">
                  <h1 className="font-normal text-gray-600">
                    {data.currentBidPrice}
                  </h1>
                  <h1 className="font-normal text-gray-600">
                    Bids:{data.bidsCount}
                  </h1>
                </div>
              </div>
              <div className="relative">
                <button onClick={()=>handleRemoveItem(data.id)}
                  className="cursor-pointer bg-white rounded-full p-2 border-1 border-gray-200 hover:bg-gray-200 "
                  >
                  <RxCross2  />
                </button>
              </div>
            </div>
          );
        })
      )}

      <div className="flex items-center justify-between mt-5 mb-5 px-2">
        <h1 className="font-semibold text-xl"> Total bids Amount</h1>
        <h1 className="font-medium text-xl">
          $<span>{totalPrice}</span>
        </h1>
      </div>

    </div>
  );
};
