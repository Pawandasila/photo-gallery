import React from 'react'
import Image from 'next/image'
import { Camera, Heart, Baby, Users, Briefcase, Star } from 'lucide-react'

const AlbumSection = () => {
  const albums = [
    {
      id: 1,
      title: "Wedding Photography",
      subtitle: "Capturing Love Stories",
      description: "Elegant and timeless wedding moments",
      image: "/bento-01.jpg",
      icon: Heart,
      gradient: "from-rose-500 to-pink-600",
      bgGradient: "from-rose-50 to-pink-50",
      count: "150+ Albums",
      size: "large", // spans 2 columns
    },
    {
      id: 2,
      title: "Pre-Wedding",
      subtitle: "Romance Begins",
      description: "Beautiful pre-wedding sessions",
      image: "/bento-02.jpg",
      icon: Camera,
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50",
      count: "80+ Sessions",
      size: "medium",
    },
    {
      id: 3,
      title: "Maternity",
      subtitle: "Expecting Joy",
      description: "Precious maternity moments",
      image: "/bento-03.jpg",
      icon: Baby,
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      count: "45+ Sessions",
      size: "small",
    },
    {
      id: 4,
      title: "Family Portraits",
      subtitle: "Together Forever",
      description: "Creating family memories",
      image: "/bento-04.jpg",
      icon: Users,
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      count: "200+ Families",
      size: "medium",
    },
    {
      id: 5,
      title: "Corporate Events",
      subtitle: "Professional Moments",
      description: "Business and corporate photography",
      image: "/bento-05.jpg",
      icon: Briefcase,
      gradient: "from-slate-500 to-gray-600",
      bgGradient: "from-slate-50 to-gray-50",
      count: "60+ Events",
      size: "small",
    },
    // {
    //   id: 6,
    //   title: "Special Events",
    //   subtitle: "Memorable Occasions",
    //   description: "Birthdays, anniversaries & celebrations",
    //   image: "/gallery-04.webp",
    //   icon: Star,
    //   gradient: "from-amber-500 to-orange-600",
    //   bgGradient: "from-amber-50 to-orange-50",
    //   count: "120+ Events",
    //   size: "large",
    // }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,182,193,0.05),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-block bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase mb-2">
              Our Portfolio
            </span>
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-4 tracking-tight">
              Album Collections
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-600 to-purple-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore our diverse photography collections, each telling unique stories
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
          {albums.map((album) => {
            const IconComponent = album.icon;
            
            return (
              <div
                key={album.id}
                className={`
                  group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] cursor-pointer
                  ${album.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                  ${album.size === 'medium' ? 'md:row-span-1' : ''}
                  ${album.size === 'small' ? 'md:row-span-1' : ''}
                `}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={album.image}
                    alt={album.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Light overlay for better text readability, stronger on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black/50 transition-all duration-300"></div>
                </div>

                {/* Content */}
                <div className={`
                  relative h-full flex flex-col justify-between p-6 lg:p-8 text-white
                  ${album.size === 'large' ? 'min-h-[400px]' : 'min-h-[250px]'}
                `}>
                  {/* Top section - Always visible */}
                  <div className="flex items-start justify-between">
                    <div className={`
                      inline-flex items-center justify-center rounded-2xl bg-white/30 backdrop-blur-md border border-white/20 shadow-lg
                      ${album.size === 'large' ? 'w-16 h-16' : 'w-12 h-12'}
                    `}>
                      <IconComponent className={`text-white drop-shadow-lg ${album.size === 'large' ? 'w-8 h-8' : 'w-6 h-6'}`} />
                    </div>
                    <span className="text-xs font-semibold bg-white/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-lg text-white">
                      {album.count}
                    </span>
                  </div>

                  {/* Bottom section - Enhanced visibility */}
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <span className={`
                        inline-block font-bold tracking-wide uppercase text-white/90 drop-shadow-lg
                        ${album.size === 'large' ? 'text-sm' : 'text-xs'}
                      `}>
                        {album.subtitle}
                      </span>
                      <h3 className={`
                        font-bold leading-tight text-white drop-shadow-lg
                        ${album.size === 'large' ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl'}
                      `}>
                        {album.title}
                      </h3>
                      
                      {/* Description - Only visible on hover */}
                      <div className={`
                        transition-all duration-300 overflow-hidden
                        ${album.size === 'large' ? 'opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20' : 'hidden'}
                      `}>
                        <p className="text-white/90 text-lg leading-relaxed max-w-md drop-shadow-lg pt-2">
                          {album.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* CTA Button - Enhanced on hover */}
                    <div className="transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                      <button className={`
                        relative bg-white/25 backdrop-blur-md hover:bg-white/35 text-white font-semibold rounded-full transition-all duration-300 overflow-hidden group/btn border border-white/20 shadow-lg hover:shadow-xl
                        ${album.size === 'large' ? 'py-3 px-8 text-base' : 'py-2.5 px-6 text-sm'}
                      `}>
                        <span className="relative z-10 drop-shadow-sm">View Albums</span>
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover/btn:translate-x-full transition-transform duration-1000 ease-out"></div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Floating elements - More subtle */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-white/60 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute bottom-20 left-6 w-3 h-3 bg-white/50 rounded-full animate-bounce shadow-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default AlbumSection
