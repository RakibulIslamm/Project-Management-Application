import Image from "next/image";

const Member = () => {
  return (
    <div className="flex items-center gap-3">
      <Image width={40} height={40} src={"/images/user.png"} alt="" />
      <div>
        <h4 className="font-semibold leading-3">Rakibul Islam</h4>
        <span className=" text-xs">Frontend developer</span>
      </div>
    </div>
  );
};

export default Member;
