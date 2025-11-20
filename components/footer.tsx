'use client';

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  CarFront,
  Settings,
  CircleDollarSign,
  Key,
  Megaphone,
  Phone,
  MessageCircle,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Send,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-black text-white pt-24 pb-12 overflow-hidden">
      {/* Background Gradients/Blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF4D24]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF4D24]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          {/* Top Left: Explore Offerings */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h5 className="text-xl font-bold uppercase tracking-wider">
              Explore Our Full Range of Offerings
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {/* Column 1 */}
              <div className="space-y-4">
                <FooterLink
                  href="/about-us"
                  icon={<CarFront />}
                  label="Discover Autofix"
                />
                <FooterLink
                  href="/services"
                  icon={<Settings />}
                  label="Our Services"
                />
                <FooterLink
                  href="/pricing"
                  icon={<CircleDollarSign />}
                  label="Pricing Plans"
                />
                <FooterLink
                  href="/join-us"
                  icon={<Key />}
                  label="Join Our Team"
                />
                <FooterLink
                  href="/blog"
                  icon={<Megaphone />}
                  label="Latest News"
                />
              </div>
              {/* Column 2 */}
              <div className="space-y-4">
                <FooterLink
                  href="tel:+18001234567"
                  icon={<Phone />}
                  label="+1-800-123-4567"
                />
                <FooterLink
                  href="tel:+16307538513"
                  icon={<Phone />}
                  label="+1-630-753-8513"
                />
                <FooterLink
                  href="https://x.com"
                  icon={<MessageCircle />}
                  label="Tweet Us @CarSupport"
                />
                <FooterLink
                  href="mailto:support@example.com"
                  icon={<Mail />}
                  label="support@example.com"
                />
                <FooterLink
                  href="mailto:contact@example.com"
                  icon={<Mail />}
                  label="contact@example.com"
                />
              </div>
            </div>
          </motion.div>

          {/* Top Right: Connect & Locate */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h5 className="text-xl font-bold uppercase tracking-wider">
              Connect & Locate Us
            </h5>
            <div className="flex gap-4">
              {/* Map Image */}
              <div className="relative flex-1 border border-white/10 bg-black overflow-hidden min-h-[300px]">
                <Image
                  src="https://framerusercontent.com/images/j9MEhyZV8bjDvecYFffiGXXS0vE.png"
                  alt="World Map"
                  fill
                  className="object-cover object-center opacity-80"
                />
                {/* Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <MapPin className="w-12 h-12 text-[#FF4D24] fill-[#FF4D24] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" />
                  </motion.div>
                </div>
              </div>
              {/* Social Buttons */}
              <div className="flex flex-col gap-4">
                <SocialButton href="https://instagram.com" icon={<Instagram />} />
                <SocialButton href="https://facebook.com" icon={<Facebook />} />
                <SocialButton href="https://x.com" icon={<Twitter />} />
                <SocialButton href="https://linkedin.com" icon={<Linkedin />} />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 pt-12">
          {/* Bottom Left: Newsletter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <h5 className="text-xl font-bold uppercase tracking-wider">
              Stay Updated with Carsy!
            </h5>
            <p className="text-gray-400 leading-relaxed max-w-xl text-sm">
              Subscribe to our newsletter for the latest news, exclusive offers,
              and expert tips on car care. Join our community of car enthusiasts
              and never miss out on important updates. Enter your email below to
              stay connected with Autofix!
            </p>
            <form className="flex gap-0 max-w-xl relative group">
              <div className="relative flex-grow">
                <Input
                  type="email"
                  placeholder="ENTER YOUR MAIL"
                  className="bg-black border-white/10 border-r-0 rounded-none h-14 text-white placeholder:text-gray-500 focus-visible:ring-0 focus-visible:border-[#FF4D24] px-6 uppercase tracking-wider text-sm transition-colors group-hover:border-white/20"
                />
              </div>
              <Button
                type="submit"
                className="bg-[#FF4D24] hover:bg-[#FF4D24]/90 h-14 w-16 rounded-none p-0 flex items-center justify-center transition-transform hover:-translate-y-1"
              >
                <Send className="w-5 h-5 text-white" />
              </Button>
            </form>
          </motion.div>

          {/* Bottom Right: Office Address */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-8"
          >
            <h5 className="text-xl font-bold uppercase tracking-wider">
              Office Address
            </h5>
            <div className="space-y-4 text-gray-400 text-sm">
              <p>
                <span className="text-white font-medium">Visit Us:</span>{" "}
                <a href="#" className="hover:text-[#FF4D24] transition-colors">
                  1234 Main St, Los Angeles, USA
                </a>
              </p>
              <p>
                <span className="text-white font-medium">Our Office:</span>{" "}
                <a href="#" className="hover:text-[#FF4D24] transition-colors">
                  7 Elm St, San Bernardino, USA
                </a>
              </p>
              <p>
                <span className="text-white font-medium">Headquarters:</span>{" "}
                <a href="#" className="hover:text-[#FF4D24] transition-colors">
                  1 Tree Ave, New Jersey, USA
                </a>
              </p>
            </div>
            <div className="space-y-2 text-gray-400 text-sm pt-4 border-t border-white/5">
              <p>
                <span className="text-white font-medium">
                  Monday to Friday:
                </span>{" "}
                8:00 AM - 6:00 PM
              </p>
              <p>
                <span className="text-white font-medium">
                  Saturday/Sunday:
                </span>{" "}
                9:00 AM - 4:00 PM
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-right text-gray-500 text-sm">
          <p>
            Made by <span className="text-white font-bold">ARC AI</span> Powered by Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center h-14 bg-black border border-white/10 group relative overflow-hidden hover:border-[#FF4D24]/50 transition-colors"
    >
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#FF4D24]" />
      <div className="w-14 h-full flex items-center justify-center border-r border-white/10 text-white group-hover:text-[#FF4D24] transition-colors">
        {React.cloneElement(icon as React.ReactElement, {
          size: 20,
          strokeWidth: 1.5,
        })}
      </div>
      <div className="flex-1 flex items-center justify-center px-4">
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white group-hover:text-[#FF4D24] transition-colors text-center">
          {label}
        </span>
      </div>
    </Link>
  );
}

function SocialButton({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="w-20 h-20 flex items-center justify-center bg-[#FF4D24] hover:bg-[#FF4D24]/80 text-white transition-all hover:-translate-y-1"
    >
      {React.cloneElement(icon as React.ReactElement, {
        size: 24,
        strokeWidth: 1.5,
      })}
    </Link>
  );
}
