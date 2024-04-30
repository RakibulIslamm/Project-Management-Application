import { FieldTimeOutlined } from "@ant-design/icons";
const Header = () => {
  let progress = Math.ceil(Math.random() * 100);
  return (
    <>
      <div
        className={`h-[5px] ${
          progress !== 100
            ? "rounded-tl-lg bg-yellow-400"
            : "rounded-t-lg bg-green-400"
        }`}
        style={{ width: `${progress}%` }}
      ></div>
      <div className="w-full flex items-center justify-between px-3 py-1">
        <p className="font-bold text-gray-700">Progress</p>
        <div className="flex items-center gap-2">
          <FieldTimeOutlined className="text-lg" />
          <p>{Math.ceil(Math.random() * 3)} month left</p>
        </div>
      </div>
    </>
  );
};

export default Header;
