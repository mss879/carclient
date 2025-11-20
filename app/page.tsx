'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WhyChooseUsSection } from '@/components/why-choose-us';
import { ServiceProcessSection } from '@/components/service-process';
import { CTASection } from '@/components/cta-section';
import { NewsSection } from '@/components/news-section';
import { Footer } from '@/components/footer';

export default function Home() {
  const [activeLink, setActiveLink] = useState('home');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-white font-sans">
      {/* Background Image & Overlays */}
      <motion.div style={{ y, opacity }} className="fixed inset-0 z-0">
        <Image
          src="https://framerusercontent.com/images/CaoN74Qsyj7Yi2xqGadnsZ55j8.jpg"
          alt="Hero Banner"
          fill
          className="object-cover object-[50%_100%]"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ 
          rotate: -35,
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="fixed top-0 left-0 w-[600px] h-[600px] bg-red-500/20 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 z-0"
      />

      <motion.div 
        animate={{ 
          rotate: 360 
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="fixed top-20 right-20 w-[275px] h-[161px] opacity-10 z-0"
      >
        <Image
          src="https://framerusercontent.com/images/I83KvEdvtTFcV4a2BYBjgMQ99GI.svg"
          alt="Background pattern"
          width={275}
          height={161}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 px-6 pointer-events-none">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[1400px] bg-black/80 backdrop-blur-md border border-white/[0.18] pointer-events-auto"
        >
          <div className="flex items-center justify-between h-[80px] px-6">
            <Link href="/" className="flex-shrink-0 w-[260px]">
              <Image
                src="https://framerusercontent.com/images/58lK66RnRxeu595otZsjFGlR0fE.svg"
                alt="Logo Company"
                width={260}
                height={44}
                className="w-full h-auto"
              />
            </Link>

            <div className="hidden lg:flex items-center">
              <NavLink href="/" label="Home" active={activeLink === 'home'} onClick={() => setActiveLink('home')} />
              <NavLink href="/about-us" label="About Us" active={activeLink === 'about'} onClick={() => setActiveLink('about')} />
              <NavLink href="/services" label="Services" active={activeLink === 'services'} onClick={() => setActiveLink('services')} />
              <NavLink href="/testimonial" label="Testimonial" active={activeLink === 'testimonial'} onClick={() => setActiveLink('testimonial')} />
              <NavLink href="/gallery" label="Gallery" active={activeLink === 'gallery'} onClick={() => setActiveLink('gallery')} />
            </div>

            <Link
              href="/contact-us"
              className="hidden lg:flex items-center justify-center px-8 py-3 bg-[#FF4D24] border-[3px] border-[#FF4D24] text-[#F2F3EA] font-bold uppercase tracking-wide transition-all hover:shadow-[0_0_40px_0_rgba(255,77,36,0.3)] hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </nav>

      <section className="relative z-10 pt-72 pb-32 px-6 min-h-screen flex flex-col justify-center">
        <div className="max-w-[1400px] mx-auto w-full">
          <div className="max-w-4xl mb-12">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-[2px] h-8 bg-[#FF4D24]" />
              <h6 className="text-base font-medium text-white tracking-wide uppercase">
                Discover the Passion and Expertise Behind Autofix
              </h6>
            </motion.div>

            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl lg:text-8xl font-bold leading-[0.9] uppercase mb-8"
            >
              Top-Quality Service<br />For Your Vehicle
            </motion.h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-64 bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
            <StatCard
              number="V8"
              label="Cylinder Configuration"
              description="Cylinder Configuration: V8"
              subdescription="Welcome to Autofix, your trusted partner in car care and services."
              delay={0}
            />

            <StatCard
              number="30"
              label="Fuel Efficiency"
              description="Fuel Efficiency: 30 mpg"
              subdescription="Welcome to Autofix, your trusted partner in car care and services."
              delay={0.2}
            />

            <StatCard
              number="7K"
              label="Max revolutions"
              description="Max RPM: 7,000"
              subdescription="Welcome to Autofix, your trusted partner in car care and services."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      <ServicesSection />
      <WhyChooseUsSection />
      <ServiceProcessSection />
      <NewsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

function ServicesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const services = [
    {
      category: 'Maintenance',
      title: 'Engine Repair',
      image: 'https://framerusercontent.com/images/eyODszukovVQtcknMnnuCymZxAQ.jpg',
      icon: 'https://framerusercontent.com/images/zWLjOYwvbDkh5FSYILwRPFQtl0.svg'
    },
    {
      category: 'Repair',
      title: 'Tire Repair',
      image: 'https://framerusercontent.com/images/V4ZGHoVyD2j3vvxXYlIu630WiWI.jpg',
      icon: 'https://framerusercontent.com/images/9lhbELP4RhvWqACOKdNLLA6Uek.svg'
    },
    {
      category: 'Diagnostics',
      title: 'Clutch Repair',
      image: 'https://framerusercontent.com/images/cm7HibXCYL9SUlr48YMQaGXfiM.jpg',
      icon: 'https://framerusercontent.com/images/9QFcFUYUbZlh5tp7T4clpuzTg.svg'
    },
    {
      category: 'Maintenance',
      title: 'Battery Repair',
      image: 'https://framerusercontent.com/images/pGAEWYqSNNErxrMVZoXiCi1fCEQ.jpg',
      icon: 'https://framerusercontent.com/images/53wy9BMLuBk5E9AOmMzEaMAGAlo.svg'
    },
    {
      category: 'Repair',
      title: 'Oil Change',
      image: 'https://framerusercontent.com/images/rW8synrD9Rg5Ge7ixwmvpLq3DHg.jpg',
      icon: 'https://framerusercontent.com/images/j3lGkcLKJebWrLt70yzcSb29hI.svg'
    },
    {
      category: 'Diagnostics',
      title: 'Radiator Service',
      image: 'https://framerusercontent.com/images/FZ5CspNFTweCUpbFC6DijxNT8Y.jpg',
      icon: 'https://framerusercontent.com/images/KMzvWVWWrbxCn9Bkif0FRKsMA.svg'
    },
    {
      category: 'Maintenance',
      title: 'Brake Repair',
      image: 'https://framerusercontent.com/images/lDUJss72vlLXxR0Vxc89a3ijg.jpg',
      icon: 'https://framerusercontent.com/images/xsOYkXzLY7a6BMx3gObtSHacn4.svg'
    }
  ];

  return (
    <section className="relative z-10 py-32 px-6 bg-black overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        animate={{ 
          rotate: -35,
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF4D24]/20 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />

      <div className="absolute top-32 right-10 w-[275px] h-[161px] opacity-10 pointer-events-none z-20 animate-spin-slow">
        <Image
          src="https://framerusercontent.com/images/I83KvEdvtTFcV4a2BYBjgMQ99GI.svg"
          alt="Background pattern"
          width={275}
          height={161}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-24">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-[2px] h-6 bg-[#FF4D24]" />
            <h6 className="text-base font-medium text-white tracking-wide uppercase">
              Discover the Passion and Expertise Behind Autofix
            </h6>
          </motion.div>

          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold leading-tight uppercase mb-16 max-w-5xl"
          >
            From Our Garage to Your Driveway: Autofix’s Journey to Superior Car Care and Customer Satisfaction
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[2px] h-6 bg-[#FF4D24]" />
                <h6 className="text-sm font-bold text-white uppercase tracking-widest">
                  Core Values
                </h6>
              </div>
              <p className="text-white/70 leading-relaxed">
                At Autofix, our values are the bedrock of our company. We uphold integrity in all our actions, believing that honesty and transparency build the foundation of trust with our customers and partners. We strive for excellence, constantly seeking.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[2px] h-6 bg-[#FF4D24]" />
                <h6 className="text-sm font-bold text-white uppercase tracking-widest">
                  Get to Know
                </h6>
              </div>
              <p className="text-white/70 leading-relaxed">
                Our goals at Autofix are designed to drive our continuous improvement and success. We aim to provide exceptional service that exceeds customer expectations, ensuring every interaction leaves a positive impression.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Slider */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                  <div className="relative group bg-[#111] border border-white/10 h-full">
                    {/* Icon Box */}
                    <div className="absolute top-0 left-0 z-20 w-16 h-16 bg-[#FF4D24] flex items-center justify-center border border-white/10 shadow-[0_2px_10px_0_rgba(255,77,36,0.25)] transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={service.icon}
                        alt="Icon"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>

                    {/* Category Label */}
                    <div className="absolute top-0 right-0 z-20 px-4 py-2 bg-white/10 border-l border-b border-white/10 backdrop-blur-sm">
                      <span className="text-xs font-medium text-white uppercase tracking-wider">
                        {service.category}
                      </span>
                    </div>

                    {/* Image */}
                    <div className="relative h-[300px] w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#333] via-[#FF4D24]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/40 to-transparent opacity-60" />
                    </div>

                    {/* Content */}
                    <div className="p-8 pt-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-[2px] h-6 bg-[#FF4D24]" />
                        <h5 className="text-xl font-bold text-white uppercase group-hover:text-[#FF4D24] transition-colors">
                          {service.title}
                        </h5>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">
                        At Autofix, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Autofix for all your car care needs.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-end gap-2 mt-8">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-colors bg-black hover:bg-white/5"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 flex items-center justify-center border border-white/10 text-white hover:text-white hover:border-white/30 transition-colors bg-black hover:bg-white/5"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function NavLink({
  href,
  label,
  active,
  onClick,
  showIcon = false
}: {
  href: string;
  label: string;
  active: boolean;
  onClick: () => void;
  showIcon?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group relative px-8 py-4 transition-colors"
    >
      <div className="flex items-center gap-1">
        <span className={`text-lg font-bold uppercase transition-colors ${active ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
          {label}
        </span>
        {showIcon && (
          <span className="text-[#FF4D24] text-lg leading-none">+</span>
        )}
      </div>
    </Link>
  );
}

function StatCard({
  number,
  label,
  description,
  subdescription,
  delay = 0
}: {
  number: string;
  label: string;
  description: string;
  subdescription: string;
  delay?: number;
}) {
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="relative h-[500px] group"
    >
      {/* Big Background Number */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] lg:text-[20rem] font-bold leading-none select-none font-sans tracking-tighter w-full text-center transition-transform duration-700 group-hover:scale-110 group-hover:text-white/5"
        style={{
          WebkitTextStroke: '6px rgba(255, 255, 255, 0.2)',
          color: '#0a0a0a'
        }}
      >
        {number}
      </div>

      {/* Label - Exact Midpoint */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10 pl-4 w-full">
        <div className="flex items-center gap-4">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delay + 0.2 }}
            className="w-[4px] bg-[#FF4D24]" 
          />
          <h6 className="text-base font-bold text-white uppercase tracking-widest">
            {label}
          </h6>
        </div>
      </div>

      {/* Description - Lower */}
      <div className="absolute top-1/2 left-0 z-10 pl-4 w-full mt-48">
        <div className="space-y-2">
          <p className="text-white/90 text-xl font-bold">
            {description}
          </p>
          <p className="text-white/50 text-lg leading-relaxed max-w-[300px]">
            {subdescription}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
