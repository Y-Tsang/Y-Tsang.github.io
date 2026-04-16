import React from 'react';
import Link from '../ui/Link';

const Service = () => {
  return (
    <section id="service">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Service</h2>
        <ul className="list-inside text-gray-700">
          <li><b>Programme Committee (PC) Member</b>:&nbsp;
              <Link link="https://chi2026.acm.org/">ACM CHI 2026</Link> (Poster-Track Associate Chair),&nbsp;
              <Link link="https://iui.acm.org/2026/">ACM IUI 2026</Link>,&nbsp;
              <Link link="https://iui.acm.org/2025/">ACM IUI 2025</Link>
          </li>
          <li><b>Reviewer</b>:&nbsp;
              <Link link="https://chi2026.acm.org/">ACM CHI 2026</Link>,&nbsp;
              <Link link="https://iui.acm.org/2026/">ACM IUI 2026</Link>,&nbsp;
              <Link link="https://iui.acm.org/2025/">ACM IUI 2025</Link>
          </li>
          <li><b>Student Volunteer (SV)</b>:&nbsp;
            <Link link="https://cscw.acm.org/2025/">ACM CSCW 2025</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Service;
