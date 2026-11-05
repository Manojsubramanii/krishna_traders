import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award } from "lucide-react";
import teamVenkadaraman from "@/assets/team-venkadaraman.jpg";
import teamRamakrishnan from "@/assets/team-ramakrishnan.jpg";
import teamApoorva from "@/assets/team-apoorva.jpg";
import logoFssai from "@/assets/logo-fssai.png";
import logoIso from "@/assets/logo-iso.png";
import logoHalal from "@/assets/logo-halal.png";
import logoHaccp from "@/assets/logo-haccp.png";
import logoApeda from "@/assets/logo-apeda.png";
import logoSpiceboard from "@/assets/logo-spiceboard.png";
import logoExport from "@/assets/logo-export.png";
import { useState } from "react";
import QuoteModal from "@/components/QuoteModal";


const About = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const team = [
    {
      name: "Mr. Venkadaraman",
      role: "Founder",
      description: "Visionary founder who established Kailash International over 50 years ago with a commitment to quality and tradition.",
      image: teamVenkadaraman,
    },
    {
      name: "Mr. Ramakrishnan V",
      role: "Managing Director",
      description: "Leading the company with innovation while preserving our heritage and values of excellence.",
      image: teamRamakrishnan,
    },
    {
      name: "Ms. Apoorva Ramakrishnan",
      role: "Chief Operating Officer",
      description: "Driving operational excellence and expanding our global reach with sustainable practices.",
      image: teamApoorva,
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "Every grain and dal variety undergoes rigorous quality control to meet international standards.",
    },
    {
      icon: Target,
      title: "Customer Focus",
      description: "Building lasting relationships through reliability, transparency, and consistent excellence.",
    },
    {
      icon: Users,
      title: "Community Care",
      description: "Supporting local farmers in Tamil Nadu with fair practices and sustainable partnerships.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl font-bold text-foreground animate-item">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-item">
              For over 50 years, Kailash International has been synonymous with premium quality agrocommodity trading and exports. Rooted in Thanjavur (Tamil Nadu) - the rice bowl of India - we carry forward a legacy of excellence, sustainability, and unwavering commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground animate-item">
                A Legacy Built on Trust
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p className="animate-item">
                  Founded by Mr. Venkadaraman, Kailash International began its journey in 1970 with a simple yet powerful vision: to bring the finest agricultural products from India's heartland to the world. What started as a small trading operation has grown into a trusted name in agrocommodity trading, serving customers across India and 5+ countries.
                </p>
                <p className="animate-item">
                  Our roots in Tiruchirappalli, Tamil Nadu - India, a region blessed with fertile soil and centuries-old farming traditions, give us unique access to some of the world's finest rice and dal varieties. We work directly with local farmers who have perfected their craft over generations, ensuring authenticity and quality in every shipment.
                </p>
                <p className="animate-item">
                  Today, under the leadership of Mr. Ramakrishnan and COO Apoorva Ramakrishnan, we continue to honor our founder's vision while embracing modern practices, certifications, and sustainable methods that meet global standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold text-foreground animate-item">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground animate-item">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-item">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-xl">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold text-foreground animate-item">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground animate-item">
              Meet the people behind our success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-item">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-32 h-32 rounded-full mx-auto overflow-hidden border-4 border-primary/10">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{member.name}</h3>
                    <p className="text-[#6A5440] font-semibold">{member.role}</p>
                  </div>
                  <p className="text-[#183E47] font-medium leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
<section className="py-20 bg-[#DFDFDF] text-primary-foreground">
  <div className="container mx-auto px-4 text-center space-y-6">
    <h2 className="text-4xl font-bold text-[#183E47] animate-item">
      Quality Certifications
    </h2>
    <p className="text-xl font-medium opacity-95 max-w-2xl mx-auto text-[#183E47] animate-item">
      FSSAI certified and compliant with international food safety standards. Your trust is our responsibility.
    </p>
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      {[
        { logo: logoFssai, name: "FSSAI Certified" },
        { logo: logoExport, name: "Export Quality" },
        { logo: logoIso, name: "ISO Standards" },
        { logo: logoHalal, name: "Halal Certified" },
        { logo: logoHaccp, name: "HACCP Certified" },
        { logo: logoApeda, name: "APEDA Registered (Govt. of India)" },
        { logo: logoSpiceboard, name: "Spice Board Registered (Govt. of India)" },
      ].map((cert, index) => (
        <div
          key={index}
          className="bg-white rounded-xl px-6 py-5 flex flex-col items-center gap-3 w-40 shadow-sm hover:shadow-md transition-shadow animate-item"
        >
          <img
            src={cert.logo}
            alt={cert.name}
            className="h-16 w-auto object-contain"
          />
          <p className="text-sm font-semibold text-[#183E47] text-center leading-tight">
            {cert.name}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
</div>
  );
};

export default About;