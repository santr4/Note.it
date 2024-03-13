"use client";

const scrubManagerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-screen h-screen">
      <main className="flex w-screen h-screen">{children}</main>
    </div>
  );
};

export default scrubManagerLayout;
