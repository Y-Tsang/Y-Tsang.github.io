import React from 'react';
import cityuhkLogo from '../assets/images/logos/cityuhk.png';
import hkustLogo from '../assets/images/logos/hkust.png';
import InlineLogo from '../components/ui/InlineLogo';
import Link from '../components/ui/Link';

export const homeContent = {
  bio: {
    name: 'Yuhan Zeng (Tsang)',
    text: (
      <>
        I am an incoming Master's student in the <Link link="https://cse.hkust.edu.hk/">Department of Computer Science and Engineering</Link> at <Link link="https://hkust.edu.hk/">HKUST</Link><InlineLogo src={hkustLogo} alt="HKUST logo" />. Before that, I did my undergraduate studies in the <Link link="https://www.cs.cityu.edu.hk/">Department of Computer Science</Link> at <Link link="https://www.cityu.edu.hk/">CityUHK</Link><InlineLogo src={cityuhkLogo} alt="CityUHK logo" />, where I was a <Link link="https://www.cityu.edu.hk/cityuhktiger/">Talents Programme</Link> student and was supervised by Prof. <Link link="https://shengdongzhao.com/">Shengdong Zhao</Link>. I am expected to obtain my degree with First Class Honours standing. My current research envisions an intent-centered society where technologies seamlessly integrate into daily life to precisely support our needs. To realize this, my work explores strategies that enhance both human-human and human-AI collaboration. Specifically, my past projects include advancing the use of generative AI in argumentative discourse, designing visual cues that enrich the expression of intent, and developing a digitally co-present AR social platform for outdoor activities.
      </>
    ),
    socials: [
      {
        label: 'Email',
        href: 'mailto:yhzeng3-c@my.cityu.edu.hk',
        iconClass: 'fas fa-envelope',
      },
      {
        label: 'Google Scholar',
        href: 'https://scholar.google.com/citations?hl=en&user=YUwnL1IAAAAJ',
        iconClass: 'ai ai-google-scholar',
      },
      {
        label: 'X',
        href: 'https://x.com/_YuhanZeng_',
        iconClass: 'fab fa-x-twitter',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/Y-Tsang',
        iconClass: 'fab fa-github',
      },
    ],
  },
  openings: {
    message: (
      <>
        I am actively seeking <strong>PhD positions (Spring/Fall 2028)</strong> and <strong>visiting opportunities</strong> to work on Human-Computer Interaction (HCI) and Artificial Intelligence (AI). I am also open to collaboration in either formal or informal settings. Please feel free to reach out if you are looking for students or open to collaboration!
      </>
    ),
  },
  updates: {
    title: 'Updates',
    items: [
      {
        id: 5,
        date: 'Apr 2026',
        text: (
          <>
            I was honoured to receive the Final Year Project Best Poster Award, and I appreciate this recognition.
          </>
        ),
      },
      {
        id: 4,
        date: 'Feb 2026',
        text: (
          <>
            I started an appointment as research staff in the <Link link="https://www.cityu.edu.hk/bms/">Department of Biomedical Sciences</Link> at <Link link="https://www.cityu.edu.hk/">CityUHK</Link>, conducting dry-lab research and engaging in interdisciplinary work.
          </>
        ),
      },
      {
        id: 3,
        date: 'Apr 2025',
        text: (
          <>
            I presented the paper, <Link link="https://doi.org/10.1145/3706598.3713829">&ldquo;Ronaldo&rsquo;s a poser!&rdquo;: How the Use of Generative AI Shapes Debates in Online Forums</Link>, at <Link link="https://chi2025.acm.org/">ACM CHI 2025</Link>!
          </>
        ),
      },
      {
        id: 2,
        date: 'Feb 2025',
        text: (
          <>
            One co-authored paper has been conditionally accepted for <Link link="https://cscw.acm.org/2025/">ACM CSCW 2025</Link>!
          </>
        ),
      },
      {
        id: 1,
        date: 'Jan 2025',
        text: (
          <>
            One lead-authored paper has been conditionally accepted for <Link link="https://chi2025.acm.org/">ACM CHI 2025</Link>!
          </>
        ),
      },
    ],
  },
  service: {
    title: 'Service',
    roles: [
      {
        label: 'Programme Committee Member',
        items: [
          {
            label: 'ACM CHI 2026',
            link: 'https://chi2026.acm.org/',
            note: 'Poster-Track Associate Chair',
          },
          {
            label: 'ACM IUI 2026',
            link: 'https://iui.acm.org/2026/',
          },
          {
            label: 'ACM IUI 2025',
            link: 'https://iui.acm.org/2025/',
          },
        ],
      },
      {
        label: 'Reviewer',
        items: [
          {
            label: 'ACM UIST 2026',
            link: 'https://uist.acm.org/2026/',
          },
          {
            label: 'ACM CHI 2026',
            link: 'https://chi2026.acm.org/',
          },
          {
            label: 'ACM IUI 2026',
            link: 'https://iui.acm.org/2026/',
          },
          {
            label: 'ACM IUI 2025',
            link: 'https://iui.acm.org/2025/',
          },
        ],
      },
      {
        label: 'Student Volunteer',
        items: [
          {
            label: 'ACM CSCW 2025',
            link: 'https://cscw.acm.org/2025/',
          },
        ],
      },
    ],
  },
  funding: {
    title: 'Funding',
    acknowledgement: 'I appreciate the support from the funding bodies and institutions that have helped advance my research work along the way.',
    items: [
      {
        id: 'cscw-2025',
        title: 'Conference Grant for ACM CSCW 2025',
        amount: 'HK$15,000',
        source: 'City University of Hong Kong',
      },
      {
        id: 'chi-2025',
        title: 'Conference Grant for ACM CHI 2025',
        amount: 'HK$8,040',
        source: 'City University of Hong Kong',
      },
    ],
  },
  name: {
    title: 'My Name',
    text: (
      <>
        I use both &ldquo;Zeng&rdquo; and &ldquo;Tsang&rdquo; as romanizations of my surname. &ldquo;Zeng&rdquo; follows Mandarin pinyin, while &ldquo;Tsang&rdquo; reflects Cantonese in my hometown Shenzhen and Hong Kong.
      </>
    ),
  },
};

export default homeContent;
