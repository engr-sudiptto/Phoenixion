import React from 'react';

const Work = ({ work, index }) => {
  return (
    <div
      className=" rounded-2xl overflow-clip shadow-2xl bg-transparent dark:shadow-blue-200/90 hover:-translate-y-2 duration-300 border-t-2 border-b-2 border-gray-400/50 pt-2"
    >
      <div className="w-full h-60 content-center">
        <img
          className="w-[90%] h-[90%] m-auto object-cover rounded-2xl"
          src={work.bgImage}
        />
      </div>
      <h2 className="text-2xl px-3 xl:px-6 mt-5 xl:mt-8  text-gray-700 dark:text-gray-300">
        {work.title}
      </h2>
      <p className="text-sm py-3 px-4 xl:px-6 xl:pb-8 text-gray-500 dark:text-gray-400">
        {work.description}
      </p>
    </div>
  );
};

export default Work;
