import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-white text-base-content rounded p-10">
      

        <nav className="grid grid-flow-col gap-4">
        <h1 className="text-3xl font-bold">
        <span className="text-[#003EA4]">Auction</span>
        <span className="text-[#FFD337] font-extrabold">Gallery</span>
        </h1>
        </nav>

        <nav className="grid grid-flow-col gap-4">
          <a className="link font-semibold link-hover">Bid.</a>
          <a className="link font-semibold link-hover">Win.</a>
          <a className="link font-semibold link-hover">Own.</a>
        </nav>


        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Auctions</a>
          <a className="link link-hover">Categories</a>
          <a className="link link-hover">How to works</a>
        </nav>

      
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - AuctionHub. All rights
            reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};
