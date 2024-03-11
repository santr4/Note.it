import Image from "next/image";

const Pic = () => {
  return (
    <div className="flex items-center justify-evenly">
      <div className="flex justify-between items-center pt-10">
        <Image src="/documents.png" width="500" height="500" alt="documents" />
      </div>
    </div>
  );
};

export default Pic;
