import { Link } from "react-router-dom";

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => (
  <Link to="/" className={className}>
    <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
      Michael&apos;s
    </span>
    Blog
  </Link>
);
