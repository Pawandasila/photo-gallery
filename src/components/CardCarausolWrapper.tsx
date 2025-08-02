import { CardCarousel } from "@/components/ui/card-carousel"
import React from 'react'


const CardCarouselWrapper = () => {

     const images = [
    { src: "/card-01.jpg", alt: "Image 1" },
    { src: "/card-02.jpg", alt: "Image 2" },
    { src: "/card-04.jpg", alt: "Image 4" },
    { src: "/card-05.jpg", alt: "Image 5" },
    { src: "/card-06.jpg", alt: "Image 6" },
    { src: "/card-07.jpg", alt: "Image 7" },
    { src: "/card-08.jpg", alt: "Image 8" },

  ]

  return (
    <div>
        <CardCarousel
        images={images}
        autoplayDelay={2000}
      />
      
    </div>
  )
}

export default CardCarouselWrapper
