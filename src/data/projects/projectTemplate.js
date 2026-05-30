const projectTemplate = {
  id: 'project-year',
  year: 2026,
  title: 'Project Title',
  authors: [
    { name: 'Author Name', url: 'https://example.com', suffix: '*' },
    { name: 'Another Author', suffix: ' (Supervisor)' },
  ],
  thumbnail: null,
  thumbnails: [],
  keywords: ['Keyword 1', 'Keyword 2'],
  awards: [
    { type: 'honourableMention' },
    { type: 'bestPaper' },
  ],
  links: [
    { label: '[Paper]', url: 'https://example.com' },
  ],
  venue: 'Venue Year',
  fullVenue: 'Full venue name',
  venueLogo: null,
};

export default projectTemplate;
