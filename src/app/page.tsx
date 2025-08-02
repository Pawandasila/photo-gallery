import Image from "next/image";
import ClientGalleries from "@/components/client-galleries";
import CardCarouselWrapper from "@/components/CardCarausolWrapper";
import AlbumSection from "@/components/AlbumSection";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen">
        <section className="relative overflow-hidden bg-[#151106] border-b border-gray-200 h-full lg:h-[621px] flex items-end">
          <div className="w-full h-full grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-0 p-0">
            <div className="flex flex-col justify-center items-start pl-[53px] pr-8 py-8 lg:py-12 relative z-10">
              <div className="space-y-8 my-auto px-4 mx-auto">
                <h1 className="text-4xl lg:text-4xl xl:text-[30px] font-normal text-white leading-[110%] tracking-[2px] w-full max-w-[440px]">
                  Elevate Your Photography
                  <br />
                  to a Successful Business
                </h1>

                {/* Desktop bullets layout - matches original structure */}
                <div className="hidden md:block space-y-4">
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <p className="text-white font-normal">Galleries</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <p className="text-white font-normal">Print Store</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="text-white font-normal">
                        Marketing Automations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <p className="text-white font-normal">Slideshows</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <p className="text-white font-normal">Blogs</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="text-white font-normal">AI Search</p>
                    </div>
                  </div>
                </div>

                {/* Mobile bullets layout */}
                <div className="block md:hidden">
                  <p className="text-white text-sm">
                    Galleries | Print Store | Marketing Automations | Slideshows
                    | Blogs | AI Search
                  </p>
                </div>

                <button className="relative bg-white cursor-pointer hover:bg-gray-200 text-black font-bold py-4 px-8 rounded-full transition-all duration-200 text-lg tracking-wide overflow-hidden group">
                  <span className="relative z-10">Start for Free</span>
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </button>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="flex flex-col justify-end items-end relative">
              <div className="relative w-full h-full flex items-end justify-end">
                {/* Main Hero Image */}
                <div className="relative w-full max-w-[1236px] h-full">
                  <Image
                    src="/hero-image.webp"
                    alt="A collage of three portraits inside the Art Gallery platform, showcasing professional photography work"
                    fill
                    className="object-cover object-right-bottom"
                    priority
                    sizes="(max-width: 1279px) 100vw, 1236px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Galleries Section */}
        <ClientGalleries />

        {/* <SwiperCard /> */}

        <AlbumSection />

        {/* Features Section */}
        <CardCarouselWrapper />

        <NewsletterSection />

        {/* Footer Section */}
        <FooterSection />
      </main>
    </div>
  );
}
