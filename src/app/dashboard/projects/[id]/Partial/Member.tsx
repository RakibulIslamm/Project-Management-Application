import { User } from "@/interface/user";
import Image from "next/image";

const Member = ({ member }: { member: User }) => {
  return (
    <div className="flex items-center gap-3">
      <Image width={40} height={40} src={"/images/user.png"} alt="" />
      <div>
        <h4 className="font-semibold leading-3">{member?.name}</h4>
        <span className=" text-xs">Frontend developer</span>
      </div>
    </div>
  );
};

export default Member;
