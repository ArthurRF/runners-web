import Image from "next/image";
import Link from "next/link";
import { User } from "react-feather";

type IProps = {
  id: number;
  mainImg: string;
  assessments: number;
  runners: number;
  organizerImg: string;
};

const Card = ({ id, assessments, mainImg, organizerImg, runners }: IProps) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl mx-0 my-4">
      <figure>
        <Image src={mainImg} alt="Shoes" width={600} height={600} />
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
            {assessments} avaliações
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
  );
};

export default Card;
