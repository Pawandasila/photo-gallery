import React from 'react'
import { CardSwipe } from './ui/card-swipe'

const SwiperCard = () => {

    const images = [
    // { src: "/wedding-01.jpg", alt: "Image 1" },
    // { src: "/wedding-02.jpg", alt: "Image 2" },
    { src: "/wedding-03.jpg", alt: "Image 3" },
    { src: "/wedding-04.jpg", alt: "Image 4" },
    { src: "/wedding-05.jpg", alt: "Image 5" },
    { src: "/wedding-06.jpg", alt: "Image 6" },
    { src: "/wedding--07.jpg", alt: "Image 7" },

  ]

  return (
    <div>
         <CardSwipe images={images} autoplayDelay={2000} slideShadows={false} />
    </div>
  )
}

export default SwiperCard
