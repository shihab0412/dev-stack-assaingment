
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="mt-12 w-full bg-white text-gray-600 sm:mt-16"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">

        {/* Footer Main */}
        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4">

          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 text-sm text-white">
                DS
              </span>
              <span>
                Dev <span className="text-pink-500">Stack</span>
              </span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-500">
              Curated tools, technologies, and resources
              for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center justify-center gap-6">
              <a
                href="https://github.com"
                aria-label="GitHub"
                className="text-xl transition hover:text-pink-500"
              >
                <FaGithub />
              </a>

              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-xl transition hover:text-pink-500"
              >
                <FaTwitter />
              </a>

              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="text-xl transition hover:text-pink-500"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900">
              Product
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <p>
                <a href="#technologies" className="hover:text-pink-500">
                  Technologies
                </a>
              </p>
              <p>
                <a href="#projects" className="hover:text-pink-500">
                  Projects
                </a>
              </p>
              <p>
                <a href="#technologies" className="hover:text-pink-500">
                  Features
                </a>
              </p>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900">
              Company
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <p>
                <a href="#about" className="hover:text-pink-500">
                  About
                </a>
              </p>
              <p>
                <a href="#contact" className="hover:text-pink-500">
                  Contact
                </a>
              </p>
              <p>
                <a href="#about" className="hover:text-pink-500">
                  Careers
                </a>
              </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900">
              Legal
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <p>
                <a href="#privacy" className="hover:text-pink-500">
                  Privacy
                </a>
              </p>
              <p>
                <a href="#terms" className="hover:text-pink-500">
                  Terms
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t border-gray-200 pt-6 sm:mt-10">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-gray-400 sm:flex-row sm:text-sm">
            <p>
              © 2026 Dev Stack. All rights reserved.
            </p>

            <div className="flex justify-center gap-5">
              <a href="#privacy" className="hover:text-pink-500">
                Privacy
              </a>
              <a href="#terms" className="hover:text-pink-500">
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
