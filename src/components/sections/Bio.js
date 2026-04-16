import React from 'react';
import { useState } from 'react';

import Link from '../ui/Link';
import { bioText } from '../../data/bio';
import avatar_a from '../../assets/images/avatar_a.png';
import avatar_b from '../../assets/images/avatar_b.png';

const Bio = () => {
  const [avatar, setAvatar] = useState(avatar_a);
  
  return (
    <section id="bio" className="py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 flex flex-col items-center">
            <img
              src={avatar}
              alt="Avatar"
              className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
              onClick={() => {avatar === avatar_a ? setAvatar(avatar_b) : setAvatar(avatar_a);}}
            />

            <div className="mt-4 flex space-x-4 items-center justify-center">
              <a href="mailto:yhzeng3-c@my.cityu.edu.hk" className="fas fa-envelope text-3xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://scholar.google.com/citations?hl=en&user=YUwnL1IAAAAJ" className="ai ai-google-scholar text-3xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://x.com/_YuhanZeng_" className="fab fa-x-twitter text-3xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://github.com/Y-Tsang" className="fab fa-github text-3xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110" target="_blank" rel="noopener noreferrer"></a>
            </div>
          </div>

          <div className="md:w-2/3 mt-6 md:mt-0 md:pl-8">
            <h2 className="text-3xl font-bold mb-6">Yuhan Zeng (Tsang)</h2>
            <p className="text-lg text-gray-700">
              {bioText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
