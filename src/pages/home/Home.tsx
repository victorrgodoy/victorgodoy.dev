import HeroContent from "./hero/HeroContent";
import ScrollButton from "../../components/interface/ScrollButton";

function Home() {
  return (
    <section id="hero" className="h-full flex flex-col justify-center">
      <HeroContent />
      <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2">
        <ScrollButton />
      </div>
    </section>
  );
}

export default Home;
