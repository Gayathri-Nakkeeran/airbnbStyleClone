export default function cat3Header() {
  return (
    <div
      id="header3"
      className=" bg-white  hidden  md:mx-10 lg:mx-72 mb-1 mt-1 lg:flex  items-center border rounded-full shadow-md h-16 hover:shadow-lg"
    >
      <div className="w-64 m-3 mr-20  border-r-2 hover:bg-gray-100">
        <button className=" text-left text-xs font-md">Where</button>
        <p className="text-xs text-gray-400 m-0 p-0">Search Destinations</p>
      </div>
      <div className="m-3 w-64 mr-20  border-r-2 hover:bg-gray-100">
        <button className="text-left text-xs font-md ">Date</button>
        <p className="text-xs text-gray-400 m-0 p-0">Add Dates</p>
      </div>
      <div className="  grid grid-cols-2  w-64 hover:bg-gray-100 ">
        <div>
          <button className="text-left text-xs font-md  ">Who</button>
          <p className="self-start text-xs text-gray-400 m-0 p-0">Add Guests</p>
        </div>
        <i className="w-12 item-center justify-self-end mr-2 pt-3 pl-4 h-12 fa-solid fa-magnifying-glass bg-red-600 text-white rounded-full"></i>
      </div>
    </div>
  );
}
