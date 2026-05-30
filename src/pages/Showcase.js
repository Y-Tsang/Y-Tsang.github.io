import React, { useEffect, useState } from 'react';
import { PageShell } from '../components/layout';
import { AnimatedSection } from '../components/ui';
import theme from '../config/theme';
import barcelonaPhoto from '../assets/images/photo/Barcelona_Spain.JPG';
import bergenPhoto from '../assets/images/photo/Bergen_Norway.JPG';
import chi2026Photo from '../assets/images/photo/CHI2026.jpg';
import chi2025Photo from '../assets/images/photo/CHI2025.JPG';
import copenhagenPhoto from '../assets/images/photo/Copenhagen_Denmark.JPG';
import cscw2025Photo from '../assets/images/photo/CSCW2025.JPG';
import helsinkiPhoto from '../assets/images/photo/Helsinki_Finland.JPG';
import kamakuraPhoto from '../assets/images/photo/Kamakura_Japan.jpg';
import lundPhoto from '../assets/images/photo/Lund_Sweden.JPG';
import reykjavikPhoto from '../assets/images/photo/Reykjavik_Iceland.JPG';
import stockholmPhoto from '../assets/images/photo/Stockholm_Sweden.JPG';
import tokyoPhoto from '../assets/images/photo/Tokyo_Japan.jpg';
import yokohamaPhoto from '../assets/images/photo/Yokohama_Japan.jpg';

const gameAccentClasses = [
  { border: 'border-l-red-500', label: 'text-red-500' },
  { border: 'border-l-orange-500', label: 'text-orange-500' },
  { border: 'border-l-yellow-500', label: 'text-yellow-500' },
  { border: 'border-l-green-500', label: 'text-green-500' },
  { border: 'border-l-blue-500', label: 'text-blue-500' },
  { border: 'border-l-purple-500', label: 'text-purple-500' },
];

const bookAccentClasses = [
  { border: 'border-l-blue-500', label: 'text-blue-500' },
  { border: 'border-l-yellow-500', label: 'text-yellow-500' },
  { border: 'border-l-green-500', label: 'text-green-500' },
];

const games = [
  {
    title: 'OPUS: Prism Peak',
    series: 'SIGONO',
    link: 'https://www.sigono.com/presskit-opus-prism-peak',
  },
  {
    title: 'OPUS: Echo of Starsong',
    series: 'SIGONO',
    link: 'https://www.sigono.com/presskit-opus-echo-of-starsong',
  },
  {
    title: 'OPUS: Rocket of Whispers',
    series: 'SIGONO',
    link: 'https://www.sigono.com/opus-rocket-of-whispers-en',
  },
  {
    title: 'OPUS: The Day We Found Earth',
    series: 'SIGONO',
    link: 'https://www.sigono.com/opus-the-day-we-found-earth-en',
  },
  {
    title: 'Minecraft',
    series: 'Mojang Studios',
    link: 'https://www.minecraft.net/',
  },
  {
    title: 'DEEMO',
    series: 'Rayark',
    link: 'https://rayark.com/en/games/deemo/',
  },
];

const books = [
  {
    title: 'Design Methods',
    author: 'Amy J. Ko',
    link: 'https://faculty.washington.edu/ajko/books/design-methods/',
  },
  {
    title: 'Dear Data',
    author: 'Giorgia Lupi, Stefanie Posavec',
    link: 'https://www.dear-data.com/theproject',
  },
  {
    title: 'Navigate the World of HCI Research',
    author: 'Shengdong Zhao',
    link: 'https://www.shengdongzhao.com/book/',
  },
];

const music = [
  {
    spotifyId: '7Jartabvap5nlDW9IGXrPd',
  },
  {
    spotifyId: '3V5K580G9CVnn6h2q6B0PV',
  },
  {
    spotifyId: '4cktbXiXOapiLBMprHFErI',
  },
];

