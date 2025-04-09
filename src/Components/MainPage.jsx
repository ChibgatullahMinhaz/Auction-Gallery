import React, { useEffect, useState } from "react";
import Table from "./Table";
import { Favorite } from "./Favorite";
import Loader from "./Loader";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

const MainPage = () => {
  const [tabledata, setTableData] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setLoading(true);
    try {
      fetch("data.json")
        .then((response) => response.json())
        .then((json) => setTableData(json));
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  }, [isloading]);

  const handleBit = (data) => {
    if (!favorites.find((item) => item.id === data.id)) {
      setFavorites([...favorites, data]);
      const getItemPrice = parseFloat(
        data
        .currentBidPrice
        .replace("$", "")
        .replace(",", "")
      );
      setTotalPrice(totalPrice + getItemPrice);
    } else {
      toast("Item Already Added");
    }
  };

  const handleRemoveItem = (itemId) => {
    if (itemId) {
      toast("Item Removed from favorites"); 
      setFavorites(favorites.filter((item) => item.id !== itemId));
      const getRemoveItemPrice = parseFloat(
        favorites.find((item) => 
          item.id === itemId)
        .currentBidPrice
          .replace("$", "")
          .replace(",", "")
      );
      setTotalPrice(totalPrice - getRemoveItemPrice);
    }
  };
  return (
    <div className="container mx-auto mt-10 mb-10 p-10 bg-[#F9F9F9] min-h-screen">
      <ToastContainer />

      <div className="mb-5">
        <h1 className="text-blue-950 font-bold text-xl">Active Auctions</h1>
        <p className="font-semibold text-gray-500">
          Discover and bid on extraordinary items
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {isloading ? (
          <Loader />
        ) : (
          <div className="col-span-2 shadow-xl rounded-box rounded-l-2xl self-start">
            <Table tabledata={tabledata} handleBit={handleBit} />
          </div>
        )}

        <div className="col-span-1 shadow-xl rounded-box  bg-white rounded-l-2xl self-start">
          <Favorite
            favorites={favorites}
            totalPrice={totalPrice}
            handleRemoveItem={handleRemoveItem}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
