import React from 'react';
import theme from '../../config/theme';
import { homeContent } from '../../data/home';

const Updates = () => {
  const { updates } = homeContent;

  return (
    <section id="updates">
      <div className="w-full">
        <h2 className={`${theme.text.sectionTitle} mb-6`}>{updates.title}</h2>
        <div className="max-h-56 overflow-y-auto pr-3 scrollbar-custom">
          <ul className="divide-y divide-gray-100">
          {updates.items.map(item => (
            <li key={item.id} className="py-3 md:flex md:gap-6">
              <div className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 md:mb-0 md:w-28 md:pt-0.5">
                {item.date}
              </div>
              <div className={`flex-1 text-sm leading-6 ${theme.text.body}`}>
                {item.text}
              </div>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Updates;
