import Carousel from '@/components/Carousel'
import RunCardsList from '@/components/RunCardsList'

type Props = {
  runs: {
    id: number
    name: string
    description: string
    runners: number
    createdAt: string
    updatedAt: string
    reviews: any[]
  }[]
}

const Home: React.FC<Props> = ({ runs }) => {
  return (
    <div className='m-2'>
      <Carousel />
      <h1 className='text-2xl font-semibold mb-2'>Corridas:</h1>
      <RunCardsList runs={runs} />
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const runs = await fetch(`${process.env.CORE_API_URL}/events`)
    .then((res) => res.json())
    .catch((err) => {
      console.log(err)
    })

  return {
    props: {
      runs,
    },
    revalidate: 60,
  }
}