const photos = [
  { city: 'Barcelona', region: 'Spain', image: barcelonaPhoto },
  { city: 'Bergen', region: 'Norway', image: bergenPhoto },
  { city: 'Copenhagen', region: 'Denmark', image: copenhagenPhoto },
  { city: 'Helsinki', region: 'Finland', image: helsinkiPhoto },
  { city: 'Kamakura', region: 'Japan', image: kamakuraPhoto },
  { city: 'Lund', region: 'Sweden', image: lundPhoto },
  { city: 'Reykjavik', region: 'Iceland', image: reykjavikPhoto },
  { city: 'Stockholm', region: 'Sweden', image: stockholmPhoto },
  { city: 'Tokyo', region: 'Japan', image: tokyoPhoto },
  { city: 'Yokohama', region: 'Japan', image: yokohamaPhoto },
  { city: 'Barcelona', region: 'Spain', image: chi2026Photo },
  { city: 'Yokohama', region: 'Japan', image: chi2025Photo },
  { city: 'Bergen', region: 'Norway', image: cscw2025Photo },
];

const photoWallLayouts = [
  'sm:w-[58%] lg:w-[34%] lg:-translate-x-6 rotate-[-2.5deg]',
  'sm:w-[39%] lg:w-[23%] lg:mt-16 lg:translate-x-2 rotate-[1.5deg]',
  'sm:w-[48%] lg:w-[29%] lg:-mt-3 lg:-translate-x-1 rotate-[-0.75deg]',
  'sm:w-[43%] lg:w-[24%] lg:mt-8 lg:translate-x-6 rotate-[2.25deg]',
  'sm:w-[62%] lg:w-[38%] lg:-mt-8 lg:-translate-x-3 rotate-[-1.5deg]',
  'sm:w-[37%] lg:w-[21%] lg:mt-20 lg:-translate-x-4 rotate-[3deg]',
  'sm:w-[54%] lg:w-[32%] lg:mt-5 lg:translate-x-5 rotate-[0.75deg]',
  'sm:w-[34%] lg:w-[19%] lg:mt-14 lg:-translate-x-8 rotate-[-3deg]',
  'sm:w-[57%] lg:w-[35%] lg:-mt-6 lg:translate-x-3 rotate-[1.75deg]',
  'sm:w-[41%] lg:w-[25%] lg:mt-3 lg:translate-x-8 rotate-[-1.25deg]',
  'sm:w-[45%] lg:w-[27%] lg:mt-12 lg:-translate-x-2 rotate-[2.5deg]',
  'sm:w-[51%] lg:w-[30%] lg:-mt-4 lg:-translate-x-7 rotate-[-2deg]',
  'sm:w-[47%] lg:w-[28%] lg:mt-9 lg:translate-x-1 rotate-[1deg]',
];

const shufflePhotos = (items) => {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
};

const SectionHeader = ({ title, children }) => (
  <div className="mb-8">
    <h2 className={theme.text.pageTitle}>{title}</h2>
    <p className={`mt-3 text-sm leading-7 ${theme.text.muted}`}>
      {children}
    </p>
  </div>
);

