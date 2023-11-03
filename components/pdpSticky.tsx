import Link from "next/link";
import { useRef } from "react";
export default function PdpSticky(props: { reserve: any }) {
  const refPrice = useRef(null);
  return (
    <div className="md:flex hidden  flex-cols-2 mx-10 py-5 border-b-2 sticky top-10 bg-white w-screen z-100">
      <div className=" 1/3 lg:w-3/5">
        <Link href="#photos" className="p-4 font-semibold">
          Photos
        </Link>
        <Link href="#amenities" className="p-4 font-semibold">
          Amenities
        </Link>
        <button className="p-4 font-semibold">Reviews</button>
        <button className="p-4 font-semibold">Location</button>
      </div>
      <div ref={props.reserve} className="flex pl-20 ml-8 hidden">
        <div>
          <p>
            <span className="text-lg font-semibold">2346</span> Night
          </p>
          <div className="flex"></div>
          <i className="fa-solid fa-star"></i>
          <span>4.87</span>
          <span className="px-2">.</span>
          <span>64 reviews</span>
        </div>
        <button className=" ml-3 bg-gradient-to-r from-red-600 to-pink-600 text-white py-3 px-6 rounded-xl">
          Reserve
        </button>
      </div>
    </div>
  );
}
