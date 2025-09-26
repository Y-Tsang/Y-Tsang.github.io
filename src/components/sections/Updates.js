import React from 'react';
import Link from '../ui/Link';

const Updates = () => {
  const newsItems = [
    {
      id: 3,
      date: "Apr 2025",
      text: (
        <>
          I presented the paper, <Link link="https://doi.org/10.1145/3706598.3713829">"Ronaldo's a poser!": How the Use of Generative AI Shapes Debates in Online Forums</Link>, at <Link link="https://chi2025.acm.org/">ACM CHI 2025</Link>!
        </>
      ),
    },
    {
      id: 2,
      date: "Feb 2025",
      text: (
        <>
          One co-authored paper has been conditionally accepted for <Link link="https://cscw.acm.org/2025/">ACM CSCW 2025</Link>!
        </>
      ),
    },
    {
      id: 1,
      date: "Jan 2025",
      text: (
        <>
          One first-authored paper has been conditionally accepted for <Link link="https://chi2025.acm.org/">ACM CHI 2025</Link>!
        </>
      ),
    },
  ];

  return (
    <section id="updates">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Updates</h2>
        <div className="max-h-64 overflow-y-scroll scrollbar-custom">
          <ul className="divide-y divide-gray-200">
          {newsItems.map(item => (
            <li key={item.id} className="py-4 flex gap-8">
              <div className="w-32 text-lg font-bold text-gray-700 text-left">
                {item.date}
              </div>
              <div className="flex-1 text-gray-700 text-left">
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
