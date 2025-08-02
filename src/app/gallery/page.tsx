'use client';

import React, { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { Heart, Eye, Download, X } from 'lucide-react'

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [likedImages, setLikedImages] = useState<number[]>([])
  const [loadingImages, setLoadingImages] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Gallery data
  const galleryItems = [
    {
      id: 1,
      src: "/bento-01.jpg",
      alt: "Wedding Photography",
      category: "wedding",
      likes: 245,
      views: 1234
    },
    {
      id: 2,
      src: "/bento-02.jpg",
      alt: "Pre-Wedding Shoot",
      category: "prewedding",
      likes: 189,
      views: 987
    },
    {
      id: 3,
      src: "/bento-03.jpg",
      alt: "Maternity Photography",
      category: "maternity",
      likes: 156,
      views: 798
    },
    {
      id: 4,
      src: "/bento-04.jpg",
      alt: "Family Portrait",
      category: "family",
      likes: 312,
      views: 1576
    },
    {
      id: 5,
      src: "/bento-05.jpg",
      alt: "Corporate Event",
      category: "corporate",
      likes: 89,
      views: 543
    },
    {
      id: 6,
      src: "/bento-01.jpg",
      alt: "Wedding Reception",
      category: "wedding",
      likes: 267,
      views: 1321
    },
    {
      id: 7,
      src: "/bento-02.jpg",
      alt: "Engagement Session",
      category: "prewedding",
      likes: 423,
      views: 2156
    },
    {
      id: 8,
      src: "/bento-03.jpg",
      alt: "Baby Bump",
      category: "maternity",
      likes: 198,
      views: 876
    },
    {
      id: 9,
      src: "/bento-04.jpg",
      alt: "Children Portrait",
      category: "family",
      likes: 145,
      views: 654
    },
    {
      id: 10,
      src: "/bento-05.jpg",
      alt: "Business Meeting",
      category: "corporate",
      likes: 76,
      views: 432
    },
    {
      id: 11,
      src: "/bento-05.jpg",
      alt: "Event Photography",
      category: "corporate",
      likes: 76,
      views: 432
    },{
      id: 12,
      src: "/wedding-01.jpg",
      alt: "Wedding Ceremony",
      category: "wedding",
      likes: 184,
      views: 892
    },
    {
      id: 13,
      src: "/wedding-02.jpg",
      alt: "Wedding Celebration",
      category: "wedding",
      likes: 256,
      views: 1043
    },
    {
      id: 14,
      src: "/wedding-03.jpg",
      alt: "Wedding Portraits",
      category: "wedding",
      likes: 198,
      views: 756
    },{
      id: 15,
      src: "/wedding-05.jpg",
      alt: "Wedding Reception",
      category: "wedding",
      likes: 312,
      views: 1234
    },{
      id: 16,
      src: "/wedding-06.jpg",
      alt: "Bridal Photography",
      category: "wedding",
      likes: 189,
      views: 823
    },{
      id: 17,
      src: "/gallery-07.jpg",
      alt: "Wedding Details",
      category: "wedding",
      likes: 234,
      views: 967
    },{
      id: 18,
      src: "/gallery-08.jpg",
      alt: "Couple Portraits",
      category: "prewedding",
      likes: 156,
      views: 645
    },{
      id: 19,
      src: "/weddigalleryng-09.jpg",
      alt: "Engagement Photos",
      category: "prewedding",
      likes: 287,
      views: 1089
    },
  ]

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryItems.length },
    { id: 'wedding', name: 'Weddings', count: galleryItems.filter(item => item.category === 'wedding').length },
    { id: 'prewedding', name: 'Pre-Wedding', count: galleryItems.filter(item => item.category === 'prewedding').length },
    { id: 'maternity', name: 'Maternity', count: galleryItems.filter(item => item.category === 'maternity').length },
    { id: 'family', name: 'Family', count: galleryItems.filter(item => item.category === 'family').length },
    { id: 'corporate', name: 'Corporate', count: galleryItems.filter(item => item.category === 'corporate').length }
  ]

  useEffect(() => {
    setLoadingImages(galleryItems.map(item => item.id))
  }, [])

  // Filter functionality
  const filteredItems = useMemo(() => {
    return galleryItems.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
      return matchesCategory
    })
  }, [selectedCategory, galleryItems])

  const toggleLike = (imageId: number) => {
    setLikedImages(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    )
  }

  const handleImageLoad = (imageId: number) => {
    setLoadingImages(prev => prev.filter(id => id !== imageId))
  }

  const handleImageError = (imageId: number, src: string) => {
    setLoadingImages(prev => prev.filter(id => id !== imageId))
    console.log(`Failed to load image: ${src}`)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
     

      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-black text-white shadow-lg transition'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid Gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="break-inside-avoid group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer mb-6"
            onClick={() => setSelectedImage(item)}
          >
            {/* Image */}
            <Image
              src={item.src}
              alt={item.alt}
              width={400}
              height={0}
              style={{ height: 'auto' }}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
              priority={item.id <= 4}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              quality={85}
              onLoad={() => handleImageLoad(item.id)}
              onError={() => handleImageError(item.id, item.src)}
            />

            {/* Loading Skeleton */}
            {loadingImages.includes(item.id) && (
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-gray-300 dark:border-gray-600 border-t-gray-600 dark:border-t-gray-300 rounded-full animate-spin"></div>
              </div>
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Hover Actions */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex gap-3">
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleLike(item.id)
                  }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                    likedImages.includes(item.id)
                      ? 'bg-red-600 text-white'
                      : 'bg-white/90 text-gray-700 hover:bg-white'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${likedImages.includes(item.id) ? 'fill-current' : ''}`} />
                </button>
                <button 
                  onClick={(e) => e.stopPropagation()}
                  className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-gray-700 hover:bg-white transition-all duration-200"
                >
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 bg-white/90 rounded-full px-3 py-1.5 text-sm font-medium text-gray-700">
                  <Heart className="w-3 h-3" />
                  {item.likes}
                </div>
                <div className="flex items-center gap-1 bg-white/90 rounded-full px-3 py-1.5 text-sm font-medium text-gray-700">
                  <Eye className="w-3 h-3" />
                  {item.views}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-6xl max-h-[95vh] w-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200 border border-white/20"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="relative flex-1 flex items-center justify-center bg-black/30 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                sizes="(max-width: 768px) 95vw, (max-width: 1200px) 90vw, 1200px"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
                quality={95}
                onLoad={() => {
                  // Modal image loaded
                }}
                onError={() => {
                  console.log(`Failed to load modal image: ${selectedImage.src}`)
                }}
              />
            </div>

            {/* Image Info */}
            <div className="mt-6 bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedImage.alt}</h2>
                  <div className="flex items-center gap-4 text-white/80">
                    <span className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                      <Heart className="w-4 h-4" />
                      {selectedImage.likes} likes
                    </span>
                    <span className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
                      <Eye className="w-4 h-4" />
                      {selectedImage.views} views
                    </span>
                    <span className="bg-white/10 rounded-full px-4 py-2 capitalize text-sm">
                      {selectedImage.category.replace('prewedding', 'pre-wedding')}
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(selectedImage.id)
                    }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                      likedImages.includes(selectedImage.id)
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${likedImages.includes(selectedImage.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button 
                    onClick={(e) => e.stopPropagation()}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryPage
