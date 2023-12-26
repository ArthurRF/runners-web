import Image from 'next/image'

const Carousel: React.FC = () => {
  return (
    <div className='carousel w-full'>
      <div id='slide1' className='carousel-item relative w-full'>
        <Image
          src='/carousel-1.svg'
          className='w-full mb-5'
          alt='Imagem de corrida'
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}

export default Carousel
