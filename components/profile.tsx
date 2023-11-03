export default function Profile() {
  return (
    <div
      id="profilePopup"
      className="z-[1023] rounded-2xl shadow-lg w-64 text-start absolute right-0 top-10"
    >
      <button className="text-black  text-start p-3 w-full hover:bg-gray-100 m-1">
        Sign up
      </button>
      <button className="text-gray-600  text-start p-3 border-b-2 w-full hover:bg-gray-100 m-1">
        Log in
      </button>
      <button className="text-gray-600  text-start p-3 w-full hover:bg-gray-100 m-1">
        Airbnb Your Home
      </button>
      <button className="text-gray-600  text-start p-3 w-full hover:bg-gray-100 m-1">
        Help Center
      </button>
    </div>
  );
}
