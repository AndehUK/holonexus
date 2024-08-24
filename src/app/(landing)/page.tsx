import { Discord } from "./discord";
import { Features } from "./features";
import { Hero } from "./hero";
import { Navbar } from "./navigation";

const LandingPage = () => {
  return (
    <div className="h-full">
      <Navbar />
      <Hero />
      <Features />
      <Discord />
    </div>
  );
};

export default LandingPage;
