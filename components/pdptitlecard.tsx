import Link from "next/link";
export default function Pdptitle() {
  return (
    <div id="photos" className="md:border-t-2 text-black ">
      <p className="mx-3 md:mx-20 mt-4 p-0 mb-0 font-semibold text-2xl md:text-3xl">
        Riverloft Kabani, Wayanad, Kerala
      </p>
      <div className="flex mx-10 items-center h-12 text-sm">
        <div className="px-5 mx-5  items-center w-full">
          <span className="hidden md:inline">
            <i className="hidden md:inline fa-solid fa-star"></i>
          </span>
          <span className="hidden md:inline">4.89</span>
          <span className="hidden md:inline px-2">. </span>
          <Link className="underline text-black pr-5 md:pr-0" href="">
            55 Reviews
          </Link>
          <span className="hidden md:inline px-2">.</span>
          <span className="hidden md:inline">
            {" "}
            <i className="hidden fa-brands fa-black-tie md:inline px-2"></i>
          </span>
          {/* <span className="material-symbols-outlined">girl</span> */}
          <span className="hidden md:inline">Superhost</span>
          <span className="hidden md:inline px-2">.</span>
          <Link
            className="underline font-semibold text-sm ine text-black"
            href=""
          >
            TamilNadu,India
          </Link>
        </div>
        <div className="hidden md:flex mr-10">
          <div className="flex p-2 items-center hover:bg-gray-100 hover:cursor-pointer  rounded-xl">
            <span className="  material-symbols-outlined">ios_share</span>
            <Link
              className="text-black underline font-semibold text-sm px-2"
              href=""
            >
              <span>Share</span>
            </Link>
          </div>

          <div className="flex items-center p-2 hover:bg-gray-100 hover:cursor-pointer  rounded-xl">
            <span className="material-symbols-outlined">favorite</span>
            <Link
              className=" text-black underline font-semibold text-sm px-2"
              href=""
            >
              <span>Save</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
