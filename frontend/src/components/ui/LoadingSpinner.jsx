import { Loader2 } from "lucide-react";

const LoadingSpinner = ({ text = "Loading..." }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50">
      <div className="relative">
        {/* Outer Ring */}
        <div className="w-20 h-20 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>

        {/* Animated Spinner */}
        <Loader2 className="absolute inset-0 m-auto w-10 h-10 text-blue-600 animate-spin" />

        {/* Pulse Effect */}
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-ping opacity-20"></div>
      </div>

      <p className="mt-6 text-lg font-semibold text-gray-700 dark:text-gray-300 animate-pulse">
        {text}
      </p>
    </div>
  );
};

export default LoadingSpinner;