import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

const ServicesCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative p-8 dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden "
    >
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
