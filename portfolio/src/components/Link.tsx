import { LucideIcon, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default ({
  link,
  text,
  colorText,
  colorbg1,
  colorbg2,
  padding = '',
  paddingbot = '',
  color,
}: {
  link: string;
  text: string | JSX.Element;
  colorText?: string;
  colorbg1?: string;
  colorbg2?: string;
  padding?: string;
  paddingbot?: string;
  color?: string;
}) => {
  let ring = `focus:ring-${color}`;
  return (
    <div className="relative mx-1 flex flex-col">
      <Link
        to={link}
        className={` text-lg outline-none ring-0 focus:ring-2 ${color} peer flex flex-col ${padding} ${paddingbot} ${colorText}`}
      >
        {text}
      </Link>
      <span
        className={`absolute bottom-0 left-0 h-1 w-full origin-left scale-y-50 scale-x-0 ${colorbg2} duration-200 peer-hover:scale-x-100 ${colorbg1}`}
      ></span>
    </div>
  );
};