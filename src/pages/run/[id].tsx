import type { GetServerSideProps } from 'next'

type Props = {
  routeDetails: {
    id: number
    name: string
    description: string
    runners: number
    createdAt: string
    updatedAt: string
  }
}

const RunDetail: React.FC<Props> = ({ routeDetails }) => {
  return (
    <>
      <p>{routeDetails.name}</p>
      <p>{routeDetails.description}</p>
    </>
  )
}

export default RunDetail

export const getServerSideProps: GetServerSideProps = (async ({ params }) => {
  const id = params?.id

  if (!id) {
    return {
      notFound: true,
    }
  }

  const res = await fetch(`${process.env.CORE_API_URL}/events/${id}`)

  if (!res.ok) {
    return {
      notFound: true,
    }
  }

  const routeDetails: Event = await res.json()

  return {
    props: { routeDetails },
  }
}) satisfies GetServerSideProps<{ routeDetails: Event }>
