"use client";
import Image from "next/image";
import personImage from "../public/images/person.jpg";
import Reserve from "./reservemodal";
import StayAmenities from "./stay_amenities";
import SampleBed from "../public/images/image012.webp";
export default function PlaceDetails(props: { refer: any }) {
  return (
    <div className="md:flex flex-cols">
      <div className="m-3  md:ml-20  pr-2 lg:pr-20 col-span-2 col-end-3 ">
        <div className="flex mb-8 pb-5  border-b-2 border-t-2 pt-10 md:border-t-0 md:pt-0">
          <div className="w-full ">
            <p className="font-semibold text-lg">Farm stay hosted by Manu</p>
            <span>5 guests</span>
            <span>.</span>
            <span>1 bedroom</span>
            <span>.</span>
            <span>2beds</span>
            <span>.</span>
            <span>1 bathroom</span>
          </div>
          <div className="">
            <Image
              className="h-16 w-16 rounded-full hover:cursor-pointer"
              src={personImage}
              // width={10}
              // height={10}
              alt="host"
            ></Image>
          </div>
        </div>

        <div className="border-b-2 mb-4 ">
          <div className="flex flex-cols items-start mb-3">
            <i className="fa-solid fa-key px-4 mr-3 pt-2"></i>
            <div>
              <p className="font-semibold m-0">Self check in</p>
              <p className="text-gray-500">
                You can check in with the building staff
              </p>
            </div>
          </div>

          <div className="flex flex-cols mb-3">
            <span className="material-symbols-outlined px-3 mr-3">
              meeting_room
            </span>
            <div>
              <p className="font-semibold m-0">Self check in</p>
              <p className="text-gray-500">
                You can check in with the building staff
              </p>
            </div>
          </div>
          <div className="flex flex-cols mb-5">
            <span className="material-symbols-outlined px-3 mr-3">
              calendar_month
            </span>

            <p className="font-semibold m-0">
              Free Cancellation before November
            </p>
          </div>
        </div>

        <div className="border-b-2 pb-10 mb-10 ml-4 md:ml-0">
          <p className="text-justify">
            Overlooking the Kabani river, Riverloft is aptly placed for a
            thorough nature experience. Suitable for any group of upto 5 members
            maximum. The cottage has one room with a loft, a balcony and a
            private bathroom. The lower bed can accommodate upto 3 people and
            the attic/loft bed upto 2. Children will enjoy the variety in the
            mixed farm and the thrill by the river. Could do your fishing too.
            Adults can enjoy a relaxed day on the hammock with their book and
            coffee
          </p>
          <button className=" font-md mt-5 flex ">
            <span className="underline">Show More</span>
            <span className="material-symbols-outlined ">chevron_right</span>
          </button>
        </div>

        <div className="hidden md:block border-b-2 mb-4 pb-10">
          <p className="font-semibold text-xl mt-4 pt-4 mb-5 pl-10 lg:pl-0">
            Where youll sleep
          </p>
          <div className="lg:flex">
            <Image
              src={SampleBed}
              alt="room"
              className="rounded-xl w-64 h-64 my-5 mr-6 "
            ></Image>
            <Image
              src={SampleBed}
              alt="room"
              className="rounded-xl w-64 h-64 my-5 "
            ></Image>
          </div>
          <p className="font-semibold mt-4">Bedroom</p>
          <p className="font-semibold">1king bed , 1 queen bed , 1 hammock</p>
        </div>

       
        <StayAmenities />

       
      </div>
      <div className="xl:pr-20 pr-10  " ref={props.refer}>
        <Reserve />
      </div>
    </div>
  );
}
