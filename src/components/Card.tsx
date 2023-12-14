import Image from "next/image"
import Link from "next/link"
import { User } from "react-feather"

type IProps = {
  id: number
  mainImg: string
  reviews: number
  runners: number
  organizerImg: string
}

const Card = ({ id, reviews, mainImg, organizerImg, runners }: IProps) => {
  return (
    <div className="card card-compact bg-base-200 shadow-xl border-2">
      <figure>
        <Link href={`/run/${id}`}>
          <Image
            src={mainImg}
            alt="Banner da corrida"
            width={1200}
            height={1200}
          />
        </Link>
      </figure>
      <div className="card-body">
        <div className="card-actions justify-between items-center w-full">
          <Image
            src={organizerImg}
            alt="Logo do organizador do evento"
            width={100}
            height={100}
          />
          <div className="flex">
            <User fill="true" />
            {reviews} avaliações
          </div>
          <div className="flex">
            <User fill="true" />
            {runners} correram
          </div>
          <Link className="btn bg-lightGreen" href={`/run/${id}`}>
            Avaliar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
