'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://framerusercontent.com/images/CO2wIWVIYilpsLiXaYH4PtSn0pU.jpg"
          alt="Inner banner CTA Form"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 flex justify-end">
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-[600px] relative"
        >
            {/* The Frame/Border with Corner Squares */}
            <div className="absolute -inset-6 md:-inset-10 border border-white/10 pointer-events-none">
                {/* Top Left */}
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#FF4D24]" />
                {/* Top Right */}
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-[#FF4D24]" />
                {/* Bottom Left */}
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-[#FF4D24]" />
                {/* Bottom Right */}
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-[#FF4D24]" />
            </div>

            {/* Content */}
            <div className="relative space-y-8 p-4">
                {/* Header */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-[2px] h-5 bg-[#FF4D24]" />
                        <span className="text-sm font-medium tracking-wider text-white uppercase">
                            Book Your Appointment Today
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white uppercase leading-none tracking-tight">
                        Upgrade Your Ride!
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                        Schedule your service appointment today to ensure your vehicle receives top-notch care from our expert technicians. Don't wait – keep your car running smoothly with a quick and easy booking.
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-4">
                    <div className="relative">
                        <Input 
                            type="tel" 
                            placeholder="PHONE" 
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-14 rounded-none focus-visible:ring-0 focus-visible:border-[#FF4D24] uppercase tracking-wider px-4"
                        />
                    </div>
                    <Button 
                        className="w-full bg-[#FF4D24] hover:bg-[#FF4D24]/90 text-white font-bold h-14 rounded-none uppercase tracking-wider text-sm transition-transform hover:-translate-y-1"
                    >
                        Let's Get Started!
                    </Button>
                </form>
            </div>
        </motion.div>
      </div>
    </section>
  );
}

