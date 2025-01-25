import { FAQ } from "../components/lading-page/FAQ";
import { Header } from "../components/lading-page/Header";
import { Hero } from "../components/lading-page/Hero";
import { Pricing } from "../components/lading-page/Pricing";
import { VideoExplanation } from "../components/lading-page/VideoExplanation";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <Header />
      <VideoExplanation />
      <Pricing />
      <FAQ />
    </div>
  );
}
