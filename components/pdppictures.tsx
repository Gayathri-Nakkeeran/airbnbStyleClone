import sampleImage1 from "../public/images/image011.webp";
import sampleImage2 from "../public/images/image012.webp";
import sampleImage3 from "../public/images/image013.webp";
import sampleImage4 from "../public/images/image014.webp";
import sampleImage5 from "../public/images/image015.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
export default function pdpPicturesGrid() {
  const settings = {
   
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    swipe: true,
    touchMove: true,
  };
  return (
    <>
      <div className="md:grid grid-cols-2 border rounded-full mx-20 m-3 gap-2 hidden  ">
       
        <div>
          <Image
            className="object-cover h-full w-auto"
            src={sampleImage1}
            alt="demo1"
          ></Image>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Image
            className="h-52 object-cover "
            src={sampleImage2}
            alt="demo1"
          ></Image>

          <Image
            className="h-52 object-cover "
            src={sampleImage3}
            alt="demo1"
          ></Image>

          <Image
            className="h-48 object-cover"
            src={sampleImage4}
            alt="demo1"
          ></Image>

          <div>
            <Image
              className="object-cover max-h-48"
              src={sampleImage5}
              alt="demo1"
            ></Image>
          </div>
        </div>
      </div>

      <div className="mobilePDPSlider md:hidden">
        <Slider {...settings}>
          <Image
            className="object-cover h-64 w-auto"
            src={sampleImage1}
            alt="demo1"
          ></Image>
          <Image
            className="h-64 w-auto  object-cover "
            src={sampleImage2}
            alt="demo1"
          ></Image>

          <Image
            className="h-64 w-auto object-cover "
            src={sampleImage3}
            alt="demo1"
          ></Image>

          <Image
            className="h-64 w-auto  object-cover"
            src={sampleImage4}
            alt="demo1"
          ></Image>
          <Image
            className="object-fit h-64 w-auto "
            src={sampleImage5}
            alt="demo1"
          ></Image>
        </Slider>
      </div>
    </>
  );
}
