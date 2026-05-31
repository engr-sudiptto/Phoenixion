import React from 'react';
import microsoft from '../assets/microsoft.png';
import zoom from '../assets/zoom.png';
import rakuten from '../assets/rakuten.png';
import coinbase from '../assets/coinbase.png';
import airbnb from '../assets/airbnb.png';
import google from '../assets/google.png';
import { motion } from 'motion/react';

const TrustedBy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: true }}
      className="lg:py-15 md:py-5 pb-15"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center tracking-widest text-sm lg:text-lg dark:text-gray-100 mb-5"
      >
        Trusted by Leading Companies
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="sm:flex sm:gap-10 items-center justify-center lg:mt-10 sm:mt-7 grid grid-cols-3 gap-3 md:px-5 lg:w-3/5 lg:m-auto"
      >
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-30 sm:w-20 w-15 m-auto mt-5"
          src={microsoft}
        />
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true }}
          className="lg:w-25 sm:w-16 w-15 m-auto mt-5"
          src={zoom}
        />
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-30 sm:w-20 w-15 m-auto mt-5"
          src={rakuten}
        />
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-30 sm:w-20 w-15 m-auto mt-5"
          src={coinbase}
        />
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
          viewport={{ once: true }}
          className="lg:w-30 sm:w-20 w-15 m-auto mt-5"
          src={airbnb}
        />
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.2 }}
          viewport={{ once: true }}
          className="lg:w-30 sm:w-20 w-15 m-auto mt-5"
          src={google}
        />
      </motion.div>
    </motion.div>
  );
};

export default TrustedBy;
