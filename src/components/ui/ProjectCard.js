import React, { useEffect, useState } from 'react';
import theme from '../../config/theme';

const KEYWORD_CLASSES = [
  'bg-red-50 text-red-700 border-red-200',
  'bg-orange-50 text-orange-700 border-orange-200',
  'bg-yellow-50 text-yellow-700 border-yellow-200',
  'bg-green-50 text-green-700 border-green-200',
  'bg-blue-50 text-blue-700 border-blue-200',
  'bg-purple-50 text-purple-700 border-purple-200',
];

const AWARD_BADGES = {
  honourableMention: {
    label: 'Honourable Mention',
    className: 'text-amber-700',
    icon: (
      <svg viewBox="0 0 16 16" className="h-5 w-5 shrink-0 -translate-y-px" aria-hidden="true">
        <path fill="currentColor" d="M8 1.5a4 4 0 0 0-2.1 7.4l-.9 5.2 3-1.7 3 1.7-.9-5.2A4 4 0 0 0 8 1.5Zm0 1.6a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8Z" />
      </svg>
    ),
  },
  bestPaper: {
    label: 'Best Paper',
    className: 'text-red-700',
    icon: (
      <svg viewBox="0 0 16 16" className="h-5 w-5 shrink-0 -translate-y-px" aria-hidden="true">
        <path fill="currentColor" d="M4 2h8v2h2v1.2a4.2 4.2 0 0 1-3.4 4.1A3.7 3.7 0 0 1 9 10.7V13h2v1.5H5V13h2v-2.3a3.7 3.7 0 0 1-1.6-1.4A4.2 4.2 0 0 1 2 5.2V4h2V2Zm8 3.5v.2a5.1 5.1 0 0 1-.4 1.9 2.6 2.6 0 0 0 1-2.1H12Zm-8 0H3.4a2.6 2.6 0 0 0 1 2.1A5.1 5.1 0 0 1 4 5.7v-.2Z" />
      </svg>
    ),
  },
};

const Thumbnail = ({ src, alt, interval = 1000 }) => {
  const sources = Array.isArray(src) ? src : [src];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (sources.length <= 1) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % sources.length);
    }, interval);

    return () => window.clearInterval(intervalId);
  }, [sources.length, interval]);

  return (
    <div className="w-full max-w-xs md:max-w-none aspect-[16/9] relative overflow-hidden rounded-lg border border-gray-100 bg-gray-50">
      <img
        src={sources[activeIndex]}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
      />
    </div>
  );
};

const Author = ({ author, isMe, isLast }) => {
  const className = isMe ? 'font-semibold text-gray-950' : 'text-gray-400';
  const authorName = author.url ? (
    <a
      href={author.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} hover:underline`}
    >
      {author.name}
    </a>
  ) : (
    <span className={className}>{author.name}</span>
  );

  return (
    <>
      {authorName}
      {author.suffix && <span className="text-gray-400">{author.suffix}</span>}
      {!isLast && <span className="text-gray-400">, </span>}
    </>
  );
};

const AwardBadge = ({ award }) => {
  const badge = AWARD_BADGES[award.type] || {};
  const label = award.label || badge.label;

  if (!label) return null;

  return (
    <span className={`inline-flex items-center gap-1 text-xs font-semibold ${badge.className || 'text-gray-700'}`}>
      {badge.icon}
      {label}
    </span>
  );
};

const ProjectCard = ({ project, highlightAuthor }) => {
  return (
    <div className="relative w-full bg-white rounded-xl border border-gray-200 shadow-sm p-3 md:p-4 transition-shadow duration-200 hover:shadow-md">
      <div className="flex flex-col md:flex-row items-stretch">
        <div className="md:w-1/3 flex justify-center mb-3 md:mb-0 md:self-stretch">
          <a
            href={project.links[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-xs md:max-w-none md:h-full"
          >
            <Thumbnail
              src={project.thumbnails || project.thumbnail}
              alt={project.altTitle || project.title}
              interval={project.thumbnailInterval}
            />
          </a>
        </div>

        <div className="md:w-2/3 md:pl-5">
          <h3 className="text-base md:text-lg leading-snug font-semibold mb-1.5 text-gray-900">{project.title}</h3>

          <div className="text-xs leading-relaxed mb-1.5">
            {project.authors.map((author, index) => (
              <Author
                key={`${project.id}-${author.name}`}
                author={author}
                isMe={author.name === highlightAuthor}
                isLast={index === project.authors.length - 1}
              />
            ))}
          </div>

          <div className="flex items-center mb-1.5">
            <img
              src={project.venueLogo}
              alt={project.venue}
              className="h-5 mr-2"
            />
            <span className="text-xs text-gray-600">{project.venue}</span>
          </div>
          {project.fullVenue && (
            <div className="text-xs text-gray-600 italic mb-1.5">
              {project.fullVenue}
            </div>
          )}
          {project.awards?.length > 0 && (
            <div className="flex flex-wrap gap-x-3 gap-y-1 mb-1.5">
              {project.awards.map((award) => (
                <AwardBadge key={`${project.id}-${award.type}-${award.label || ''}`} award={award} />
              ))}
            </div>
          )}

          <div className="flex flex-wrap mb-1.5">
            {project.keywords.map((keyword, index) => (
              <span
                key={`${project.id}-${keyword}`}
                className={`border px-1.5 py-0.5 rounded-full text-xs font-medium mr-1.5 mb-1.5 ${KEYWORD_CLASSES[index % KEYWORD_CLASSES.length]}`}
              >
                {keyword}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 text-xs">
            {project.links.map((link) => (
              <a
                key={`${project.id}-${link.label}`}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center ${theme.link}`}
              >
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
