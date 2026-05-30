import React from 'react';

import theme from '../../config/theme';
import { homeContent } from '../../data/home';
import avatar from '../../assets/images/avatar.JPG';

const Bio = () => {
  const { bio } = homeContent;
  
  return (
    <section id="bio" className="py-10">
      <div className="w-full">
        <div className="md:flex md:items-center md:justify-center md:gap-12">
          <div className="flex flex-col items-center justify-center md:w-2/5">
            <img
              src={avatar}
              alt="Avatar"
              className="h-40 w-40 rounded-full border border-gray-100 object-cover shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 md:h-52 md:w-52 lg:h-56 lg:w-56"
            />

            <div className="mt-4 flex items-center justify-center gap-2.5">
              {bio.socials.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`${item.iconClass} inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-100 text-lg text-gray-600 transition-colors duration-200 hover:border-blue-100 hover:bg-blue-50 hover:text-blue-800`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                >
                  <span className="sr-only">{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 md:mt-0 md:w-3/5 md:self-center">
            <h2 className={`${theme.text.sectionTitle} mb-4`}>{bio.name}</h2>
            <p className={`text-base leading-8 ${theme.text.body}`}>
              {bio.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