const Showcase = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photoWallItems] = useState(() => {
    const shuffledPhotos = shufflePhotos(photos);
    const shuffledLayouts = shufflePhotos(photoWallLayouts);

    return shuffledPhotos.map((photo, index) => ({
      ...photo,
      className: shuffledLayouts[index % shuffledLayouts.length],
    }));
  });

  useEffect(() => {
    if (!selectedPhoto) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  return (
    <PageShell className="pt-10 pb-16" animated={false}>
      <AnimatedSection delay={0}>
        <section>
          <SectionHeader title="Games">
            I enjoy video games for the way they let me step inside imagined worlds and feel their atmosphere through interaction. Here are a few that have stayed with me.
          </SectionHeader>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {games.map((game, index) => {
              const accent = gameAccentClasses[index % gameAccentClasses.length];

              return (
                <a
                  key={game.title}
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex h-full flex-col rounded-lg border-l-2 bg-white p-5 ring-1 ring-gray-900/5 transition duration-200 hover:ring-gray-900/10 ${accent.border}`}
                >
                  <div
                    className={`mb-3 text-xs font-medium uppercase tracking-[0.18em] ${accent.label}`}
                  >
                    {game.series}
                  </div>
                  <h3 className="text-base font-semibold leading-snug text-gray-950 group-hover:text-gray-700">
                    {game.title}
                  </h3>
                </a>
              );
            })}
          </div>
        </section>

        <section className="mt-16">
          <SectionHeader title="Books">
            I recommend these books to anyone beginning their journey into HCI, or into research more broadly. In quiet but lasting ways, they changed how I understand the world.
          </SectionHeader>

          <div className="grid gap-4 md:grid-cols-3">
            {books.map((book, index) => {
              const accent = bookAccentClasses[index % bookAccentClasses.length];

              return (
                <a
                  key={book.title}
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block rounded-lg border-l-2 bg-white p-5 ring-1 ring-gray-900/5 transition duration-200 hover:ring-gray-900/10 ${accent.border}`}
                >
                  <div
                    className={`mb-3 text-xs font-medium uppercase tracking-[0.18em] ${accent.label}`}
                  >
                    Book
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-gray-950 group-hover:text-gray-700">
                    {book.title}
                  </h3>
                  <div className="mt-2 text-sm text-gray-500">
                    {book.author}
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section className="mt-16">
          <SectionHeader title="Music">
            Some melodies stay longer than the moments they belong to. Here are a few I return to again and again.
          </SectionHeader>

          <div className="grid gap-4 md:grid-cols-3">
            {music.map((track) => (
              <iframe
                key={`${track.spotifyType || 'track'}-${track.spotifyId}`}
                title={`Spotify: ${track.title}`}
                src={`https://open.spotify.com/embed/${track.spotifyType || 'track'}/${track.spotifyId}?utm_source=generator`}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="block w-full rounded-xl border-0"
              />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionHeader title="Photos">
            I wander through the world with a camera in hand, collecting glimpses of places, journeys, and moments along the way.
          </SectionHeader>

          <div className="relative -mx-2 flex flex-wrap items-start justify-center gap-x-3 gap-y-5 overflow-visible py-4 sm:gap-x-4 lg:gap-y-2 lg:py-8">
            {photoWallItems.map((photo, index) => (
              <AnimatedSection
                key={`${photo.city}-${photo.region}-${photo.image}`}
                delay={index * 120}
                baseClassName="transition-all duration-[1400ms] ease-out"
                hiddenClassName="opacity-0 translate-y-8 scale-[0.98]"
                visibleClassName="opacity-100 translate-y-0 scale-100"
                className={`aspect-video w-full max-sm:rotate-0 hover:z-20 hover:-translate-y-1 hover:rotate-0 ${photo.className}`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative h-full w-full cursor-pointer overflow-hidden rounded-2xl bg-gray-50 text-left shadow-sm ring-1 ring-gray-900/5 transition duration-300 hover:shadow-xl"
                >
                  <img
                    src={photo.image}
                    alt={`${photo.city}, ${photo.region}`}
                    className="h-full w-full object-cover"
                  />
                  <span className="pointer-events-none absolute left-1/2 top-3 w-max max-w-[calc(100%-1.5rem)] -translate-x-1/2 translate-y-1 rounded-full bg-gray-950/85 px-3 py-1 text-center text-xs font-medium leading-5 text-white opacity-0 shadow-lg backdrop-blur-sm transition duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                    {photo.city} · {photo.region}
                  </span>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </AnimatedSection>
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[60] flex cursor-pointer items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
          role="presentation"
        >
          <div className="aspect-video w-full max-w-6xl overflow-hidden rounded-xl bg-black shadow-2xl">
            <img
              src={selectedPhoto.image}
              alt={`${selectedPhoto.city}, ${selectedPhoto.region}`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}
    </PageShell>
  );
};

export default Showcase;
