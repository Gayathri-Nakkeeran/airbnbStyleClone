import Link from "next/link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function cat3Footer() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };
  return (
    <div className=" my-5 pl-6  md:pl-12  lg:pl-0">
      <p className=" pb-3  px-4 text-xl font-bold">
        Inspiration for future getaways
      </p>

      <div className="slider pb-4 border-b-2 ml-5 ">
        <Slider {...settings}>
          <Link className="text-gray-400 no-underline  px-2 lg:px-4 " href="">
            Popular
          </Link>
          <Link className="text-gray-400 no-underline px-2 lg:px-4 " href="">
            Arts&Culture
          </Link>
          <Link className="text-gray-400 no-underline px-2 lg:px-4" href="">
            Outdoor
          </Link>
          <Link className="text-gray-400 no-underline px-2 lg:px-4 " href="">
            Mountain
          </Link>
          <Link className="text-gray-400 no-underline px-2 lg:px-4 " href="">
            Beach
          </Link>
          <Link className="text-gray-400 no-underline px-2 lg:px-4 " href="">
            Unique stays
          </Link>
          <Link className="text-gray-400 no-underline px-2 lg:px-4 " href="">
            Categories
          </Link>
          <Link
            className="text-gray-400 no-underline px-2 lg:px-4 pr-4 "
            href=""
          >
            Things to do
          </Link>
        </Slider>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 px-2 lg:px-4 mt-4 ">
        <div>
          <div className="mb-4">
            <p className="text-sm font-semibold p-0 m-0">Mentone</p>
            <p className="text-sm p-0 m-0 text-gray-500">Cottage Rentals</p>
          </div>

          <div className="mb-4">
            <p className="text-sm font-semibold p-0 m-0">Mentone</p>
            <p className="text-sm p-0 m-0 text-gray-500">Cottage Rentals</p>
          </div>

          <div className="mb-4">
            <p className="text-sm font-semibold p-0 m-0">Mentone</p>
            <p className="text-sm p-0 m-0 text-gray-500">Cottage Rentals</p>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <p className="text-sm font-semibold p-0 m-0">Mentone</p>
            <p className="text-sm p-0 m-0 text-gray-500">Cottage Rentals</p>
          </div>

          <div className="mb-4">
            <p className="text-sm font-semibold p-0 m-0">Mentone</p>
            <p className="text-sm p-0 m-0 text-gray-500">Cottage Rentals</p>
          </div>

          <div className="mb-4">
            <p className="text-sm font-semibold p-0 m-0">Mentone</p>
            <p className="text-sm p-0 m-0 text-gray-500">Cottage Rentals</p>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <p className="text-sm font-semibold p-0 m-0">Mentone</p>
            <p className="text-sm p-0 m-0 text-gray-500">Cottage Rentals</p>
          </div>

          <div className="mb-4">
            <p className="text-sm font-semibold p-0 m-0">Mentone</p>
            <p className="text-sm p-0 m-0 text-gray-500">Cottage Rentals</p>
          </div>

          <div className="mb-4">
            <p className="text-sm font-semibold p-0 m-0">Mentone</p>
            <p className="text-sm p-0 m-0 text-gray-500">Cottage Rentals</p>
          </div>
        </div>
        <div>
          <div className="hidden lg:inline mb-4">
            <p className="text-sm font-semibold p-0 m-0">Mentone</p>
            <p className="text-sm p-0 m-0 text-gray-500">Cottage Rentals</p>
          </div>

          <div className="hidden lg:inline mb-4">
            <p className="text-sm font-semibold p-0 m-0">Mentone</p>
            <p className="text-sm p-0 m-0 text-gray-500">Cottage Rentals</p>
          </div>

          <div className="hidden lg:inline mb-4">
            <p className="text-sm font-semibold p-0 m-0">Mentone</p>
            <p className="text-sm p-0 m-0 text-gray-500">Cottage Rentals</p>
          </div>
        </div>
        <div>
          <div className="hidden lg:inline mb-4">
            <p className="text-sm font-semibold p-0 m-0">Mentone</p>
            <p className="text-sm p-0 m-0 text-gray-500">Cottage Rentals</p>
          </div>

          <div className="hidden lg:inline mb-4">
            <p className="text-sm font-semibold p-0 m-0">Mentone</p>
            <p className="text-sm p-0 m-0 text-gray-500">Cottage Rentals</p>
          </div>

          <div className="hidden lg:inline mb-4">
            <p className="text-sm font-semibold p-0 m-0">Mentone</p>
            <p className="text-sm p-0 m-0 text-gray-500">Cottage Rentals</p>
          </div>
        </div>
        <div>
          <div className="hidden lg:inline mb-4">
            <p className="text-sm font-semibold p-0 m-0">Mentone</p>
            <p className="text-sm p-0 m-0 text-gray-500">Cottage Rentals</p>
          </div>

          <div className="hidden lg:inline mb-4">
            <p className="text-sm font-semibold p-0 m-0">Mentone</p>
            <p className="text-sm p-0 m-0 text-gray-500">Cottage Rentals</p>
          </div>

          <div className="hidden lg:inline mb-4">
            <p className="text-sm font-semibold p-0 m-0">Mentone</p>
            <p className="text-sm p-0 m-0 text-gray-500">Cottage Rentals</p>
          </div>
        </div>
      </div>
    </div>
  );
}
