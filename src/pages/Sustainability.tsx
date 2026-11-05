import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Sprout, Users, CheckCircle } from "lucide-react";
import sustainableFarming from "@/assets/sustainable-farming.jpg";

const Sustainability = () => {
  const practices = [
    {
      icon: Leaf,
      title: "Organic Farming",
      description: "We source from farms that use natural fertilizers and avoid harmful pesticides, ensuring pure and healthy products.",
    },
    {
      icon: Sprout,
      title: "Traditional Methods",
      description: "Preserving centuries-old farming techniques that have sustained Thanjavur's agricultural heritage.",
    },
    {
      icon: Heart,
      title: "Fair Trade",
      description: "Direct partnerships with farmers ensuring fair prices and supporting local communities.",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Investing in farmer education, infrastructure, and sustainable livelihood programs.",
    },
  ];

  const commitments = [
    "Zero use of harmful pesticides in partner farms",
    "Water conservation through efficient irrigation",
    "Soil health management and crop rotation",
    "Biodiversity preservation in farming areas",
    "Minimal processing to retain natural nutrients",
    "Eco-friendly packaging materials",
    "Carbon-neutral transportation initiatives",
    "Support for organic farming certification",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold text-foreground animate-item">
              Our Vision
            </h1>
            <p className="text-xl text-muted-foreground animate-item">
              Our commitment to the earth, our farmers, and future generations drives every decision we make.
            </p>
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="py-0">
        <div className="container mx-auto px-4">
          <div className="relative h-96 rounded-xl overflow-hidden animate-item">
            <img
              src={sustainableFarming}
              alt="Sustainable farming practices"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-xl text-primary-foreground space-y-4">
                  <h2 className="text-3xl font-bold">
                    From Soil to Soul
                  </h2>
                  <p className="text-lg opacity-95">
                    Every grain tells a story of sustainable practices, farmer dedication, and environmental care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practices Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold text-foreground animate-item">
              Our Sustainable Practices
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-item">
              Blending traditional wisdom with modern sustainable methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practices.map((practice, index) => {
              const Icon = practice.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-item">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl">{practice.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {practice.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Thanjavur Heritage */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground text-center animate-item">
                The Rice Bowl of India
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p className="animate-item">
                  Tamil Nadu, our home, has been the heartland of Indian agriculture for thousands of years. The Cauvery delta's fertile soil, blessed with abundant water and ideal climate, has supported rice cultivation since ancient times. This region isn't just known for agriculture - it's a testament to sustainable farming passed down through generations.
                </p>
                <p className="animate-item">
                  The farmers of Tamil Nadu have perfected the art of working with nature, not against it. Traditional practices like crop rotation, natural pest management, and water conservation have been the norm here long before "sustainability" became a global concern. When we source from these farms, we're not just buying produce - we're preserving a way of life that has sustained millions for millennia.
                </p>
                <p className="animate-item">
                  Every grain of rice and dal from Kailash International carries this heritage - a blend of nature's bounty, farmer's wisdom, and centuries of perfected agricultural practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-foreground animate-item">
                Our Environmental Commitments
              </h2>
              <p className="text-xl text-muted-foreground animate-item">
                Measurable actions for a sustainable future
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg hover:bg-muted/30 transition-colors animate-item">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-[#DFDFDF] text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl text-[#183E47] font-bold animate-item">
              Quality at Every Step
            </h2>
            <p className="text-xl text-[#6A5440] opacity-95 leading-relaxed animate-item">
              From field to packaging, every stage is monitored for quality. Our extensive certifications and rigorous testing ensure that only the finest products reach your table. We believe sustainability and quality go hand in hand - one cannot exist without the other.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;