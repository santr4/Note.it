import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="flex w-full bg-[#f5f0f0] p-3">
      <Logo />
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
