import Link from "next/link";
import { useRef } from "react";
export default function Reserve() {
  const refPrice = useRef(null);
  return (
    
      <div
        ref={refPrice}
        className="hidden md:block rounded-xl shadow-md m-5 w-64 lg:w-80 xl:w-96 border border-gray-200 sticky top-32 h-fit z-10"
      >
        <div className="flex item-center px-3 mt-5 mb-5">
          <p className="w-1/2">
            <span className="font-semibold text-lg">₹ 6000</span> night
          </p>

          <div className="flex  xl:pl-10">
            <i className="fa-solid fa-star"></i>
            <p>4.95</p>
            <span className="text-center">.</span>
            <p className="text-gray-400"> 60 reviews</p>
          </div>
        </div>

        <div className="mx-10 rounded-xl border">
          <div className="flex flex-cols border-b ">
            <div className=" pl-4 border-r-2 pt-5 w-36 text-left pb-4 ">
              <p className=" font-semibold text-xs">CHECK-IN</p>
              <p className="text-xs">11/06/2023</p>
            </div>
            <div className="pl-4  mt-5 w-36 text-left ">
              <p className="font-semibold text-xs">CHECKOUT</p>
              <p className="text-xs">11/06/2023</p>
            </div>
          </div>
          <div className="flex">
            <div className="p-4 w-full">
              <p className="text-xs font-semibold">GUESTS</p>
              <p className="text-xs">1 guest</p>
            </div>
            <span className="material-symbols-outlined p-4 float-right hover:cursor-pointer">
              expand_more
            </span>
          </div>
        </div>

        <button className="font-semibold mt-4 mb-4 pt-3 pb-3  bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg  w-52 lg:w-64 xl:w-80 ml-8 bg-red-600 px-10">
          Reserve
        </button>
        <p className="text-center mb-5">You wont be charged yet</p>
        <div className="mx-6 mb-5 pb-10 border-b">
          <div className="flex">
            <Link className="text-black underline w-full" href="">
              1000*5 nights
            </Link>
            <p>5000</p>
          </div>

          <div className="flex">
            <Link className="text-black underline w-full " href="">
              Airbnb Service fee
            </Link>
            <p>5000</p>
          </div>
        </div>

        <div className="flex mx-6 pb-5">
          <p className="text-black text-lg font-semibold w-full  ">
            Total before Taxes
          </p>
          <p className="font-semibold text-lg text-black ">10000</p>
        </div>
      </div>

      
    
  );
}
