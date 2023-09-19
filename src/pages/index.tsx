import Card from "@/components/Card"
import Carousel from "@/components/Carousel"

const Home: React.FC = () => {
  return (
    <>
      <Carousel />
      <Card
        id={1}
        assessments={321}
        mainImg="/run-example.png"
        organizerImg="/organizer-example.png"
        runners={454}
      />
    </>
  )
}

export default Home