import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import PhoneList from "./PhoneList";
import Promotion from "./Promotion";
import LaptopList from "./LaptopList";

export default function Shop() {
  return (
    <div className="bg-dark">
      <Header />
      <Banner />
      <PhoneList />
      <LaptopList />
      <Promotion />
    </div>
  );
}
