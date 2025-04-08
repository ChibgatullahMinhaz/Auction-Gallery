import React from 'react';

const Hero = () => {
    return (
        <>
            <div
  className="hero lg:h-[400px] py-3 sm:py-0 min-h-[200px]"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/93ssxxJD/Banner-min.jpg)",
  }}>
  <div className="hero-overlay"></div>
  <div className=" text-neutral-content text-left grid grid-cols-2 justify-between">
    <div className=" w-full sm:max-w-lg col-span-2 md:col-span-1 ">
      <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Bid on Unique Items from Around the World</h1>
      <p className="mb-5">
      Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
      </p>
      <button className="btn bg-white text-black border-[#e5e5e5] rounded-3xl">Explore Auctions</button>
    </div>
    <div className="max-w-md lg:block hidden">
     
    </div>
  </div>
</div>
        </>
    );
};

export default Hero;