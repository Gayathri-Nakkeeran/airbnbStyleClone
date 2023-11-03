"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sample from "./sample";

export default function Card() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    swipe: true,
    touchMove: true,
  };
  return sample.map((item) => {
    return (
      <Link
        className="no-underline text-black"
        key={item.id}
        href="../pages/pdp"
      >
        <div key={item.id} className="  flex flex-col h-96 px-3">
          <div>
            <div id="cardslider">
              <Slider {...settings}>
                {Object.values(item.images).map((image) => {
                  return (
                    <div key="1">
                      <Image
                        className="h-64  w-full object-cover rounded-xl hover:cursor-pointer"
                        src={image}
                        alt=""
                      ></Image>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>

          <div className="flex justify-between mt-2 text-sm font-md ">
            <p className="mb-0">{item.place}</p>
            <div className="flex pr-4">
              <i className="pt-1 mx-1 fa-solid mb-0 fa-star"></i>
              <p className="mb-0 text-sm">{item.rating}</p>
            </div>
          </div>
          <p className="text-sm mb-1 text-gray-500">{item.title}</p>
          <p className="text-sm mb-1  text-gray-500">7-12 Dec</p>
          <p className="text-sm font-medium mt-1 font-light text-gray-700">
            <span className="text-black text-lg font-semibold">
              ₹{item.price + "  "}
            </span>
            night
          </p>
        </div>
      </Link>
    );
  });
}
