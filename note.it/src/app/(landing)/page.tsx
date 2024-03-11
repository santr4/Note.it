// import { Navbar } from "./_components/navbar";
import Heading from "./_components/heading";
import { Navbar } from "./_components/navbar";
import Pic from "./_components/pic";
import Footer from "@/app/(landing)/_components/footer";

const LandingPage = () => {
  return (
    <div className="h-full flex flex-col w-full">
      <Navbar />
      <div className="flex justify-center w-full">
        <Heading />
      </div>
      <div className="flex justify-center items-center w-full">
        <Pic />
      </div>
      <div className="h-full flex items-end justify-end">
        <div className="flex flex-col w-full  ">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
