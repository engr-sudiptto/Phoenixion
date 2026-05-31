import React from 'react';
import teamMember1 from '../assets/team_member-1.jpg';
import teamMember2 from '../assets/team_member-5.jpg';
import teamMember3 from '../assets/team_member-3.jpg';
import teamMember4 from '../assets/team_member-8.jpg';
import heroImg from '../assets/agency.png';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <div id="hero" className="pb-20 lg:pb-10">
      {/* ====== group profile button ======= */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        viewport={{ once: true }}
        className=" flex lg:w-85 w-60 lg:h-12 h-9 lg:gap-3.5 gap-2 border m-auto lg:mt-20 mt-5 border-gray-400 rounded-full items-center justify-center dark:border-gray-500 cursor-pointer"
      >
        <div className="flex">
          <img
            className="lg:w-8.5 w-6 lg:h-8.5 h-6 rounded-full lg:border-3 border-2 border-gray-200 dark:border-gray-300 dark:border-2"
            src={teamMember1}
          />
          <img
            className="lg:w-8.5 w-6 lg:h-8.5 h-6 rounded-full lg:border-3 border-2 border-gray-200 dark:border-gray-300 dark:border-2 -ml-2.5"
            src={teamMember2}
          />
          <img
            className="lg:w-8.5 w-6 lg:h-8.5 h-6 rounded-full lg:border-3 border-2 border-gray-200 dark:border-gray-300 dark:border-2 -ml-2"
            src={teamMember3}
          />
          <img
            className="lg:w-8.5 w-6 lg:h-8.5 h-6 rounded-full lg:border-3 border-2 border-gray-200 dark:border-gray-300 dark:border-2 -ml-1.5"
            src={teamMember4}
          />
        </div>
        <p className="lg:text-sm text-xs text-gray-500 dark:text-white">
          Trusted by 10k+ people
        </p>
      </motion.section>
      {/* ======= hero hade line section =======  */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="px-2 text-center text-4xl sm:text-5xl md:6xl lg:text-[84px] mt-5 text-gray-600 dark:text-gray-200 max-w-5xl m-auto lg:leading-30 leading-11 md:leading-17"
      >
        Turning inagination into <br />
        <span className="bg-linear-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
          Digital
        </span>
        impact.
      </motion.h1>
      {/* ======== description section =========  */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm sm:text-lg max-w-xl m-auto mt-5 lg:mt-10 text-gray-500 dark:text-gray-400 px-2"
      >
        Creating meaningful connections and turning big ideas into interactive
        digital experiences.
      </motion.p>
      {/* ======== hero image ========  */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        viewport={{ once: true }}
        className="w-full lg:mt-8 relative mt-3"
      >
        <img
          src={heroImg}
          alt="main hero image"
          className="xl:w-full lg:h-170 max-w-6xl m-auto object-cover rounded-xl xl:rounded-4xl lg:mt-20 w-[95%] h-auto mt-10 "
        />
      </motion.div>
    </div>
  );
};

export default Hero;
