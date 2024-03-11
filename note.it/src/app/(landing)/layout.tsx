import { Navbar } from "./_components/navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="h-screen w-screen">{children}</div>;
};

export default LandingLayout;
