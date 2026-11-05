import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import QuoteModal from "@/components/QuoteModal";

// ================= RICE IMAGES =================
import ir from "@/assets/IR 20.jpeg";
import karnatakaPonni from "@/assets/Karnataka Ponni Parboiled (Karnataka Ponni Puzhungal).jpeg";
import kingPonni from "@/assets/King - Ponni Parboiled (King - Ponni Puzhungal).jpeg";
import parboiledPonni from "@/assets/Parboiled Ponni (Atchaya - Ponni Puzhungal).jpeg";
import rawRice from "@/assets/Raw Rice (Apple Pachai).jpeg";

// ================= DAL IMAGES =================
import chanaDal from "@/assets/Chana Dal.jpeg";
import moongDal from "@/assets/Moong Dal.jpeg";
import toorDal from "@/assets/Toor Dal.jpeg";
import uradDal from "@/assets/Urad Dal.jpeg";

// ================= SPICES =================
import cuminImg from "@/assets/spices-cumin.jpg";
import chilliImg from "@/assets/spices-chilli.jpg";
import corianderImg from "@/assets/spices-coriander.jpg";
import pepperImg from "@/assets/spices-pepper.jpg";
import fenugreekImg from "@/assets/spices-fenugreek.jpg";
import cardamomImg from "@/assets/spices-cardamom.jpg";

// ================= MILLETS =================
import blackChickpeasImg from "@/assets/black-chickpeas.jpg";
import whiteLargeChickpeasImg from "@/assets/white-chickpeas-large.jpg";
import greenGramImg from "@/assets/green-gram.jpg";

// ================= OILS =================
import sesameOilImg from "@/assets/sesame-oil.jpg";
import groundnutOilImg from "@/assets/groundnut-oil.jpg";
import coconutOilImg from "@/assets/coconut-oil.jpg";
import sunflowerOilImg from "@/assets/sunflower-oil.jpg";

type Product = {
  name: string;
  image: string;
  description: string;
  features: string[];
};

