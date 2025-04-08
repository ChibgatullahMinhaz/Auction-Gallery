import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const Table = ({ tabledata }) => {
  console.log(tabledata);
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
            <tbody  >
              {tabledata.map((data) => {
                return (
                  <tr className="border-b-2 p-4 mt-3 border-gray-200">
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
                    <button>
                    <AiOutlineHeart />

                    </button>
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
