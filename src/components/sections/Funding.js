import React from 'react';
import theme from '../../config/theme';
import { homeContent } from '../../data/home';

const Funding = () => {
  const { funding } = homeContent;

  return (
    <section id="funding">
      <div className="w-full">
        <h2 className={`${theme.text.sectionTitle} mb-3`}>{funding.title}</h2>
        <p className={`mb-4 text-sm leading-7 ${theme.text.body}`}>
          {funding.acknowledgement}
        </p>
        <ul className="divide-y divide-gray-100 border-y border-gray-100">
          {funding.items.map((item) => (
            <li key={item.id} className="py-3 md:flex md:items-baseline md:justify-between md:gap-6">
              <div>
                <div className="text-sm font-medium text-gray-900">{item.title}</div>
                <div className={`mt-1 text-xs ${theme.text.body}`}>{item.source}</div>
              </div>
              <div className="mt-1 text-sm font-semibold text-gray-900 md:mt-0 md:whitespace-nowrap">
                {item.amount}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Funding;
