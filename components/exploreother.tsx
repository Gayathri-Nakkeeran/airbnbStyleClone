import Link from "next/link";
export default function ExploreOthers() {
  return (
    <div className="m-12">
      <p className="text-2xl font-semibold">
        Explore other options in and around Puducherry
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 mt-10">
      
        <div className="pb-5">
          <Link href="">
            <p className="text-sm font-semibold"> ECR Beach</p>
            <p className="text-sm   text-gray-500">Holiday rentals</p>
          </Link>
        </div>
        <div className="pb-5">
          <Link href="">
            <p className="text-sm font-semibold"> Tiruvannamalai</p>
            <p className="text-sm   text-gray-500">Holiday rentals</p>
          </Link>
        </div>
        <div className="pb-5">
          <Link href="">
            <p className="text-sm font-semibold"> Mahabalipuram</p>
            <p className="text-sm   text-gray-500">Holiday rentals</p>
          </Link>
        </div>
       
        <div className="pb-5">
          <Link href="">
            <p className="text-sm font-semibold"> Yelagiri</p>
            <p className="text-sm   text-gray-500">Holiday rentals</p>
          </Link>
        </div>

        <div className="pb-5">
          <Link href="">
            <p className="text-sm font-semibold"> Vellore</p>
            <p className="text-sm   text-gray-500">Holiday rentals</p>
          </Link>
        </div>

        <div className="pb-5">
          <Link href="">
            <p className="text-sm font-semibold"> Uthandi Beach</p>
            <p className="text-sm   text-gray-500">Holiday rentals</p>
          </Link>
        </div>
        
        <div className="pb-5">
          <Link href="">
            <p className="text-sm font-semibold">Kumbakonam</p>
            <p className="text-sm   text-gray-500">Holiday rentals</p>
          </Link>
        </div>

        <div className="pb-5">
          <Link href="">
            <p className="text-sm font-semibold"> Thanjavur</p>
            <p className="text-sm   text-gray-500">Holiday rentals</p>
          </Link>
        </div>

        <div className="pb-5">
          <Link href="">
            <p className="text-sm font-semibold"> Auroville Beach</p>
            <p className="text-sm   text-gray-500">Holiday rentals</p>
          </Link>
        </div>
      </div>
     
    </div>
  );
}
