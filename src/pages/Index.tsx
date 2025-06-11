import Hero from "@/components/Hero";
import Features from "@/components/Features";
import StoriesPreview from "@/components/StoriesPreview";
import MatchingPreview from "@/components/MatchingPreview";
import ReelsPreview from "@/components/ReelsPreview";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <StoriesPreview />
      <MatchingPreview />
      <ReelsPreview />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
