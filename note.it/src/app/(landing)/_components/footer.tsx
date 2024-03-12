// import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import ImageAvatars from "@/components/avatar";

const Footer = () => {
  return (
    <div className="flex w-full p-2">
      <div className="flex pt-3.5">
        <ImageAvatars />
      </div>
      <div className="flex mt-3 space-x-4 justify-end ml-auto">
        <div className="flex">
          <Button size="sm">Privacy Policy</Button>
        </div>
        <div className="flex">
          <Button size="sm">Terms & Conditions</Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
