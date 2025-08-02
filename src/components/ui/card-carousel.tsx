"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SparklesIcon, ChevronLeft, ChevronRight } from "lucide-react"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import { Badge } from "@/components/ui/badge"

interface CarouselProps {
  images: { src: string; alt: string; title?: string; category?: string }[]
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
  title?: string
  subtitle?: string
}

export const CardCarousel: React.FC<CarouselProps> = ({
  images,
  autoplayDelay = 3000,
  showPagination = false,
  showNavigation = true,
  title = "Anime Poster ",
  subtitle = "Your favorite anime posters in a stunning carousel",
}) => {
  const css = `
  .card-carousel .swiper {
    width: 100%;
    padding: 50px 0;
    overflow: visible;
  }
  
  .card-carousel .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 320px;
    height: 420px;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
  }
  
  .card-carousel .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .card-carousel .swiper-slide:hover img {
    transform: scale(1.1);
  }
  
  .card-carousel .swiper-3d .swiper-slide-shadow-left,
  .card-carousel .swiper-3d .swiper-slide-shadow-right {
    background: linear-gradient(45deg, rgba(0,0,0,0.2), transparent);
  }

  .card-carousel .swiper-pagination {
    bottom: 10px !important;
  }

  .card-carousel .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 1;
    transition: all 0.3s ease;
  }

  .card-carousel .swiper-pagination-bullet-active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: scale(1.2);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  }

  .card-carousel .swiper-button-next,
  .card-carousel .swiper-button-prev {
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    color: #333;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .card-carousel .swiper-button-next:hover,
  .card-carousel .swiper-button-prev:hover {
    background: white;
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  }

  .card-carousel .swiper-button-next:after,
  .card-carousel .swiper-button-prev:after {
    font-size: 18px;
    font-weight: bold;
  }
  `

  return (
    <section className="w-full space-y-8 py-12">
      <style>{css}</style>
      
      {/* Container with enhanced styling */}
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative mx-auto flex w-full flex-col rounded-3xl border border-gray-200/50 bg-gradient-to-br from-gray-50/80 to-white/90 backdrop-blur-sm shadow-2xl overflow-hidden">
          
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-400/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
          
          {/* Header Section */}
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="inline-flex items-center gap-2 rounded-full border-purple-200 bg-purple-50/80 px-4 py-2 text-purple-700 backdrop-blur-sm"
                >
                  <SparklesIcon className="w-4 h-4 fill-purple-400 stroke-purple-600" />
                  Latest Release
                </Badge>
                
                <div className="space-y-2">
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-blue-800 bg-clip-text text-transparent">
                    {title}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                    {subtitle}
                  </p>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                </div>
              </div>
              
              {/* Stats or additional info */}
              <div className="hidden md:flex items-center space-x-8 text-center">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-gray-900">{images.length}</div>
                  <div className="text-sm text-gray-500">Images</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-gray-900">3D</div>
                  <div className="text-sm text-gray-500">Effect</div>
                </div>
              </div>
            </div>

            {/* Enhanced Carousel */}
            <div className="card-carousel">
              <Swiper
                spaceBetween={30}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 15,
                  stretch: 0,
                  depth: 200,
                  modifier: 1.5,
                  slideShadows: true,
                }}
                pagination={{
                  clickable: true,
                  enabled: showPagination,
                }}
                navigation={{
                  enabled: showNavigation,
                }}
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
                className="premium-swiper"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={`slide-${index}`}>
                    <div className="relative group cursor-pointer">
                      {/* Image container */}
                      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src={image.src}
                          width={400}
                          height={500}
                          className="w-full h-full object-cover"
                          alt={image.alt}
                          priority={index < 3}
                        />
                        
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Content overlay */}
                        {(image.title || image.category) && (
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            {image.category && (
                              <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium mb-2">
                                {image.category}
                              </span>
                            )}
                            {image.title && (
                              <h3 className="text-lg font-semibold">
                                {image.title}
                              </h3>
                            )}
                          </div>
                        )}
                        
                        {/* Shine effect */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                      </div>
                      
                      {/* Floating badge */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {index + 1}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
