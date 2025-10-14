import React from 'react';
import thumbnail from './material/thumbnail.jpg';
import cscw2025 from './material/cscw2025.png';

import thingmoji_paper from './material/thingmoji_paper.pdf';

const myName = "Yuhan Zeng";

const info = {
  id: 0,
  title: "ThingMoji: User-Captured Cut-Outs For In-Stream Visual Communication",
  authors: [
    { name: "Erzhen Hu", url: "https://erzhenh.com/", equal: false },
    { name: "Qian Wan", url: "https://llewynwan.github.io/", equal: false },
    { name: "Changkong Zhou", equal: false },
    { name: "Md Aashikur Rahman Azim", equal: false },
    { name: "Piaohong Wang", equal: false },
    { name: "Xingyi Hu", equal: false },
    { name: "Yuhan Zeng", equal: false },
    { name: "Zhicong Lu", url: "https://luzhc.github.io/", equal: false },
    { name: "Seongkook Heo", url: "https://seongkookheo.com/", equal: false },
  ],
  thumbnail: thumbnail,
  keywords: ["Live-Streaming", "Video-Mediated Communication", "One-To-Many Communication", "Shared Narrative"],
  links: [
    { label: "[Paper]", url: thingmoji_paper},
    { label: "[GitHub]", url: "https://github.com/ecruhue/thingmoji"},
  ],
  venue: "ACM CSCW 2025",
  fullVenue:
    "The ACM Conference on Computer-Supported Cooperative Work and Social Computing",
  venueLogo: cscw2025,
};

const Thumbnail = ({ src, alt }) => (
  <div className="w-full max-w-xs aspect-[16/9] relative overflow-hidden rounded">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
    />
  </div>
);

const ThingMoji_2025 = () => {
  return (
    <div key={info.id} className="bg-gray-50 rounded shadow p-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
          <a
            href={info.links[0].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Thumbnail
              src={info.thumbnail}
              alt={`${info.title}`}
            />
          </a>
        </div>

        <div className="md:w-2/3 md:pl-6">
          <h3 className="text-xl font-semibold mb-2">{info.title}</h3>

          <div className="text-sm mb-2">
            {info.authors.map((author, index) => {
              const isMe = author.name === myName;
              if (author.url) {
                return (
                  <React.Fragment key={index}>
                    <a
                      href={author.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        isMe
                          ? "text-black font-bold hover:underline"
                          : "text-gray-400 hover:underline"
                      }
                    >
                      {author.name}
                    </a>
                    {author.equal && (
                      <span className="text-gray-400">*</span>
                    )}
                    {index < info.authors.length - 1 && (
                      <span className="text-gray-400">, </span>
                    )}
                  </React.Fragment>
                );
              } else {
                return (
                  <React.Fragment key={index}>
                    <span
                      className={
                        isMe
                          ? "text-black font-bold"
                          : "text-gray-400"
                      }
                    >
                      {author.name}
                    </span>
                    {author.equal && (
                      <span className="text-gray-400">*</span>
                    )}
                    {index < info.authors.length - 1 && (
                      <span className="text-gray-400">, </span>
                    )}
                  </React.Fragment>
                );
              }
            })}
          </div>

          <div className="flex items-center mb-2">
            <img
              src={info.venueLogo}
              alt={`${info.venue}`}
              className="h-7 mr-2"
            />
            <span className="text-sm text-gray-600">{info.venue}</span>
          </div>
          {info.fullVenue && (
            <div className="text-sm text-gray-600 italic mb-2">
              {info.fullVenue}
            </div>
          )}

          <div className="flex flex-wrap mb-2">
            {info.keywords.map((keyword, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium mr-2 mb-2"
              >
                {keyword}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {info.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-500 hover:text-blue-700 hover:underline"
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

export default ThingMoji_2025;