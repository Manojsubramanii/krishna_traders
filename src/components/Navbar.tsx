import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpg";
import QuoteModal from "@/components/QuoteModal";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Our Vision", path: "/sustainability" },
    { name: "Contact Us", path: "/request-quote" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#183E47] border-b border-[#183E47]/20">
        <div className="container mx-auto px-4 py-2 md:py-0">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 animate-item">
              <img
                src={logo}
                alt="Kailash International Logo"
                className="h-10 w-10 md:h-20 md:w-20 object-contain"
              />
              <div className="text-base md:text-3xl font-bold text-[#FFFFFF]">
                Kailash International
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition-colors hover:text-[#FFFFFF] animate-item ${
                    isActive(link.path)
                      ? "text-[#FFFFFF] font-semibold"
                      : "text-[#FFFFFF]/70"
                  }`}
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                size="sm"
                className="bg-[#6A5440] text-white hover:bg-[#5F7377]/90 animate-item"
                style={{ animationDelay: `${0.1 + navLinks.length * 0.1}s` }}
                onClick={() => setQuoteOpen(true)}
              >
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#FFFFFF]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 pb-3 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 transition-colors hover:text-[#FFFFFF] ${
                    isActive(link.path)
                      ? "text-[#FFFFFF] font-semibold"
                      : "text-[#FFFFFF]/70"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                size="sm"
                className="w-full bg-[#6A5440] hover:bg-[#5F7377]/90 text-white"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setQuoteOpen(true);
                }}
              >
                Get a Quote
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Quote Request Modal */}
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
};

export default Navbar;