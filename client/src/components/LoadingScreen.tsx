import { FaSpinner } from "react-icons/fa";

export const LoadingScreen = () => (
  <div className="flex flex-col items-center justify-center flex-1">
    <FaSpinner className="animate-spin h-10 w-10" color="rgb(99 102 241)" />
  </div>
);
