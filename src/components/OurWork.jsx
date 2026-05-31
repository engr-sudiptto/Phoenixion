import React from 'react';
import TitleAndBio from './TitleAndBio';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import Work from './Work';

const OurWork = () => {
  const title = 'Our Latest Work';
  const bio =
    'From strategy to execution, we craft digital solutions that move your business forward.';

  const workData = [
    {
      title: 'Mobile app marketing',
      description:
        'We turn bold ideas into powerful digital solutions that connect, engage...',
      bgImage: project1,
    },
    {
      title: 'Dashboard management',
      description: 'We help you execute your plan and deliver results.',
      bgImage: project3,
    },
    {
      title: 'Fitness app promotion',
      description:
        'We help you build a strong social presence and engage with your audience.',
      bgImage: project2,
    },
  ];

  return (
    <div id="ourWork" className="xl:mt-30 mb-30">
      <TitleAndBio title={title} bio={bio} />

      {/* ================ work card ==================  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 2xl:w-2/3 m-auto mt-10 w-full px-2 md:px-10 lg:grid-cols-3 lg:gap-5 2xl:gap-10">
        {workData.map((work, index) => (
          <Work key={index} work={work} index={index} />
        ))}
      </div>
    </div>
  );
};

export default OurWork;
