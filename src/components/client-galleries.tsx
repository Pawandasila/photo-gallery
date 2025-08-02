'use client';

import Image from 'next/image';

const ClientGalleries = () => {
  const galleries = [
    {
      id: 1,
      title: "Exceptional Aesthetic",
      subtitle: "Beautiful Design",
      description: "Beautiful client galleries to deliver, share and sell your images. Craft your client's journey with unique photo grids that provide an edge to your storytelling and enhance your brand experience online.",
      image: "/gallery-10.webp",
      gradient: "from-purple-600 via-pink-600 to-blue-600",
      alt: "Gallery featuring professional photography work showcasing exceptional aesthetic design"
    },
    {
      id: 2,
      title: "Video & GIFs",
      subtitle: "Dynamic Content",
      description: "Add another dimension to your galleries with video and GIF integration. Videos can be added as a scene and GIFs can be uploaded in the gallery and even set as the cover.",
      image: "/gallery-11.webp",
      gradient: "from-blue-600 via-purple-600 to-teal-600",
      alt: "Video and GIF integration showcase for dynamic gallery experience"
    },
    {
      id: 3,
      title: "In Your Language",
      subtitle: "Global Reach",
      description: "Our platform offers a variety of languages, all reviewed by local area photographers. Make your galleries a familiar space for clients by adjusting the default language for individual projects.",
      image: "/gallery-12.webp",
      gradient: "from-green-600 via-blue-600 to-purple-600",
      alt: "Multi-language support interface for global accessibility"
    },
    {
      id: 4,
      title: "Portfolio",
      subtitle: "Professional Showcase",
      description: "Clients can directly login to their galleries, while visitors have access to public or selected sneak peek galleries. Portfolio pages are fully customizable and can be easily integrated into your site to help increase traffic.",
      image: "/gallery-13.webp",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      alt: "Professional portfolio showcase with customizable layouts"
    },
    {
      id: 5,
      title: "Mobile",
      subtitle: "On Every Device",
      description: "The features you love, on every device. With quick loading even for the largest galleries, clients can easily share, shop, and download images on the go.",
      image: "/gallery-09.jpg",
      gradient: "from-teal-600 via-green-600 to-blue-600",
      alt: "Mobile-optimized gallery interface for seamless user experience"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-[#f5f1ee] to-[#e8e2db] py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,182,193,0.1),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase mb-2">
              Showcase Excellence
            </span>
            <h2 className="text-5xl lg:text-6xl font-light text-gray-900 mb-4 tracking-tight">
              Client Galleries
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Your Brand Deserves the Best
            </p>
          </div>
        </div>

        {/* Gallery Sections */}
        <div className="space-y-32">
          {galleries.map((gallery, index) => (
            <div
              key={gallery.id}
              className={`group ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex gap-12 lg:gap-20 items-center`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative overflow-hidden  ">
                  <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-2xl">
                    <Image
                      src={gallery.image}
                      alt={gallery.alt}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <span className={`inline-block bg-gradient-to-r ${gallery.gradient} bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase`}>
                      {gallery.subtitle}
                    </span>
                    <h3 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight">
                      {gallery.title}
                    </h3>
                    <div className={`w-20 h-1 bg-gradient-to-r ${gallery.gradient}`}></div>
                  </div>
                  
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-xl">
                    {gallery.description}
                  </p>
                  
                  <div className="pt-6">
                    <button className={`relative bg-background hover:shadow-xl font-bold text-black py-4 px-10 rounded-full transition-all duration-300 overflow-hidden group transform hover:scale-105`}>
                      <span className="relative z-10">Learn More</span>
                      
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientGalleries;
