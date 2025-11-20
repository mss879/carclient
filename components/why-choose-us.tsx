'use client';

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import Image from 'next/image'
import { motion } from 'framer-motion'

export function WhyChooseUsSection() {
  return (
    <section className="w-full bg-black text-white relative z-10">
       {/* Row 1 */}
       <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:h-[800px]">
          {/* Left: Content */}
          <div className="flex flex-col justify-center p-8 lg:p-24 bg-black order-2 lg:order-1 border-r border-white/10">
             <motion.div 
               initial={{ x: -50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="max-w-xl w-full"
             >
                {/* Label */}
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-1 h-8 bg-[#FF4D24]" />
                   <span className="text-white font-medium uppercase tracking-wider text-sm">Discover the Autofix Advantage</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase leading-none">Why Choose Autofix?</h2>
                <p className="text-[#A5A5A5] mb-12 leading-relaxed text-lg">
                   At Autofix, we prioritize your vehicle’s performance and your satisfaction. Our expert team delivers top-quality service using the latest technology and industry best practices. We offer comprehensive automotive care, from routine maintenance to complex repairs, ensuring your car runs smoothly and efficiently.
                </p>

                {/* Progress Bars */}
                <div className="space-y-10">
                   <div className="space-y-4">
                      <div className="flex justify-between text-sm font-bold uppercase tracking-widest">
                         <span>Expert Technicians</span>
                         <span>90%</span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      >
                        <Progress value={90} className="h-[2px] bg-[#333] rounded-none" indicatorClassName="bg-[#FF4D24] transition-all duration-1000 ease-out" />
                      </motion.div>
                   </div>
                   <div className="space-y-4">
                      <div className="flex justify-between text-sm font-bold uppercase tracking-widest">
                         <span>Quick Turnaround</span>
                         <span>85%</span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                      >
                        <Progress value={85} className="h-[2px] bg-[#333] rounded-none" indicatorClassName="bg-[#FF4D24] transition-all duration-1000 ease-out" />
                      </motion.div>
                   </div>
                   <div className="space-y-4">
                      <div className="flex justify-between text-sm font-bold uppercase tracking-widest">
                         <span>Quality Assurance</span>
                         <span>95%</span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                      >
                        <Progress value={95} className="h-[2px] bg-[#333] rounded-none" indicatorClassName="bg-[#FF4D24] transition-all duration-1000 ease-out" />
                      </motion.div>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* Right: Video */}
          <div className="relative h-[400px] lg:h-full order-1 lg:order-2 overflow-hidden">
             <motion.video
               initial={{ scale: 1.2, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2 }}
               src="https://videos.pexels.com/video-files/5309381/5309381-hd_1920_1080_25fps.mp4"
               autoPlay
               loop
               muted
               playsInline
               className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-black/20" />
          </div>
       </div>

       {/* Row 2 */}
       <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:h-[800px]">
          {/* Left: Image */}
          <div className="relative h-[400px] lg:h-full overflow-hidden">
             <motion.div
               initial={{ scale: 1.2, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2 }}
               className="relative w-full h-full"
             >
                <Image
                  src="https://framerusercontent.com/images/8HTJOEvTQcpSUcuWMKmT00QXXWI.jpg"
                  alt="Red Sport car"
                  fill
                  className="object-cover"
                />
             </motion.div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center p-8 lg:p-24 bg-black border-l border-white/10">
             <motion.div 
               initial={{ x: 50, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="max-w-xl w-full"
             >
                {/* Label */}
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-1 h-8 bg-[#FF4D24]" />
                   <span className="text-white font-medium uppercase tracking-wider text-sm">Quick FAQs for Easy Answers</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase leading-none">All You Need to Know</h2>
                <p className="text-[#A5A5A5] mb-12 leading-relaxed text-lg">
                   At Autofix, we prioritize your vehicle’s performance and your satisfaction. Our expert team delivers top-quality service using the latest technology and industry best practices. We offer comprehensive automotive care, from routine maintenance to complex repairs, ensuring your car runs smoothly and efficiently.
                </p>

                {/* Accordion */}
                <Accordion type="single" collapsible className="w-full space-y-0">
                   {faqItems.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <AccordionItem value={`item-${index}`} className="border-t border-white/10 last:border-b bg-transparent px-0">
                           <AccordionTrigger className="hover:no-underline py-6 text-sm font-bold uppercase tracking-widest text-white hover:text-[#FF4D24] transition-colors">
                              {item.question}
                           </AccordionTrigger>
                           <AccordionContent className="text-[#A5A5A5] pb-6 text-base leading-relaxed">
                              {item.answer}
                           </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                   ))}
                </Accordion>
             </motion.div>
          </div>
       </div>
    </section>
  )
}

const faqItems = [
   { question: "What services do you offer?", answer: "We offer a wide range of services including routine maintenance, engine repairs, brake services, and more." },
   { question: "How do I schedule an appointment?", answer: "You can schedule an appointment by calling us directly or using our online booking system." },
   { question: "How do I maintain my car’s battery?", answer: "Regular checks and keeping terminals clean can help maintain your battery life." },
   { question: "What does the check engine light mean?", answer: "The check engine light indicates a potential issue with your vehicle's engine or emissions system." },
]
