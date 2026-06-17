import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone,
} from "lucide-react";
import { SITE, HERO_SLIDES, HERO_FACILITIES } from "../../data/site";
import { EnquiryForm } from "./EnquiryForm";

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false); // Added Modal State

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <>
      <section id="home" className="bg-background pt-[80px] md:pt-[100px]">
        {/* Inline styles for seamless mobile marquee animation */}
        <style>{`
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-mobile {
            display: flex;
            width: max-content;
            animation: marquee-scroll 20s linear infinite;
          }
        `}</style>

        <div className="w-full">
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <img
              src={HERO_SLIDES[current].image}
              alt="Ladies Hostel in Trichy"
              className="h-[74vh] w-full object-cover transition-all duration-700 lg:h-[72vh]"
            />

            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
                <div className="max-w-2xl">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="h-px w-10 bg-primary sm:w-14" />
                    <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/90 sm:text-[11px]">
                      Trusted Ladies Hostel • Trichy
                    </span>
                  </div>

                  <h1 className="max-w-3xl text-[32px] font-display font-semibold leading-[1.08] tracking-tight text-white transition-opacity duration-500 sm:text-[48px] md:text-[60px] lg:text-[74px]">
                    {HERO_SLIDES[current].title}
                  </h1>

                  <p className="mt-4 max-w-xl text-[13px] font-normal leading-6 text-white/80 transition-opacity duration-500 sm:text-[15px] sm:leading-7 lg:text-[17px]">
                    {HERO_SLIDES[current].subtitle}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-5">
                    {/* Replaced CTA Link with Button to Trigger Modal */}
                    <button
                      onClick={() => setIsEnquiryOpen(true)}
                      className="group flex h-11 items-center gap-2.5 rounded-full bg-primary px-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-primary-dark sm:h-13 sm:px-8"
                    >
                      Book a Room
                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>

                    <a
                      href={SITE.phoneHref}
                      className="flex h-11 items-center gap-2 border rounded-full border-white/25 px-5 text-[10px] font-medium uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-white hover:text-black sm:h-13 sm:px-8"
                    >
                      <Phone size={14} />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Dots Indicator */}
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 sm:bottom-8">
              {HERO_SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`rounded-full transition-all duration-300 ${current === index
                    ? "h-[5px] w-8 bg-primary"
                    : "h-2.5 w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                />
              ))}
            </div>

            {/* Left Arrow */}
            <div className="absolute inset-y-0 left-3 hidden sm:flex items-center sm:left-6">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="flex h-10 w-10 items-center justify-center border border-white/20 bg-black/20 text-white backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-white sm:h-12 sm:w-12"
              >
                <ChevronLeft size={18} />
              </button>
            </div>

            {/* Right Arrow */}
            <div className="absolute inset-y-0 right-3 hidden sm:flex items-center sm:right-6">
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-10 w-10 items-center justify-center border border-white/20 bg-black/20 text-white backdrop-blur-sm transition-all duration-300 hover:bg-primary hover:text-white sm:h-12 sm:w-12"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* --- Facilities Bottom Bar (Desktop & Tablet) --- */}
          <div className="hidden border-y border-border/50 bg-surface md:grid md:grid-cols-3 lg:grid-cols-6">
            {HERO_FACILITIES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex h-24 flex-col items-center justify-center gap-2 border-r border-border/50 px-4 last:border-r-0 lg:last:border-r"
                >
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  <p className="text-center text-[10px] font-medium uppercase leading-[1.4] tracking-[0.2em] text-text-muted">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

          {/* --- Facilities Bottom Bar (Mobile Marquee) --- */}
          <div className="flex overflow-hidden border-y border-border/50 bg-surface md:hidden">
            {/* We duplicate the array to create a seamless infinite loop */}
            <div className="animate-marquee-mobile hover:[animation-play-state:paused]">
              {[...HERO_FACILITIES, ...HERO_FACILITIES].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={`${item.label}-${index}`}
                    className="flex h-20 w-[150px] shrink-0 flex-col items-center justify-center gap-2 border-r border-border/50 px-2"
                  >
                    <Icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
                    <p className="text-center text-[9px] font-medium uppercase leading-[1.4] tracking-[0.2em] text-text-muted">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Enquiry Form Modal */}
      <EnquiryForm isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  );
}