import Articles from "../Components/Articles/Articles";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Features from "../Components/Features/Features";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Articles />
      </main>
      <Footer />
    </>
  );
};
export default Home;
