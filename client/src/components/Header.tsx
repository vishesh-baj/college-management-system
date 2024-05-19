import { IHeader } from "../types";
const Header = (props: IHeader) => {
  const { title } = props;

  return (
    <div className="bg-base-300 rounded-lg p-32 relative">
      <div className="relative z-10">
        <h1 className="text-2xl">{title}</h1>
      </div>
    </div>
  );
};

export default Header;
