import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Table = ({ tabledata, handleBit }) => {
  const [clickedIcons, setClickedIcons] = useState([]);
  const notify = () => toast("An item is added to favorites.");

  const handleClicked = (data) => {
    notify();
    handleBit(data);
    setClickedIcons([...clickedIcons, data.id]);
  };
  return (
    <div>
      <div className=" md:col-span-3  bg-white rounded-l-2xl">
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 p-4">
          <table className="table">
            {/* head */}
            <thead className="border-b-2 border-gray-200">
              <tr>
                <th>Items</th>
                <th>Current Bid</th>
                <th>Time Left</th>
                <th>Bid Now</th>
              </tr>
            </thead>
            <tbody>
              {tabledata.map((data) => {
                const isClicked = clickedIcons.includes(data.id);
                return (
                  <tr
                    key={data.id}
                    className="border-b-2 p-4 mt-3 text-center border-gray-200"
                  >
                    <td className="flex items-center gap-2">
                      <img
                        src={data.image}
                        alt={data.title}
                        className="h-10 w-10"
                      />
                      <h1>{data.title}</h1>
                    </td>
                    <td className="font-semibold">{data.currentBidPrice}</td>
                    <td>{data.timeLeft}</td>

                    <td className="text-right">
                      <button
                        onClick={() => handleClicked(data)}
                        disabled={isClicked}
                        style={{
                          cursor: isClicked ? "not-allowed" : "pointer",
                        }}
                      >
                        {isClicked ? (
                          <FaHeart className="text-red-500" size={20} />
                        ) : (
                          <AiOutlineHeart className="text-gray-400" size={20} />
                        )}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
