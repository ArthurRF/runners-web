import Carousel from "@/components/Carousel";
import RunCardsList from "@/components/RunCardsList";

const Home: React.FC = () => {
  return (
    <div className="m-2">
      <Carousel />
      <RunCardsList />
    </div>
  );
};

export default Home;
