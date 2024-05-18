import { IHeader } from "../types";

const Header = (props: IHeader) => {
  const { title } = props;

  return (
    <div className="bg-base-300 rounded-lg p-4">
      <div className="text-sm breadcrumbs">{title}</div>
    </div>
  );
};

export default Header;
