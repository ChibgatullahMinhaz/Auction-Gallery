import React from 'react';

const Hero = () => {
    return (
        <>
            <div
  className="hero lg:h-[400px] h-[200px]"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/93ssxxJD/Banner-min.jpg)",
  }}>
  <div className="hero-overlay"></div>
  <div className=" text-neutral-content text-left grid grid-cols-2 justify-between">
    <div className="max-w-lg">
      <h1 className="mb-5 text-5xl font-bold">Bid on Unique Items from Around the World</h1>
      <p className="mb-5">
      Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
      </p>
      <button className="btn bg-white text-black border-[#e5e5e5] rounded-3xl">Explore Auctions</button>
    </div>
    <div className="max-w-md">
     
    </div>
  </div>
</div>
        </>
    );
};

export default Hero;