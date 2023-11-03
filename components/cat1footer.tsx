export default function Footer1() {
  return (
    <div className="lg:flex justify-between mt-5 pb-32 md:pb-0">
      <div className="lg:flex">
        <p className="lg:mb-0 mb-4 text-center ">© 2023 Airbnb, Inc </p>
        <p className="lg:mb-0 text-center mb-4">
          ·Privacy ·Terms ·Sitemap ·Company details
        </p>
      </div>
      <div className="flex justify-center xl:justify-between items-center order-first xl:order-last mb-3 lg:mb-0">
        <span className=" pt-0.5 material-symbols-outlined">language</span>
        <p className="px-3 mb-0">English(In)</p>
        <p className="px-3 mb-0">INR</p>
        <i className=" mx-3 fa-brands fa-square-facebook"></i>
        <i className=" mx-3 fa-brands fa-square-twitter"></i>
        <i className="mx-3 fa-brands fa-square-instagram"></i>
      </div>
    </div>
  );
}
