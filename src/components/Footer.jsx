const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-semibold mb-2">RealEstatePro</h4>
          <p>Helping you find your dream home.</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Quick Links</h5>
          <ul className="space-y-1 text-sm">
            {["Home", "About", "Properties", "Contact"].map(link => (
              <li key={link}><a href="#" className="hover:underline">{link}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Contact</h5>
          <p>Email: contact@realestatepro.pk</p>
          <p>Phone: +92-300-1234567</p>
        </div>
        <div>
          <h5 className="font-semibold mb-2">Newsletter</h5>
          <input type="email" placeholder="Your email" className="w-full px-3 py-2 rounded mb-2 text-black" />
          <button className="bg-blue-600 px-4 py-2 rounded text-white w-full">Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
