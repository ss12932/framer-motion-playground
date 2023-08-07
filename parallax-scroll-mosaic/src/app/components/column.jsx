"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Column = ({ images, y = 0 }) => {
  return (
    <motion.div
      style={{ y }}
      className="w-1/4 h-full flex flex-col gap-[2vw] min-w-[250px] relative "
    >
      {images.map((src, index) => {
        return (
          <div key={index} className="w-full h-full relative">
            <Image
              className="object-cover rounded-lg hover:scale-105 transition duration-500"
              src={`/images/${src}`}
              alt="image"
              fill
            />
          </div>
        );
      })}
    </motion.div>
  );
};

export default Column;
