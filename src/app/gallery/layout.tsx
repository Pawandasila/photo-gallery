import React from 'react'

interface GalleryLayoutProps {
  children: React.ReactNode
}

const GalleryLayout = ({ children }: GalleryLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Gallery Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 dark:text-white mb-4 tracking-tight">
              Our Gallery
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Explore our collection of professional photography showcasing moments that matter
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  )
}

export default GalleryLayout
