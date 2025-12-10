import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import DeploymentModes from "@/components/sections/DeploymentModes";
import HardwarePreview from "@/components/sections/HardwarePreview";
import Pricing from "@/components/sections/Pricing";
import BetaSignup from "@/components/sections/BetaSignup";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <DeploymentModes />
      <HardwarePreview />
      <Pricing />
      <Testimonials />
      <BetaSignup />
    </>
  );
}
