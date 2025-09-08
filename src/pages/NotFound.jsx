import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#272626] text-gray-200 px-6 text-center">
      {/* Big Error Number */}
      <h1 className="text-8xl md:text-9xl font-extrabold text-amber-400">
        404
      </h1>

      {/* Message */}
      <h2 className="mt-4 text-2xl md:text-3xl font-bold">
        Oops! Page Not Found
      </h2>
      <p className="mt-2 text-gray-400 max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="mt-6 inline-block bg-amber-400 text-[#272626] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-amber-300 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
