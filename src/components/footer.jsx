import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold">
              Dev Stack
            </h2>

            <p className="mt-3 max-w-xs text-sm leading-6 text-gray-400">
             Curated tools,technologies,and resources for developers building modern software.
            </p>

          
            <div className="mt-5 flex gap-4">

              <a
                href="#"
                className="text-gray-400 transition hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="text-gray-400 transition hover:text-white"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="text-gray-400 transition hover:text-white"
              >
                <FaLinkedin />
              </a>

            </div>
          </div>

        
          <div>
            <h3 className="font-semibold">
              Product
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p>Technologies</p>
              <p>Projects</p>
              <p>Features</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">
              Company
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p>About</p>
              <p>Contact</p>
              <p>Careers</p>
            </div>
          </div>

        
          <div>
            <h3 className="font-semibold">
              Legal
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p>Privacy</p>
              <p>Terms</p>
            </div>
          </div>

        </div>

  
        <div className="mt-10 border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-sm text-gray-500 md:flex-row">

            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex gap-5">
              <a
                href="#"
                className="hover:text-white"
              >
                Privacy
              </a>

              <a
                href="#"
                className="hover:text-white"
              >
                Terms
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;