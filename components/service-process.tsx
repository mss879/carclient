'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function ServiceProcessSection() {
  return (
    <section className="relative w-full bg-black text-white pt-40 lg:pt-64 pb-24 lg:pb-32">
       {/* Background Elements */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Bottom Left Glow */}
          <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#FF4D24]/15 blur-[150px] rounded-full" />
          
          {/* Spinning Pattern - Bottom Left */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-0 w-[400px] h-[400px] opacity-30 z-0"
          >
            <Image
              src="https://framerusercontent.com/images/I83KvEdvtTFcV4a2BYBjgMQ99GI.svg"
              alt="Background pattern"
              width={275}
              height={161}
              className="w-full h-full object-contain"
            />
          </motion.div>
       </div>

       <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative">
             {/* Left Column - Sticky Content */}
             <div className="lg:w-1/3 sticky top-48 h-fit">
                <div>
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-1 h-8 bg-[#FF4D24]" />
                      <span className="text-white font-medium uppercase tracking-wider text-sm">Your Vehicle’s Service Adventure</span>
                   </div>

                   <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase leading-[0.9]">
                      Drive Through Our Service Process
                   </h2>

                   <Link 
                      href="/services"
                      className="inline-flex items-center justify-center px-8 py-4 bg-[#FF4D24] border-[3px] border-[#FF4D24] text-[#F2F3EA] font-bold uppercase tracking-wide transition-all hover:shadow-[0_0_40px_0_rgba(255,77,36,0.3)]"
                   >
                      Best Services
                   </Link>
                </div>
             </div>

             {/* Right Column - Cards Grid */}
             <div className="lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {processSteps.map((step, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative h-[400px] overflow-hidden border border-white/10 bg-[#111]"
                      >
                         {/* Background Image with Skew Effect */}
                         <div className="absolute inset-0 overflow-hidden">
                            <div className="relative w-full h-full transform scale-125 -skew-x-6 transition-transform duration-700 group-hover:skew-x-0 group-hover:scale-110">
                               <Image
                                  src={step.image}
                                  alt={step.title}
                                  fill
                                  className="object-cover"
                               />
                            </div>
                         </div>

                         {/* Overlays */}
                         <div className="absolute inset-0 bg-[#111]/75 transition-opacity duration-500 group-hover:opacity-60" />
                         <div className="absolute inset-0 bg-gradient-to-tr from-[#FF4D24]/30 via-transparent to-black/50 opacity-100" />

                         {/* Content */}
                         <div className="relative h-full p-8 flex flex-col justify-between z-20">
                            {/* Number Badge */}
                            <div className="w-12 h-12 rounded-full bg-[#FF4D24] border border-white/10 flex items-center justify-center">
                               <span className="text-white font-bold text-sm">{step.number}</span>
                            </div>

                            {/* Text */}
                            <div>
                               <h4 className="text-2xl font-bold uppercase mb-4 text-white group-hover:text-[#FF4D24] transition-colors">
                                  {step.title}
                               </h4>
                               <p className="text-[#A5A5A5] text-sm leading-relaxed">
                                  {step.description}
                               </p>
                            </div>
                         </div>
                      </motion.div>
                   ))}
                </div>
             </div>
          </div>
       </div>
    </section>
  )
}

const processSteps = [
   {
      number: "01",
      title: "Book an Appointment",
      description: "At Autofix, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.",
      image: "https://framerusercontent.com/images/jf5Edk6UnnAYbFaVz0pd2pfgwM.jpg"
   },
   {
      number: "02",
      title: "Choose Your Service",
      description: "At Autofix, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.",
      image: "https://framerusercontent.com/images/CHxiZJgmHuz1HyaOqLrjkyXfuWk.jpg"
   },
   {
      number: "03",
      title: "Confirm Your Request",
      description: "At Autofix, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.",
      image: "https://framerusercontent.com/images/6S1PRaCBleEPYp8RUipsLXq38.jpg"
   },
   {
      number: "04",
      title: "Drop Off Your Vehicle",
      description: "At Autofix, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.",
      image: "https://framerusercontent.com/images/K3xd8CXmyvy3Mw1k6EowpoToeQ.jpg"
   },
   {
      number: "05",
      title: "Service and Repair",
      description: "At Autofix, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.",
      image: "https://framerusercontent.com/images/oLRD2PRr1Q5k9XTG8WIF3IuoeI.jpg"
   },
   {
      number: "06",
      title: "Review and Pick Up",
      description: "At Autofix, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.",
      image: "https://framerusercontent.com/images/i8EyTJe1RV5Jo4o4vXJAaKZoqM.jpg"
   }
]
