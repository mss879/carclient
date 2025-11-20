'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface NewsItem {
  id: number;
  date: string;
  author: string;
  title: string;
  description: string;
  image: string;
  link: string;
  imagePosition: 'left' | 'right';
}

const newsItems: NewsItem[] = [
	{
		id: 1,
		date: 'July 14, 2024',
		author: 'Drew Adams',
		title: 'BENEFITS OF REGULAR OIL CHANGES: WHY ESSENTIAL',
		description:
			'Stay informed about new car releases! Trust Autofix for all your automotive news needs.',
		image:
			'https://framerusercontent.com/images/qfSKwe8YByLjlMYZEH2uIxCArs.jpg',
		link: '/blog/benefits-of-regular-oil-changes-why-essential',
		imagePosition: 'left',
	},
	{
		id: 2,
		date: 'July 19, 2024',
		author: 'Quinn Bailey',
		title: 'DIY CAR CARE: SIMPLE FIXES YOU CAN EASILY DO AT HOME',
		description:
			'Stay informed about new car releases! Trust Autofix for all your automotive news needs.',
		image:
			'https://framerusercontent.com/images/BmRxVCMuoD0HfiF7qbYeTVM3uY.jpg',
		link: '/blog/diy-car-care-simple-fixes-you-can-easily-do-at-home',
		imagePosition: 'left',
	},
	{
		id: 3,
		date: 'July 3, 2024',
		author: 'Taylor Morgan',
		title: 'HOW TO EXTEND THE LIFE OF YOUR VEHICLE: EXPERT TIPS',
		description:
			'Stay informed about new car releases! Trust Autofix for all your automotive news needs.',
		image:
			'https://framerusercontent.com/images/JX1m4sBtvuHABcaVRvjSe6KeiVQ.jpg',
		link: '/blog/how-to-extend-the-life-of-your-vehicle-expert-tips',
		imagePosition: 'right',
	},
	{
		id: 4,
		date: 'July 20, 2024',
		author: 'Riley Carter',
		title: 'WHY REGULAR TIRE ROTATION MATTERS FOR VEHICLE SAFETY',
		description:
			'Stay informed about new car releases! Trust Autofix for all your automotive news needs.',
		image:
			'https://framerusercontent.com/images/FOxANYEsA8qDixGhxwOpOYffUF4.jpg',
		link: '/blog/why-regular-tire-rotation-matters-for-vehicle-safety',
		imagePosition: 'right',
	},
];

export function NewsSection() {
	return (
		<section className="w-full bg-black py-20">
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 md:grid-cols-2 w-full">
					{newsItems.map((item, index) => (
						<motion.div
							key={item.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<Link
								href={item.link}
								className={`group flex flex-col ${
									item.imagePosition === 'right'
										? 'md:flex-row-reverse'
										: 'md:flex-row'
								} bg-[#111111] border border-white/10 overflow-hidden hover:border-[#FF4D24]/50 transition-colors duration-300 h-full`}
							>
								{/* Image Container */}
								<div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto group-hover:z-10">
									<Image
										src={item.image}
										alt={item.title}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									{/* Overlay Gradient - Matching the design */}
									<div className="absolute inset-0 bg-[linear-gradient(225deg,rgba(255,77,36,0.45)_0%,rgba(0,0,0,0.03)_28%,rgba(0,0,0,0)_64%,rgba(255,77,36,0.75)_100%)] opacity-100" />

									{/* Circle Icon Overlay (visible on hover) */}
									<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#111] rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
										<div className="w-2 h-2 bg-white rounded-full" />
									</div>
								</div>

								{/* Content Container */}
								<div className="relative w-full md:w-1/2 p-8 flex flex-col justify-between border-l border-white/10 bg-[#111111] z-0">
									{/* Decorative Cube - Centered vertically on the border */}
									{item.imagePosition === 'left' && (
										<div className="absolute top-1/2 left-0 w-3 h-3 bg-[#111111] border-l border-b border-white/10 -translate-x-1/2 -translate-y-1/2 rotate-45 z-20" />
									)}
									{item.imagePosition === 'right' && (
										<div className="absolute top-1/2 right-0 w-3 h-3 bg-[#111111] border-r border-t border-white/10 translate-x-1/2 -translate-y-1/2 rotate-45 z-20" />
									)}

									<div className="space-y-6">
										{/* Header: Date & Author */}
										<div className="flex items-center gap-3 text-sm text-white/60 font-medium">
											<span>{item.date}</span>
											<div className="w-1.5 h-1.5 bg-[#FF4D24]" />
											<span>By {item.author}</span>
										</div>

										{/* Title */}
										<h3 className="text-2xl font-bold text-white leading-tight group-hover:text-[#FF4D24] transition-colors duration-300 uppercase">
											{item.title}
										</h3>

										{/* Description */}
										<p className="text-[#A5A5A5] text-sm leading-relaxed">
											{item.description}
										</p>
									</div>

									{/* Read More Link */}
									<div className="flex items-center gap-2 text-[#FF4D24] font-bold uppercase text-sm tracking-wider mt-6 group-hover:gap-4 transition-all duration-300">
										<span>Read More</span>
										<ArrowRight className="w-4 h-4" />
									</div>
								</div>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
