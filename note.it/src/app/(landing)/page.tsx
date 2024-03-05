// import { Navbar } from "./_components/navbar";
import Heading from "./_components/heading";
import Pic from "./_components/pic";

const LandingPage = () => {
  return (
    <div className="h-full flex-col flex justify-center w-screen">
      <div className="flex justify-center">
        <Heading />
      </div>
      <div className="pt-10">
        <Pic />
      </div>
    </div>
  );
};

export default LandingPage;
