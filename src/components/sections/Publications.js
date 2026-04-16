import React from 'react';
import DebateGenAI_2025 from '../../data/projects/DebateGenAI_2025/DebateGenAI_2025';
import ThingMoji_2025 from '../../data/projects/ThingMoji_2025/ThingMoji_2025';

const Publications = () => {
  return(
    <>
      <section id="publications" className="bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Publications</h2>
          <div className="space-y-8">
            <ThingMoji_2025 />
            <DebateGenAI_2025 />
          </div>
        </div>
      </section>
    </>
  )
}

export default Publications;
