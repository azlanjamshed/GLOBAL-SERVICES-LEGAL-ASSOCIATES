import { FaInstagram, FaFacebookF, FaGoogle, FaStore } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#272626] text-gray-200 py-10 px-5 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="mb-5">
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between gap-8">
          {/* Contact Numbers */}
          <div className="flex flex-col">
            <h2 className="text-amber-400 font-bold text-lg mb-2">Contact</h2>
            <p>Faizan Sir: 8652851135 / 7718945771</p>
            <p>Office: 9867668371 / 7738717890</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-3">
              <a
                href="https://www.instagram.com/gs_and_la?igsh=dm0yNWQwcXpjMHM1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition"
              >
                <FaInstagram size={22} />
              </a>
              {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition"
              >
                <FaFacebookF size={22} />
              </a> */}
              <a
                href="https://share.google/vaxouN7WCTp0yuFOO"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition"
              >
                <FaGoogle size={22} />
              </a>
              <a
                href="https://jsdl.in/RSL-DWW1756196169"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition"
              >
                <FaStore size={22} />
              </a>
            </div>
          </div>

          {/* Office Timing */}
          <div className="flex flex-col">
            <h2 className="text-amber-400 font-bold text-lg mb-2">
              Office Timing
            </h2>
            <p>10:00 AM TO 7:00 PM</p>
            <p>Monday to Saturday</p>
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <h2 className="text-amber-400 font-bold text-lg mb-2">Address</h2>
            <p className="max-w-xl">
              SHOP NO 6, GROUND FLOOR & 1ST FLOOR, ANANT KANEKAR MARG, BANDRA
              (E) OPP. BANDRA COURT, MUMBAI - 400051
            </p>
          </div>
        </div>
      </div>

      <hr />

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-5">
        &copy; 2025 GLOBAL SERVICES & LEGAL ASSOCIATES
      </div>
    </footer>
  );
}
