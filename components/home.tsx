import Card from "./card";
export default function Home() {
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-10">
        <Card />
      </div>

      <div className="text-center m-3 pt-3 pb-5">
        <p className="font-semibold text-lg">Continue exploring Farms</p>
        <button className="bg-black text-white px-6 py-2.5 font-semibold rounded-md">
          Show More
        </button>
      </div>
    </div>
  );
}
