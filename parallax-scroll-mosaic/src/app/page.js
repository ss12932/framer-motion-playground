"use client";

import Image from "next/image";
import Column from "@/app/components/column";
import { images } from "@/config/images";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import useDimension from "@/hooks/use-dimension";

export default function Home() {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <div className="h-screen"></div>
      <div
        ref={container}
        className="h-[175vh] bg-[#333333] flex gap-[2vw] p-[2vw] overflow-hidden [&>*:nth-of-type(1)]:-top-[45%] [&>*:nth-of-type(2)]:-top-[95%] [&>*:nth-of-type(3)]:-top-[45%] [&>*:nth-of-type(4)]:-top-[75%]"
      >
        <Column images={[images[0], images[1], images[2]]} y={y1} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      <div className="h-screen"></div>
    </main>
  );
}
