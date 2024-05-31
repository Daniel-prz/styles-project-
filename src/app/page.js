import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col justify-between ">
      <div className="pb-12">
        {" "}
        <Header />
        <Cards />
      </div>

      <div className="flex items-center flex-col">
        <Footer />
      </div>
    </div>
  );
}
