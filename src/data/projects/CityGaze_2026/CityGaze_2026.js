import React from 'react';
import thumbnail1 from './material/thumbnail_1.png';
import thumbnail2 from './material/thumbnail_2.png';
import thumbnail3 from './material/thumbnail_3.png';
import thesis from './material/CityUHK_Thesis.pdf';
import poster from './material/CityUHK_Poster.pdf';
import cityuhk from '../../../assets/images/logos/cityuhk.png';

const cityGaze2026 = {
  id: 'citygaze-2026',
  year: 2026,
  title: <><i>CityGaze</i>: A Human-AI Gaze-Informed Workflow for Context-Aware Social Sharing on OHMDs</>,
  altTitle: 'CityGaze: A Human-AI Gaze-Informed Workflow for Context-Aware Social Sharing on OHMDs',
  authors: [
    { name: 'Yuhan Zeng' },
    { name: 'Shengdong Zhao', url: 'https://www.shengdongzhao.com/', suffix: ' (Supervisor)' },
  ],
  thumbnail: thumbnail1,
  thumbnails: [thumbnail1, thumbnail2, thumbnail3],
  keywords: ['Head-Mounted Display', 'Social Media', 'Wearable AI Assistant'],
  awards: [
    { type: 'bestPaper', label: 'Final Year Project Best Poster Award' },
  ],
  links: [
    { label: '[Thesis]', url: thesis },
    { label: '[Poster]', url: poster },
  ],
  venue: 'CityUHK 2026',
  // fullVenue: 'Department of Computer Science - City University of Hong Kong',
  venueLogo: cityuhk,
};

export default cityGaze2026;