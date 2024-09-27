import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import Link from 'next/link';
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Home() {
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-full text-center px-4">
        <TextHoverEffect text="Dhaarun Abhimanyu S" />
      </div>
      <Link href="/about">
  <button className="p-[3px] relative mt-8">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
    <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
      About me
    </div>
  </button>
</Link>
    </div>
  );
}