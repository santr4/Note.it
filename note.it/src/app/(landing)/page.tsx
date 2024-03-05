// import { Navbar } from "./_components/navbar";
import Heading from "./_components/heading";
import Pic from "./_components/pic";
import Footer from "@/app/(landing)/_components/footer";

const LandingPage = () => {
  return (
    <div className="h-full flex-col flex justify-center w-screen">
      <div className="flex justify-center">
        <Heading />
      </div>
      <div className="pt-10 mb-80">
        <Pic />
      </div>
      <div className="content-end mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
