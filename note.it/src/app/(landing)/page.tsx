// import { Navbar } from "./_components/navbar";
import Heading from "./_components/heading";
import Pic from "./_components/pic";
import Footer from "@/app/(landing)/_components/footer";
import Stats from "@/app/(landing)/_components/stat";

const LandingPage = () => {
  return (
    <div className="h-full flex-col flex justify-center w-screen">
      <div className="flex justify-center">
        <Heading />
      </div>
      <div className="pt-10 mb-56">
        <Pic />
      </div>
      <p className="flex mx-auto pb-5 text-purple-950 underline decoration-sky-600 md:decoration-blue-400">
        Retention Analytics
      </p>
      <div className="flex flex-row px-96 mx-auto">
        <Stats />
      </div>
      <div className="content-end mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
