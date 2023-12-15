import Card from './Card'

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

const RunCardsList: React.FC<Props> = ({ runs }) => {
  return (
    <div className='flex flex-col gap-x-8 gap-y-8 md:grid md:grid-cols-2'>
      {runs.map((run) => {
        return (
          <div key={run.id}>
            <Card
              id={run.id}
              reviews={run.reviews?.length || 0}
              mainImg='/run-example.png'
              organizerImg='/organizer-example.png'
              runners={run.runners}
            />
          </div>
        )
      })}
    </div>
  )
}

export default RunCardsList
