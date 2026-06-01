import React from 'react';
import TitleAndBio from './TitleAndBio';
import member1 from '../assets/team_member-1.jpg';
import member2 from '../assets/team_member-2.jpg';
import member3 from '../assets/team_member-3.jpg';
import member4 from '../assets/team_member-4.jpg';
import member5 from '../assets/team_member-5.jpg';
import member6 from '../assets/team_member-6.jpg';
import member7 from '../assets/team_member-7.jpg';
import member8 from '../assets/team_member-8.jpg';
import { motion } from 'motion/react';

const Teams = () => {
  const title = 'Meet the team';
  const bio =
    'A prssionate team of digitsl experts dedicated to your brands sucess.';

  const teamData = [
    {
      name: 'Haley Carter',
      degination: 'CEO & founder',
      image: member1,
    },
    {
      name: 'James Walker',
      degination: 'Ads manager',
      image: member2,
    },
    {
      name: 'Jassica Morgan',
      degination: 'Vice president',
      image: member3,
    },
    {
      name: 'Ashley Bennett',
      degination: 'Merketting & sales',
      image: member4,
    },
    {
      name: 'Emily Parker',
      degination: 'Content marketer',
      image: member5,
    },
    {
      name: 'Ryan Mitchell',
      degination: 'Content writter',
      image: member6,
    },
    {
      name: 'Megan Brooks',
      degination: 'Performance manager',
      image: member7,
    },
    {
      name: 'Amber Foster',
      degination: 'Senior writer',
      image: member8,
    },
  ];

  return (
    <div className="mb-30">
      <TitleAndBio title={title} bio={bio} />

      {/* ============= member card section =========  */}
      <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 2xl:w-3/4 m-auto gap-5 mt-10 px-3 lg:mt-15 xl:mt-20">
        {teamData.map((member, index) => (
          <div
            key={index}
            index={index}
            member={member}
            className="w-full h-50 lg:h-30 border border-gray-300 dark:border-gray-500 shadow-[0px_10px_10px_#00000010] rounded-lg flex items-center flex-col lg:flex-row justify-center gap-2 lg:gap-5 hover:-translate-y-2 duration-150"
          >
            <div className="w-18 h-18 rounded-full overflow-hidden ">
              <img className="object-cover w-18 h-18 " src={member.image} />
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-lg text-gray-600 dark:text-gray-300">
                {member.name}
              </h3>
              <p className="text-sm text-gray-400">{member.degination}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
