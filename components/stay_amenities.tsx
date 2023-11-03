import amenities from "./amenities";
export default function StayAmenities() {
  return (
    <div id="amenities" className=" mt-8 pt-4 mb-4 border-b-2 pl-8 md:pl-0 ">
      <p className="text-2xl font-semibold my-3 ">What this Place offers</p>
      <div className="grid md:grid-cols-2">
        {amenities.map((item) => {
          return (
            <div key={item.id} className="flex my-3  ">
              <span className="p-1">{item.icon}</span>
              <span className="text-black px-2">{item.name}</span>
            </div>
          );
        })}
      </div>
      <button className="w-full mb-8 mt-5 rounded-md px-4 py-2 border border-black hover:bg-gray-100">
        Show All Amenities
      </button>
    </div>
  );
}
