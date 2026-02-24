const Footer = () => {
  return (
    <footer className="bg-[#3E2723] text-white py-12 px-10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold italic text-[#FF7A18] mb-4">Chuks Kitchen</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-[#FF7A18]">Home</a></li>
            <li><a href="#" className="hover:text-[#FF7A18]">Menu</a></li>
            <li><a href="#" className="hover:text-[#FF7A18]">Orders</a></li>
            <li><a href="#" className="hover:text-[#FF7A18]">Account</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>+234 903 094 3445</li>
            <li>Support@truemindsltd.com</li>
          </ul>
        </div>

        {/* Socials/Misc */}
        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
             {/* Icons would go here */}
             <span className="text-sm text-gray-400">Instagram</span>
             <span className="text-sm text-gray-400">Twitter</span>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
        © 2026 Chuks Kitchen. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;