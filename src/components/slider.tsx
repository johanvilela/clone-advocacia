import StatueImage from '../assets/statue-law-slider.jpg';
import BooksImage from '../assets/books-slider.jpg';
import TractorImage from '../assets/tractor-slides.jpg';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

export function Slider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      defaultAnimation: {
        duration: 4000
      }
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        function nextTimeout() {
          clearTimeout(timeout)
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on("created", nextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <section className='bg-slate-300 h-[500px] sm:h-[600px] md:h-[700px]'>
      <div ref={sliderRef} className="keen-slider h-full">

        <div className="keen-slider__slide number-slide1 h-full">
          <img
            src={StatueImage}
            alt="Estátua da deusa Thémis"
            className='object-cover h-full w-full'
          />
        </div>

        <div className="keen-slider__slide number-slide2 h-full">
          <img
            src={BooksImage}
            alt="Estante de livros"
            className='object-cover h-full w-full'
          />
        </div>

        <div className="keen-slider__slide number-slide3 h-full">
          <img
            src={TractorImage}
            alt="Trator na lavoura"
            className='object-cover h-full w-full'
          />
        </div>
      </div>
    </section>
  )
} 
