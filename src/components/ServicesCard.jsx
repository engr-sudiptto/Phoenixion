import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

const ServicesCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = e => {
    const bounds = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      ref={cardRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      className="relative p-8 dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden "
    >
      {/* Spotlight */}
      <div
        className={`absolute pointer-events-none blur-2xl rounded-full 
        bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 
        w-52 h-52 transition-opacity duration-300 
        ${visible ? 'opacity-60' : 'opacity-0'}`}
        style={{
          top: position.y - 100,
          left: position.x - 100,
        }}
      />

      <div className="relative z-10 xl:flex gap-5 items-center">
        <div className="w-14 h-14 rounded-full dark:bg-gray-200/90 flex items-center justify-center shadow-lg mb-3 ">
          <img
            className="w-8 h-8 object-contain "
            src={service.icon}
            alt={service.title}
          />
        </div>

        <div>
          <h4 className="text-lg font-bold text-gray-700 dark:text-white">
            {service.title}
          </h4>

          <p className="text-sm text-gray-500 mt-1">{service.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
