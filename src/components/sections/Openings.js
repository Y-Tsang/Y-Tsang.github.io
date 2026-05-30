import React from 'react';
import theme from '../../config/theme';
import { homeContent } from '../../data/home';

const Openings = () => {
  return (
    <section id="openings">
      <div className="w-full">
        <div className="border-y border-gray-100 py-3">
          <p className={`text-sm leading-7 ${theme.text.body}`}>
            {homeContent.openings.message}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Openings;
