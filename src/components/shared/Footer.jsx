
const Footer = () => {
  return (
    <footer className="bg-[#0A0B13] text-white py-10 px-6 md:px-16">
      <div className="container mx-auto  flex justify-center gap-10">
        {/* Logo and Description */}
        <div className="space-y-4 w-1/4">
          <h2 className="text-2xl font-semibold text-white">
            <span className="text-blue-400">Planet</span>
            <span className="text-green-400">Restore</span>
          </h2>
          <p className="text-sm text-gray-400">
            keeps you informed on weather, natural disasters, and emergency
            alerts. Our mission is to provide timely, accurate information to
            help you stay prepared and safe. From storm warnings to earthquake
            updates, we bring you essential insights to navigate nature&apos;s
            challenges with confidence.
          </p>
        </div>

        {/* Useful Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">
            Useful Links</h3>
          <ul className="text-sm text-gray-400 space-y-5">
            <li>Disaster</li>
            <li>Relief</li>
            <li>Organization</li>
            <li>About Us</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <p className="text-sm text-gray-400 space-y-4">
            <span className="block">📍 Mirpur 10, Dhaka, Bangladesh</span>
            <span className="block">📞 +88 0176537462</span>
            <span className="block">✉️ planetrestore@gmail.com</span>
          </p>
        </div>

        {/* Subscribe */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Subscribe</h3>
          <p className="text-sm text-gray-400">
            Subscribe to our site and get updates on all the posts we include.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 rounded-l-md bg-gray-800 text-gray-300 outline-none w-7/12"
            />
            <button className="bg-white hover:bg-gray-400 text-black text-sm px-4 py-2 rounded-r-md">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-500">
        © 2024 - All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
