import Hero from "./Hero";
import Calltoaction from "./Calltoaction";
import Carousel from "./Carousel";
import WebsiteLayout from "../layout/WebsiteLayout";

function Home() {
  return (
    <div>
      <WebsiteLayout>
      <Hero />
      <Calltoaction />
      <Carousel />
      </WebsiteLayout>
    </div>
  );
}

export default Home;
