import Link from "next/link";
export default function MobileHeader(props: { page: string }) {
  if (props.page == "pdp")
    return (
      <div className="h-20 grid grid-cols-2  md:hidden pt-6 mx-2 items-center">
        <div className="flex justify-self-start">
          <Link href="../">
            <i className="fa-solid fa-chevron-left p-2"></i>
          </Link>
          <span className="font-semibold pt-1">Homes</span>
        </div>
        <div className="flex justify-self-end float-right items-center">
          <span className="material-symbols-outlined p-3 ">upload</span>
          <i className="fa-regular fa-heart p-3 pt-4"></i>
        </div>
      </div>
    );

  return (
    <div className=" mobileHeaderHome flex md:hidden fixed top-0">
      <div className="flex shadow-md items-center rounded-3xl h-12 w-72 mx-3 my-3">
        <span className="material-symbols-outlined mx-4 mt-2">search</span>
        <div>
          <p className="m-0 p-0 font-semibold text-sm">Anywhere</p>
          <span className="text-xs text-gray-500">Any week .</span>
          <span className="text-xs text-gray-500">Add Guest</span>
        </div>
      </div>
      <span className="justify-self-end ml-8 rounded-full h-12 w-12 material-symbols-outlined shadow-md border border-gray-200 mt-3 pl-2 pt-2">
        tune
      </span>
    </div>
  );
}
