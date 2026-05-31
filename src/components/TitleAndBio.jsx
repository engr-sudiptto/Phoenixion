import React from 'react';
import { motion } from 'motion/react';

const TitleAndBio = ({ title, bio }) => {
  return (
    <div>
      {/* ======= services headLine and little bio ======  */}
      <div className="mt-10 md:mt-20">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl text-gray-600 dark:text-gray-400 md:text-[40px] lg:text-6xl"
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-sm px-2 text-gray-400 mt-3 lg:text-lg"
        >
          {bio}
        </motion.p>
      </div>
    </div>
  );
};

export default TitleAndBio;
