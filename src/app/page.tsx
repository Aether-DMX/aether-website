import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import DeploymentModes from "@/components/sections/DeploymentModes";
import HardwarePreview from "@/components/sections/HardwarePreview";
import Testimonials from "@/components/sections/Testimonials";
import BetaSignup from "@/components/sections/BetaSignup";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <DeploymentModes />
      <HardwarePreview />
      <Testimonials />
      <BetaSignup />
    </>
  );
}
