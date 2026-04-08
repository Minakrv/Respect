import AboutHome from "../Components/AboutHome";

import Hero from "../Components/Hero";

import NewsLetterBox from "../Components/NewsLetterBox";
import Bestseller from "../Components/BestSeller";

const Home = () => {
  return (
    <div>
      <Hero />
      <Bestseller />
      <AboutHome />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
