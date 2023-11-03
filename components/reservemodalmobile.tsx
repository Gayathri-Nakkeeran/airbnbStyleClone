import Link from "next/link";
export default function ReserveModalMobile() {
  return (
    <div className="md:hidden p-2 px-3 w-screen bg-white  fixed -bottom-0 ">
      <div className="flex flex-col float-left mt-4">
        <span className="font-semibold text-sm">
          <span className="font-bold text-base">$23677 </span>night
        </span>
        <Link href="" className="underline font-semibold text-xs">
          13-18 Nov
        </Link>
      </div>
      <button className=" float-right font-semibold mt-4 mb-4 pt-3 pb-3  bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg   ml-8 bg-red-600 px-10">
        Reserve
      </button>
    </div>
  );
}
