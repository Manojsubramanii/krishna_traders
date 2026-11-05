import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Leaf, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import QuoteModal from "@/components/QuoteModal";
import heroImage from "@/assets/hero-rice-fields.jpg";
import riceProduct from "@/assets/rice-product.jpg";
import dalVarieties from "@/assets/dal-varieties.jpg";
import cuminImg from "@/assets/spices-cumin.jpg";
import blackChickpeasImg from "@/assets/black-chickpeas.jpg";
import sesameOilImg from "@/assets/sesame-oil.jpg";

const Home = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const features = [
    {
      icon: Award,
      title: "50+ Years Legacy",
      description: "Half a century of excellence in agrocommodity exports",
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Organic and eco-friendly farming from Thanjavur",
    },
    {
      icon: CheckCircle,
      title: "Premium Quality",
      description: "FSSAI certified with rigorous quality control",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving B2B and B2C markets worldwide",
    },
  ];

  const stats = [
    { value: "50+", label: "Years of Excellence" },
    { value: "20+", label: "Premium Products" },
    { value: "5+", label: "Countries Served" },
    { value: "10K+", label: "Happy Clients" },
  ];

  const productCards = [
    {
      image: riceProduct,
      alt: "Premium rice varieties",
      title: "Premium Rice",
      description: "Ponni, Basmati, Karnataka Steamed & Raw, and CR-Idly Rice",
      link: "/products#rice",
      label: "View Rice Products",
    },
    {
      image: dalVarieties,
      alt: "Dal varieties",
      title: "Quality Dal",
      description: "Urad, Toor, Moong, and Chana dal sourced from the best farms",
      link: "/products#dal",
      label: "View Dal Products",
    },
    {
      image: cuminImg,
      alt: "Spices and whole spices",
      title: "Spices & Whole Spices",
      description: "Cumin, Red Chilli, Coriander, Black Pepper, Fenugreek & Cardamom",
      link: "/products#spices",
      label: "View Spice Products",
    },
    {
      image: blackChickpeasImg,
      alt: "Millets and legumes",
      title: "Millets & Legumes",
      description: "Black Chickpeas, White Chickpeas, and Green Gram from premium farms",
      link: "/products#millets",
      label: "View Millets & Legumes",
    },
    {
      image: sesameOilImg,
      alt: "Edible oils",
      title: "Edible Oils",
      description: "Sesame, Groundnut, Coconut, and Sunflower oils cold-pressed for purity",
      link: "/products#oils",
      label: "View Edible Oils",
    },
  ];

  const renderCard = (card: typeof productCards[0], index: number) => (
    <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border-[#E6DFD0] animate-item">
      <img src={card.image} alt={card.alt} className="w-full h-64 object-cover" />
      <CardContent className="p-6 text-center">
        <h3 className="text-2xl font-bold text-[#3B3225] mb-3">{card.title}</h3>
        <p className="text-[#6B6456] mb-6">{card.description}</p>
        <Link to={card.link}>
          <Button className="w-full border border-[#6A5440] bg-transparent text-[#5F8F83] hover:bg-[#6A5440] hover:text-white">
            {card.label}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Rice fields in Thanjavur"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-[#F5F1E8] space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-item">
              Premium Agrocommodity Exports Since 1970
            </h1>
            <p className="text-xl opacity-95 animate-item">
              Sourced from India's agricultural heartlands.
              Committed to quality, reliability,
              and sustainable farming.
            </p>
            <div className="flex flex-wrap gap-4 animate-item">
              <Link to="/products">
                <Button size="lg" className="font-semibold bg-[#6A5440] text-white hover:bg-[#183E47]/90">
                  Explore Products
                </Button>
              </Link>
              <Button
                size="lg"
                className="bg-[#6A5440] text-white hover:bg-[#183E47]/90 font-semibold"
                onClick={() => setQuoteOpen(true)}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F0EDE5]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2 animate-item">
                <div className="text-4xl md:text-5xl font-bold text-[#183E47]">
                  {stat.value}
                </div>
                <div className="text-[#183E47] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold text-[#183E47] animate-item">
              Why Choose Kailash International?
            </h2>
            <p className="text-xl text-[#6B6456] max-w-2xl mx-auto animate-item">
              Decades of expertise, commitment to quality, and sustainable practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow border-[#E6DFD0] animate-item">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-[#E8F2F0] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#5F8F83]" />
                    </div>
                    <h3 className="font-bold text-lg text-[#3B3225]">{feature.title}</h3>
                    <p className="text-[#6B6456]">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-[#F0EDE5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold text-[#3B3225] animate-item">
              Our Premium Products
            </h2>
            <p className="text-xl text-[#6B6456] animate-item">
              Handpicked varieties from the finest farms
            </p>
          </div>

          {/* Top row - 3 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {productCards.slice(0, 3).map((card, index) => renderCard(card, index))}
          </div>

          {/* Bottom row - 2 cards centered */}
          <div className="flex justify-center gap-8 mt-8 max-w-6xl mx-auto flex-wrap">
            {productCards.slice(3).map((card, index) => (
              <div key={index} className="w-full md:w-[calc(33.333%-1rem)]">
                {renderCard(card, index + 3)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#DFDFDF]">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-4xl font-bold text-[#183E47] animate-item">
            Ready to Experience Premium Quality?
          </h2>
          <p className="text-xl text-[#6B6456] opacity-95 max-w-2xl mx-auto animate-item">
            Join thousands of satisfied customers worldwide. Get in touch for
            bulk orders and custom requirements.
          </p>
          <Button
            size="lg"
            className="font-semibold bg-[#6A5440] text-white hover:bg-[#183E47] animate-item"
            onClick={() => setQuoteOpen(true)}
          >
            Get a Quote
          </Button>
        </div>
      </section>

      <QuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </div>
  );
};

export default Home;