import { Logo } from "./logo";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="md:flex">
      <Logo />
      <div className="mt-3 md:ml-auto md:justify-end justify-between gap-5 m-5 space-x-3">
        <Button>LogIn</Button>
        <Button>AboutUs</Button>
      </div>
    </div>
  );
};
