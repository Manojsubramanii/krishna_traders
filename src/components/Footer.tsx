import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#183E47] text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Kailash International</h3>
            <p className="text-sm opacity-80">
              Premium agrocommodity exports with 50+ years of heritage.
              Quality, sustainability, and tradition from Tamil Nadu, India.
            </p>
            <p className="text-sm font-semibold opacity-90">
              FSSAI Lic. Number: 12422028000823
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", to: "/about" },
                { label: "Products", to: "/products" },
                { label: "Sustainability", to: "/sustainability" },
                { label: "Contact Us", to: "/request-quote" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="inline-block opacity-80 transition-all duration-200 ease-out hover:opacity-100 hover:translate-x-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
<div className="space-y-4">
  <h4 className="font-semibold text-lg">Our Products</h4>
  <ul className="space-y-2 text-sm">
    <li>
      <Link
        to="/products#rice"
        className="inline-block opacity-80 transition-all duration-200 ease-out hover:opacity-100 hover:translate-x-1"
      >
        Premium Rice Varieties
      </Link>
    </li>
    <li>
      <Link
        to="/products#dal"
        className="inline-block opacity-80 transition-all duration-200 ease-out hover:opacity-100 hover:translate-x-1"
      >
        Quality Dal Selection
      </Link>
    </li>
    <li>
      <Link
        to="/products#spices"
        className="inline-block opacity-80 transition-all duration-200 ease-out hover:opacity-100 hover:translate-x-1"
      >
        Spices & Whole Spices
      </Link>
    </li>
    <li>
      <Link
        to="/products#millets"
        className="inline-block opacity-80 transition-all duration-200 ease-out hover:opacity-100 hover:translate-x-1"
      >
        Millets & Legumes
      </Link>
    </li>
    <li>
      <Link
        to="/products#oils"
        className="inline-block opacity-80 transition-all duration-200 ease-out hover:opacity-100 hover:translate-x-1"
      >
        Edible Oils
      </Link>
    </li>
  </ul>
</div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>

            <ul className="space-y-3 text-sm">

              {/* Address → Google Maps */}
              <li className="flex items-start gap-2 group cursor-pointer">
                <MapPin
                  size={16}
                  className="mt-0.5 transition-transform duration-200 group-hover:translate-x-0.5"
                />
                <a
                  href="https://maps.app.goo.gl/vSFVDhB58SELNUX39"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-1"
                >
                  Number 4, Kondayampettai Agraharam,
                  Thiruvanaikovil, Tiruchirappalli,
                  Tamil Nadu – India (620005)
                </a>
              </li>

              {/* Phone → Call */}
              <li className="flex items-center gap-2 group cursor-pointer">
                <Phone
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
                <a
                  href="tel:+919891227010"
                  className="opacity-80 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-1"
                >
                  +91 98912 27010
                </a>
              </li>

              {/* Email → Mail */}
              <li className="flex items-center gap-2 group cursor-pointer">
                <Mail
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
                <a
                  href="mailto:apoorva@kailashinternational.com"
                  className="opacity-80 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-1"
                >
                  apoorva@kailashinternational.com
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-80">
          © {new Date().getFullYear()} Kailash International. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
