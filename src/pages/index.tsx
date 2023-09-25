import Carousel from "@/components/Carousel"
import RunCardsList from "@/components/RunCardsList"

const Home: React.FC = () => {
  return (
    <div className="bg-red-300">
      <Carousel />
      <RunCardsList />
    </div>
  )
}

export default Home