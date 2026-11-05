import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLocation } from "react-router-dom";
import QuoteModal from "@/components/QuoteModal";

const RequestQuote = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const location = useLocation();

  // Auto-open quote modal if direct link
  useEffect(() => {
    if (location.hash === "#request-quote") {
      setQuoteOpen(true);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold text-foreground animate-item">Contact Us</h1>
            <p className="text-xl text-muted-foreground animate-item">
              Request quotes or get support. Fill the form and get response within 24 hours.
            </p>
            <Button 
              size="lg" 
              onClick={() => setQuoteOpen(true)}
              className="bg-[#6A5440] hover:bg-[#183E47] text-white font-semibold px-8 py-6 text-lg animate-item"
            >
              Send Quote Request
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow animate-item">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold">Call Us or WhatsApp</h3>
                <a 
                  href="tel:+919891227010" 
                  className="text-sm  text-[#6A5440] text-primary hover:underline block"
                >
                  +91 98912 27010
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-item">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold">Email Us</h3>
                <a 
                  href="mailto:apoorva@kailashinternational.com" 
                  className="text-sm text-[#6A5440] text-primary hover:underline block"
                >
                  apoorva@kailashinternational.com
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-item">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold">Visit Us</h3>
                <a 
                  href="https://maps.app.goo.gl/vSFVDhB58SELNUX39" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary text-[#6A5440] hover:underline block"
                >
                  Number 4, Kondayampettai Agraharam, Thiruvanaikovil,<br/>
                  Tiruchirappalli, Tamil Nadu - India (620005)
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold text-foreground animate-item">Our Global Reach</h2>
            <p className="text-muted-foreground animate-item">
              Serving customers across India and 5+ countries worldwide
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="animate-item">
              <CardContent className="p-12">
                <div className="text-center space-y-4">
                  <MapPin className="w-16 h-16 text-primary mx-auto" />
                  <h3 className="text-xl font-bold">Export Destinations</h3>
                  <p className="text-muted-foreground max-w-xl mx-auto">
                    From our base in Tamil Nadu - India, we export to North America,
                    Europe, Middle East, Southeast Asia, and beyond.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal 
        open={quoteOpen} 
        onClose={() => setQuoteOpen(false)} 
        defaultProduct={null}
      />
    </div>
  );
};

export default RequestQuote;