const Products = () => {
  const location = useLocation();
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState<string | null>(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [location]);

  const openQuoteFor = (name: string) => {
    setSelectedProductName(name);
    setQuoteOpen(true);
  };

  const closeQuote = () => {
    setQuoteOpen(false);
    setSelectedProductName(null);
  };

  // ================= DATA =================

  const riceProducts: Product[] = [
    {
      name: "King Ponni Boiled Rice",
      image: kingPonni,
      description: "Premium boiled rice from Tamil Nadu.",
      features: ["Medium grain", "Boiled variety", "Rich nutrients", "Daily meals"],
    },
    {
      name: "Karnataka Ponni Boiled Rice",
      image: karnatakaPonni,
      description: "Superior Karnataka Ponni with traditional processing.",
      features: ["Long grain", "Export grade", "Authentic taste", "High quality"],
    },
    {
      name: "Raw Rice (Paccharisi)",
      image: rawRice,
      description: "Natural unprocessed rice with authentic flavor.",
      features: ["100% natural", "Rich fiber", "Versatile use", "Traditional"],
    },
    {
      name: "Parboiled Ponni Rice",
      image: parboiledPonni,
      description: "Nutrient-rich parboiled rice variety.",
      features: ["Parboiled", "Nutrient retention", "Excellent texture", "Daily use"],
    },
    {
      name: "IR Rice (Idly Rice)",
      image: ir,
      description: "Consistent quality IR variety rice.",
      features: ["Consistent supply", "Export standard", "Reliable", "Bulk orders"],
    },
  ];

  const dalProducts: Product[] = [
    {
      name: "Urad Dal",
      image: uradDal,
      description: "High-protein black gram essential for South Indian cooking.",
      features: ["High protein", "Premium grade", "Rich taste", "Daily use"],
    },
    {
      name: "Toor Dal",
      image: toorDal,
      description: "Popular pigeon pea dal with excellent flavor.",
      features: ["Nutritious", "Easy digestion", "Daily cooking", "Authentic taste"],
    },
    {
      name: "Moong Dal",
      image: moongDal,
      description: "Light lentils perfect for quick healthy meals.",
      features: ["Quick cooking", "High nutrition", "Versatile", "Balanced diet"],
    },
    {
      name: "Chana Dal",
      image: chanaDal,
      description: "Nutty flavored split chickpeas rich in protein.",
      features: ["High fiber", "Protein source", "Distinct flavor", "Multiple recipes"],
    },
  ];

  const spiceProducts: Product[] = [
    { name: "Cumin Seeds", image: cuminImg, description: "Premium aromatic cumin.", features: ["Strong aroma", "High oil content", "Uniform grading", "Export quality"] },
    { name: "Dried Red Chilli", image: chilliImg, description: "Sun-dried red chillies.", features: ["Rich color", "High pungency", "Sun dried", "Long shelf life"] },
    { name: "Coriander Seeds", image: corianderImg, description: "Fresh coriander seeds.", features: ["Mild flavor", "Clean graded", "Natural freshness", "Bulk supply"] },
    { name: "Black Pepper", image: pepperImg, description: "Bold whole peppercorns.", features: ["High pungency", "Uniform size", "Premium quality", "Export grade"] },
    { name: "Fenugreek Seeds", image: fenugreekImg, description: "Warm aromatic seeds.", features: ["Uniform seeds", "Strong aroma", "Traditional use", "Premium"] },
    { name: "Cardamom", image: cardamomImg, description: "Aromatic green cardamom.", features: ["Bold aroma", "Superior pods", "High oil content", "Gourmet grade"] },
  ];

  const milletProducts: Product[] = [
    { name: "Black Chickpeas", image: blackChickpeasImg, description: "Protein-rich black chana.", features: ["High protein", "Uniform size", "Premium cleaning", "Bulk export"] },
    { name: "White Chickpeas", image: whiteLargeChickpeasImg, description: "Large creamy chickpeas.", features: ["Bold size", "High protein", "Creamy texture", "Premium grade"] },
    { name: "Green Gram", image: greenGramImg, description: "Nutritious whole green gram.", features: ["Rich nutrition", "Quick cooking", "Wellness food", "Export standard"] },
  ];

  const oilProducts: Product[] = [
    { name: "Sesame Oil", image: sesameOilImg, description: "Cold-pressed sesame oil.", features: ["High antioxidants", "Traditional extraction", "Deep aroma", "Premium"] },
    { name: "Groundnut Oil", image: groundnutOilImg, description: "Mild oil ideal for frying.", features: ["High smoke point", "Stable cooking", "Natural purity", "Long shelf life"] },
    { name: "Coconut Oil", image: coconutOilImg, description: "Pure coconut oil.", features: ["Natural extraction", "Rich aroma", "Balanced nutrition", "Multipurpose"] },
    { name: "Sunflower Oil", image: sunflowerOilImg, description: "Light refined oil.", features: ["Vitamin E rich", "Neutral taste", "Even frying", "Commercial use"] },
  ];

  const renderSection = (id: string, title: string, products: Product[], bg?: string) => (
    <section id={id} className={`py-20 scroll-mt-24 ${bg || ""}`}>
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold animate-item">{title}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all group animate-item">
              <div className="h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-xl">{product.name}</h3>
                  <p className="text-[#183E47]">{product.description}</p>
                </div>

                <div>
                  <p className="font-semibold text-sm text-[#183E47]">Key Features:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} className="text-xs bg-[#D6CFC2] text-[#3B3225] hover:bg-[#D6CFC2]">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  size="sm"
                  className="w-full bg-[#6A5440] text-white hover:bg-[#183E47]"
                  onClick={() => openQuoteFor(product.name)}
                >
                  Get a Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold animate-item">Our Premium Products</h1>
          <p className="text-xl text-muted-foreground mt-4 animate-item">
            Authentic agricultural exports from India
          </p>
        </div>
      </section>

      {renderSection("rice", "Premium Rice", riceProducts)}
      {renderSection("dal", "Quality Dal", dalProducts, "bg-muted/30")}
      {renderSection("spices", "Spices & Whole Spices", spiceProducts)}
      {renderSection("millets", "Millets & Legumes", milletProducts, "bg-muted/30")}
      {renderSection("oils", "Edible Oils", oilProducts)}

      <QuoteModal
        open={quoteOpen}
        onClose={closeQuote}
        defaultProduct={selectedProductName}
      />
    </div>
  );
};

export default Products;