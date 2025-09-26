import React from 'react';
import { useState } from 'react';

import Link from '../ui/Link';
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
            I am a Human-Computer Interaction (HCI) researcher in the <Link link="https://www.cs.cityu.edu.hk/">Department of Computer Science</Link> at <Link link="https://www.cityu.edu.hk/">CityUHK</Link>, supervised by Prof. <Link link="https://shengdongzhao.com/">Shengdong Zhao</Link>. Previously, I had the opportunity to work closely with Prof. <Link link="https://www.scm.cityu.edu.hk/people/ray-lc">RAY LC</Link> and Prof. <Link link="https://luzhc.github.io/">Zhicong Lu</Link> at the start of my academic research journey. In addition, I am a visiting research intern working on a volunteer basis with Prof. <Link link="https://www.cse.ust.hk/~mxj/">Xiaojuan Ma</Link> and Dr. <Link link="https://jiaxiong.notion.site/Jiaxiong-Hu-fdd7394b52f74ae78ab438aa93164c3d">Jiaxiong Hu</Link> from <Link link="https://hkust.edu.hk/">HKUST</Link>. My research vision is to enhance the alignment between technology and user intent, fostering seamless integration of technology into everyday life. To achieve this goal, my previous work has explored a range of strategies to enhance communication and collaboration, among humans, between humans and computers, and between humans and AI. This includes advancing our understanding of generative AI use in making arguments, which contributes to the future development of intent-based argument-writing AI assistants, as well as designing visual communication stickers that enrich the expression of visual intent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
