import React from 'react';
import { PageShell } from '../components/layout';

const paradigms = [
  {
    id: '01',
    title: 'User-Centered Tools',
    status: 'User Operates',
    focus: 'Build usable interfaces that help users complete explicit tasks with clarity and control.',
    description:
      'In this paradigm, technology remains a passive instrument. Design work focuses on usability, accessibility, and reliable interaction, yet users still need to manage interfaces manually and fit their routines, attention, and workflows around the limits of each tool.',
  },
  {
    id: '02',
    title: 'Intent-Centered Agents',
    status: 'Intent Guides',
    focus: 'Build proactive agents that understand user intent and support goals across everyday contexts.',
    description:
      'In this paradigm, technology becomes an intent-aware agent embedded in daily life. The research focus moves from how people operate interfaces to how systems interpret user goals, separate core intent from intermediate actions, and provide support across devices, tasks, and environments.',
  },
  {
    id: '03',
    title: 'Transferable Intelligence',
    status: 'Intelligence Transfers',
    focus: 'Build transferable intelligence that can be instantiated across biological, computational, and material environments.',
    description:
      'In this paradigm, technology becomes a substrate for distributed intelligence. The long-term vision explores how computational agency, knowledge structures, and adaptive capabilities can move beyond a single device or body and be re-instantiated across different environments. This may raise new questions about continuity, governance, ethics, and identity.',
  },
];

const Vision = () => {
  return (
    <PageShell className="py-16">
      <section className="mb-12 max-w-4xl">
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-gray-400">
          Research Vision
        </div>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-gray-950 md:text-5xl">
          From User-Centered Tools to Transferable Intelligence.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600">
          My research vision traces a paradigm shift from passive tools that ask users to adapt, to intent-aware agents that support daily life, and finally to transferable intelligence that can move across biological, computational, and material substrates.
        </p>
      </section>

      <section>
        <div className="border-y border-gray-100">
          {paradigms.map((paradigm, index) => (
            <article
              key={paradigm.id}
              className="grid gap-4 border-b border-gray-100 py-6 last:border-b-0 md:grid-cols-[8rem_1fr]"
            >
              <div>
                <div className="font-mono text-sm font-semibold text-gray-400">
                  {paradigm.id}
                </div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                  {paradigm.status}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-xl font-semibold tracking-tight text-gray-950">
                    {paradigm.title}
                  </h2>
                  {index === 1 && (
                    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                      Current Focus
                    </span>
                  )}
                </div>
                <div className="mt-2 text-sm font-medium text-gray-700">
                  {paradigm.focus}
                </div>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {paradigm.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

export default Vision;