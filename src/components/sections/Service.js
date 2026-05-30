import React from 'react';
import theme from '../../config/theme';
import { homeContent } from '../../data/home';
import Link from '../ui/Link';

const Service = () => {
  const { service } = homeContent;

  return (
    <section id="service">
      <div className="w-full">
        <h2 className={`${theme.text.sectionTitle} mb-6`}>{service.title}</h2>
        <ul className="divide-y divide-gray-100 border-y border-gray-100">
          {service.roles.map((role) => (
            <li key={role.label} className="py-3 md:flex md:items-baseline md:gap-6">
              <div className="mb-1 text-sm font-medium text-gray-900 md:mb-0 md:w-64">
                {role.label}
              </div>
              <div className={`flex-1 text-sm leading-6 ${theme.text.body}`}>
                {role.items.map((item, index) => (
                  <React.Fragment key={item.link}>
                    <Link link={item.link}>{item.label}</Link>
                    {item.note && <span className="text-gray-500"> ({item.note})</span>}
                    {index < role.items.length - 1 && <span className="text-gray-300"> / </span>}
                  </React.Fragment>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;
