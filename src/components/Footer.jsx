import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Footer Text */}
        <p className="text-sm text-gray-600 mb-4 sm:mb-0 text-center sm:text-left">
          Made by <span className="font-bold text-gray-800">Raj Dutta</span> with ❤️.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/rajdutta062005"
            aria-label="GitHub"
            className="text-gray-600 hover:text-gray-800 transform hover:translate-y-1 transition-transform duration-300"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rajdutta062005/"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-gray-800 transform hover:translate-y-1 transition-transform duration-300"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M19.015 3.02H4.98C3.88 3.02 3 3.9 3 5v14.03c0 1.1.88 1.98 1.98 1.98h14.035c1.1 0 1.98-.88 1.98-1.98V5c0-1.1-.88-1.98-1.98-1.98zM8.465 17.523H5.788v-7.73h2.677v7.73zm-1.335-8.81c-.886 0-1.522-.675-1.522-1.51 0-.835.647-1.51 1.556-1.51.91 0 1.523.675 1.535 1.51-.012.835-.624 1.51-1.57 1.51zm10.18 8.81h-2.678v-3.937c0-.988-.352-1.663-1.236-1.663-.674 0-1.075.455-1.25.896-.066.155-.083.37-.083.588v4.116h-2.677s.035-6.685 0-7.73h2.677v1.094c.356-.55.993-1.33 2.416-1.33 1.73 0 3.015 1.13 3.015 3.56v4.406z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/raj_rd_001/"
            aria-label="Instagram"
            className="text-gray-600 hover:text-gray-800 transform hover:translate-y-1 transition-transform duration-300"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.305.975.976 1.244 2.243 1.306 3.609.058 1.265.068 1.645.068 4.849s-.01 3.584-.068 4.849c-.062 1.366-.33 2.633-1.306 3.609-.975.975-2.242 1.243-3.608 1.305-1.265.058-1.645.069-4.85.069s-3.584-.01-4.849-.069c-1.366-.062-2.633-.33-3.609-1.305-.975-.976-1.243-2.243-1.305-3.609C2.175 15.597 2.163 15.217 2.163 12s.012-3.584.07-4.849c.062-1.366.33-2.633 1.305-3.609C4.513 2.568 5.78 2.3 7.146 2.237 8.411 2.175 8.791 2.163 12 2.163zm0-2.163C8.737 0 8.332.015 7.052.072 5.772.13 4.604.392 3.516 1.48 2.428 2.568 2.166 3.736 2.108 5.016c-.058 1.28-.072 1.686-.072 4.948s.014 3.668.072 4.948c.058 1.28.32 2.448 1.408 3.536 1.088 1.088 2.256 1.35 3.536 1.408 1.28.058 1.686.072 4.948.072s3.668-.014 4.948-.072c1.28-.058 2.448-.32 3.536-1.408 1.088-1.088 1.35-2.256 1.408-3.536.058-1.28.072-1.686.072-4.948s-.014-3.668-.072-4.948c-.058-1.28-.32-2.448-1.408-3.536C19.44.392 18.272.13 16.992.072 15.712.015 15.307 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.997 3.999 3.999 0 0 1 0 7.997zm6.406-11.845a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/RajDutta2005"
            aria-label="Twitter"
            className="text-gray-600 hover:text-gray-800 transform hover:translate-y-1 transition-transform duration-300"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 17"
            >
              <path
                fillRule="evenodd"
                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.11 4.11 0 0 0 3.72 2.771 8.17 8.17 0 0 1-5.03 1.719A8.32 8.32 0 0 1 0 14.12a11.636 11.636 0 0 0 6.29 1.853c7.544 0 11.692-6.258 11.692-11.674v-.53a8.118 8.118 0 0 0 2.82-2.099z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
