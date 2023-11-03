"use client";

import Home from "@/components/home";
import Footer from "@/components/footer";
import MobileHeader from "@/components/mobileHeader";
import Header1 from "@/components/cat1header";
import Header3 from "../components/cat3header";
import Header2 from "@/components/cat2header";

export default function App() {
  return (
    <>
      <MobileHeader page="home" />
      <Header1 page="home"></Header1>
      <Header3></Header3>
      <Header2></Header2>
      <Home />
      <Footer />
    </>
  );
}
