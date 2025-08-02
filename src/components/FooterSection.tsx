import React from 'react'
import Image from 'next/image'
import { 
  Camera, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube,
  Heart,
  ArrowRight,
  Star
} from 'lucide-react'

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Wedding Photography",
    "Pre-Wedding Sessions",
    "Maternity Photography",
    "Family Portraits",
    "Corporate Events",
    "Special Occasions"
  ];

  const quickLinks = [
    "About Us",
    "Our Portfolio",
    "Pricing",
    "Contact",
    "Blog",
    "FAQ"
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-500" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-500" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-500" }
  ];

  return (
    <footer className="bg-[#222] text-white relative overflow-hidden">
      
      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center">
                  <Camera className="w-7 h-7 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Gallery
                  </h3>
                  <p className="text-sm text-gray-400">Photography Studio</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Capturing life's most precious moments with artistic vision and professional excellence. 
                Creating timeless memories that you'll treasure forever.
              </p>
              
              {/* Awards/Recognition */}
              <div className="flex items-center gap-2 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-white">500+ Happy Clients</div>
                  <div className="text-gray-400">5-Star Rated Studio</div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                    >
                      <div className="w-2 h-2 bg-white rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {service}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Get In Touch</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Studio Address</p>
                    <p className="text-gray-300 text-sm">123 Photography Street<br />Creative District, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300 text-sm">hello@gallery.com</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <h5 className="text-white font-medium mb-4">Follow Us</h5>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:-translate-y-1`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Ready to capture your special moments?
                </h4>
                <p className="text-gray-300">
                  Book your session today and let us create magic together.
                </p>
              </div>
              <button className="relative bg-white text-black font-semibold py-4 px-8 rounded-2xl transition-all duration-300 overflow-hidden group transform hover:scale-105 whitespace-nowrap hover:bg-gray-100">
                <span className="relative z-10 flex items-center gap-2">
                  Book Now
                  <Camera className="w-5 h-5 transition-transform group-hover:rotate-12" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© {currentYear} Gallery Photography Studio. Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                <span>All rights reserved.</span>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
