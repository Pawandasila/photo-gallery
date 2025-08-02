import React from 'react'
import Image from 'next/image'
import { Mail, Send, Star, Heart, Camera } from 'lucide-react'

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#f8f6f3] to-[#f1ede8] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(147,51,234,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(236,72,153,0.08),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
            {/* Image Section */}
            <div className="relative overflow-hidden lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-blue-600/20 z-10"></div>
              <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
                <Image
                  src="/Newsletter.jpg"
                  alt="Professional photography newsletter showcase"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-1/2 left-8 w-6 h-6 bg-white/30 rounded-full animate-ping"></div>
              
              {/* Overlay content */}
              <div className="absolute inset-0 flex items-end p-8 lg:p-12 z-20">
                <div className="text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                  <p className="text-lg font-medium mb-2 drop-shadow-lg">
                    "Professional photography that captures every precious moment perfectly!"
                  </p>
                  <p className="text-white/90 drop-shadow-lg">Sarah & Michael Johnson</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center p-8 lg:p-16 lg:order-2">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent text-sm font-semibold tracking-wide uppercase">
                      Stay Connected
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
                      Never Miss a
                      <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                        Moment
                      </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Subscribe to our newsletter and get exclusive access to latest photography tips, 
                    behind-the-scenes content, and special offers on your next session.
                  </p>
                  
                  {/* Benefits */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                      <span className="text-gray-700">Weekly photography tips & tricks</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                      <span className="text-gray-700">Exclusive discounts & early access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                      <span className="text-gray-700">Behind-the-scenes content</span>
                    </div>
                  </div>
                </div>
                
                {/* Email Form */}
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-500"
                    />
                  </div>
                  
                  <button className="relative w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-xl hover:shadow-purple-500/25 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 overflow-hidden group transform hover:scale-[1.02]">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Subscribe Now
                      <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    No spam, unsubscribe at any time. We respect your privacy.
                  </p>
                </div>
                
                {/* Stats */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">2.5K+</div>
                      <div className="text-sm text-gray-600">Subscribers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">500+</div>
                      <div className="text-sm text-gray-600">Happy Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">150+</div>
                      <div className="text-sm text-gray-600">Events Covered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
