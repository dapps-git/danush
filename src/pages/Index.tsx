import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import CtaBanner from "@/components/CtaBanner";
import MainProducts from "@/components/MainProducts";
import BestSellers from "@/components/BestSellers";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProductCategories />
      <WhyChooseUs />
      <CtaBanner />
      <MainProducts />
      <BestSellers />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
