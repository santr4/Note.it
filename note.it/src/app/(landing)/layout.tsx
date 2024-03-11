import { Navbar } from "./_components/navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      {children}
    </div>
  );
};

export default LandingLayout;
