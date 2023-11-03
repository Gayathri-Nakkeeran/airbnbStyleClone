import Slider from "react-slick";
export default function Header2() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div
      id="header2"
      className=" sticky top-16 md:top-20 flex items-center h-20  md:h-24 space-x-5  bg-white pb-3 md:pb-0"
    >
      <div className="flex items-center    ml:5 md:ml-16 md:mr-3 xl:mr-4  ">
        <div id="slider" className="md:ml-4 ">
          <Slider className=" pl-8  " {...settings}>
            <div className="flex flex-col   text-gray-400 hover:text-black w-10">
              <i className=" pl-3 self-center fas fa-igloo h-4 w-4 hover:text-black"></i>

              <p className="text-xs font- px-0">Farmsey</p>
            </div>

            <div className="flex flex-col items-center text-gray-400 hover:text-black ">
              <i className=" pl-3 fas fa-igloo h-4 w-4 hover:text-black"></i>

              <p className="text-xs font-normal">Farmsey</p>
            </div>
            <div className="flex flex-col items-center text-gray-400 hover:text-black hover:border-b-2  active:border-black  ">
              <i className="fas fa-igloo h-4 w-4 hover:text-black"></i>
              <p className="text-xs font-normal px-0">Farmsey</p>
            </div>

            <div className="flex flex-col items-center text-gray-400 hover:text-black ">
              <i className=" pl-3 fas fa-igloo h-4 w-4 hover:text-black"></i>
              <p className="text-xs font-normal px-0">Farmsey</p>
            </div>
            <div className="flex flex-col items-center text-gray-400 hover:text-black  hidden xl:block">
              <i className=" pl-3 fas fa-igloo h-4 w-4 hover:text-black"></i>
              <p className="text-xs font-normal px-0">Farmsey</p>
            </div>
            <div className="flex flex-col items-center text-gray-400 hover:text-black   hidden lg:block">
              <i className=" pl-3 fas fa-igloo h-4 w-4 hover:text-black"></i>
              <p className="text-xs font-normal px-0">Farmsey</p>
            </div>
            <div className="flex flex-col items-center text-gray-400 hover:text-black ">
              <i className=" pl-3 fas fa-igloo h-4 w-4 hover:text-black"></i>
              <p className="text-xs font-normal px-0">Farmsey</p>
            </div>
            <div className="flex flex-col items-center text-gray-400 hover:text-black ">
              <i className=" pl-3 fas fa-igloo h-4 w-4 hover:text-black"></i>
              <p className="text-xs font-normal px-0 ">Farmsey</p>
            </div>
            <div className="flex flex-col items-center text-gray-400 hover:text-black ">
              <i className=" pl-3 fas fa-igloo h-4 w-4 hover:text-black"></i>
              <p className="text-xs font-normal px-0">Farmsey</p>
            </div>
            <div className="flex flex-col items-center text-gray-400 hover:text-black  hidden lg:block">
              <i className="pl-3 fas fa-igloo h-4 w-4 hover:text-black"></i>
              <p className="text-xs font-normal px-0">Farmsey</p>
            </div>

            <div className="flex flex-col items-center text-gray-400 hover:text-black  ">
              <i className="pl-3 fas fa-igloo h-4 w-4 hover:text-black"></i>

              <p className="text-xs font-normal px-0">Farmsey</p>
            </div>
          </Slider>
        </div>
      </div>

      <div className="hidden md:flex justify-around items-center rounded-xl shadow-md h-12 w-24 border ">
        <span className="materials-icon material-symbols-outlined pl-2">
          sync_alt
        </span>
        <p className="text-xs font-md pr-2">Filters</p>
      </div>

      <div className="hidden lg:flex items-center border rounded-xl h-12 px-2 shadow-md ">
        <p className="text-xs font-md">Display total before taxes</p>

        <button>
          <span className="material-symbols-outlined m-2">toggle_off</span>
        </button>
      </div>
    </div>
  );
}
