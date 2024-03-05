import Image from "next/image";

const Pic = () => {
  return (
    <div className="flex  items-center justify-evenly">
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <Image src="/pic5.png" width="300" height="300" alt="documents" />
        </div>
        <div className="w-1/2">
          <Image src="/pic4.png" width="1000" height="1000" alt="documents" />
        </div>
      </div>
    </div>
  );
};

export default Pic;
