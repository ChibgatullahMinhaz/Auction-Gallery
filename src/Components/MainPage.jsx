import React, { useEffect, useState } from "react";
import Table from "./Table";
import { Favorite } from "./Favorite";
import Loader from "./Loader";

const MainPage = () => {
  const [tabledata, setTableData] = useState([]);
  const [isloading, setLoading] = useState(false);
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
return (
    <div className="container mx-auto mt-10 mb-10 p-10 bg-[#F9F9F9] min-h-screen">
        <div className="mb-5">
            <h1 className="text-blue-950 font-bold text-xl">Active Auctions</h1>
            <p className="font-semibold text-gray-500">
                Discover and bid on extraordinary items
            </p>
        </div>

        <div className="grid grid-cols-4 gap-5">
            {isloading ? (
                <Loader />
            ) : (
                <div className="col-span-3">
                    <Table tabledata={tabledata} />
                </div>
            )}

            <div className="border-2 col-span-1 rounded-box p-5 bg-white rounded-l-2xl">
                <Favorite />
            </div>
        </div>
    </div>
);
};

export default MainPage;
