import { Navbar } from "./_components/navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-orange-5">
      <Navbar />
      <main className="h-full mt-20">{children}</main>
    </div>
  );
};

export default LandingLayout;
