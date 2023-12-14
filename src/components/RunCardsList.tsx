import Card from "./Card"

type Props = {
  runs: {
    id: number
    name: string
    description: string
    runners: number
    createdAt: string
    updatedAt: string
  }[]
}

const RunCardsList: React.FC<Props> = ({ runs }) => {
  return (
    <div className="flex flex-col gap-x-8 gap-y-8 md:grid md:grid-cols-2">
      {runs.map((run) => {
        return (
          <div key={run.id}>
            <Card
              id={run.id}
              reviews={30}
              mainImg="/run-example.png"
              organizerImg="/organizer-example.png"
              runners={run.runners}
            />
          </div>
        )
      })}
    </div>
  )
}

export default RunCardsList
