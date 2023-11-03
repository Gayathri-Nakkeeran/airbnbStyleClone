"use client";
import Header1 from "@/components/cat1header";
import Footer1 from "@/components/cat1footer";
import Footer2 from "@/components/cat2footer";
import Pdptitle from "@/components/pdptitlecard";
import PdpPicturesGrid from "@/components/pdppictures";
import PdpSticky from "@/components/pdpSticky";
import PlaceDetails from "@/components/pdpplace_details";
import OtherStays from "@/components/otherstays";
import ExploreOthers from "@/components/exploreother";
import { useEffect, useRef } from "react";
import MobileHeader from "@/components/mobileHeader";
import ReserveModalMobile from "@/components/reservemodalmobile";
export default function PDPPage() {
  const ref = useRef(null);
  const refPrice = useRef(null);
  const reserve = useRef(null);
  useEffect(() => {
    let navbar: any = ref.current;
    let sticky = navbar?.offsetTop;
    let reserveModal: any = refPrice.current;
    let reserveButtonOnSticky: any = reserve.current;
    console.log(reserveModal, "reserveModal");
    window.onscroll = function () {
      myFunction();
    };

    function myFunction() {
      if (
        navbar?.classList.contains("hidden") &&
        window.scrollY >= sticky + 687
      ) {
        navbar?.classList.remove("hidden");
      }

      if (window.scrollY < sticky + 687) {
        if (navbar.classList.contains("hidden") == false)
          navbar?.classList.add("hidden");
      }

      if (
        window.scrollY >=
        reserveModal?.offsetTop + reserveModal.scrollHeight - 350
      ) {
        reserveButtonOnSticky?.classList.remove("hidden");
      } else {
        reserveButtonOnSticky?.classList.add("hidden");
      }
    }
  }, []);

  return (
    <>
      <div className="hidden md:block">
        <Header1 page="pdp" />
      </div>
      <MobileHeader page="pdp" />
      <div className="flex flex-col mb:block">
        <div className="order-2 md:order-none">
          <Pdptitle />
        </div>
        <div className="order-1 md:order-none">
          <PdpPicturesGrid />
        </div>
      </div>

      <div ref={ref} id="pdpSticky" className="hidden sticky top-0 ">
        <PdpSticky reserve={reserve} />
      </div>
      <div>
        <PlaceDetails refer={refPrice} />
      </div>
      <ExploreOthers />
      <OtherStays />

      <Footer2 />
      <Footer1 />

      <ReserveModalMobile />
    </>
  );
}
