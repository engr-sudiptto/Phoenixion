import React from 'react';
import advertisingMark from '../assets/service1.png';
import ContentMarketingMark from '../assets/service2.png';
import ContentWritingMark from '../assets/service3.png';
import SocialMediaMark from '../assets/service4.png';
import ServicesCard from './ServicesCard';
import TitleAndBio from './TitleAndBio';
import { motion } from 'motion/react';

const Services = () => {
  const servicesData = [
    {
      title: 'Advertising',
      description:
        'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: advertisingMark,
    },
    {
      title: 'Content Marketing',
      description: 'We help you execute your plan and deliver results.',
      icon: ContentMarketingMark,
    },
    {
      title: 'Content Writing',
      description:
        'We help you create a marketing strategy that drives results.',
      icon: ContentWritingMark,
    },
    {
      title: 'Social Media',
      description:
        'We help you build a strong social presence and engage with your audience.',
      icon: SocialMediaMark,
    },
  ];
  const title = 'How can we help?';
  const bio =
    'From strategy to execution, we craft digital solutions that move your business forward';
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="services"
    >
      {/* ======= services headLine and little bio ======  */}
      <TitleAndBio title={title} bio={bio} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] 2xl:w-2/3 m-auto lg:mt-20 mt-10 mb-20">
        {servicesData.map((service, index) => (
          <ServicesCard key={index} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
