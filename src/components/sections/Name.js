import React from 'react';
import theme from '../../config/theme';
import { homeContent } from '../../data/home';

const Name = () => {
  const { name } = homeContent;

  return (
    <section id="name" className="pb-16">
      <div className="w-full">
        <h2 className={`${theme.text.sectionTitle} mb-6`}>{name.title}</h2>
        <div className="border-y border-gray-100 py-3">
          <p className={`text-sm leading-7 ${theme.text.body}`}>{name.text}</p>
        </div>
      </div>
    </section>
  );
};

export default Name;
