import type { ImageMetadata } from 'astro';
import computationShot from '../assets/computation.png';
import subwhereShot from '../assets/subwhere.png';
import braincrawlShot from '../assets/braincrawl.png';
import freeandopencellShot from '../assets/freeandopencell.png';
import wordlediyShot from '../assets/wordlediy.png';
import saxonzoneShot from '../assets/saxonzone.png';

export interface Project {
  name: string;
  body: string;
  /** Imported from src/assets/ so Astro can optimize it. Omit for a placeholder. */
  shot?: ImageMetadata;
  links: { label: string; href: string }[];
}

export interface Group {
  id: string;
  heading: string;
  projects: Project[];
}

export const groups: Group[] = [
  {
    id: 'writing',
    heading: 'Writing',
    projects: [
      {
        name: 'Computation',
        body: 'How do we make good software with AI? What is good software to begin with, and what assumptions do we need to erode to get there?',
        shot: computationShot,
        links: [
          { label: 'Read', href: 'https://computation.saxon.zone' },
          { label: 'Source', href: 'https://github.com/saxonthune/computation-site' },
        ],
      },
    ],
  },

  {
    id: 'apps',
    heading: 'Major Projects',
    projects: [
      {
        name: 'braincrawl',
        body: 'Are you tired of LLM hallucinations and stale book recommendations? Connect an agent to open-access research or your own PDF library, and transform your agent from a source of truth to a research assistant.',
        shot: braincrawlShot,
        links: [{ label: 'Source', href: 'https://github.com/saxonthune/braincrawl' }],
      },
      {
        name: 'RankThePlanet',
        body: '',
        links: [{ label: 'Source', href: 'https://github.com/saxonthune/RankThePlanet' }],
      },
    ],
  },
  {
    id: 'tools',
    heading: 'Developer Tools',
    projects: [
      {
        name: 'Rhidoc',
        body: '',
        links: [
          { label: 'Source', href: 'https://github.com/saxonthune/rhidoc' },
          { label: 'PyPI', href: 'https://pypi.org/project/rhidoc/' },
        ],
      },
      {
        name: 'Luminous',
        body: '',
        links: [
          { label: 'Live canvas', href: 'https://saxonthune.github.io/Luminous/' },
          { label: 'Source', href: 'https://github.com/saxonthune/Luminous' },
        ],
      },
    ],
  },
  {
    id: 'minor',
    heading: 'Minor Projects',
    projects: [
      {
        name: 'SubWhere',
        body: 'Where\'s the train? Find out with this live NYC subway map, built on data from the world\'s most reliable transit authority.',
        shot: subwhereShot,
        links: [
          { label: 'See the Map', href: 'https://subwhere.saxon.zone'},
          { label: 'Source', href: 'https://github.com/saxonthune/nyc-subwhere' }
        ],
      },
      {
        name: 'FreeAndOpenCell',
        body: 'I wanted to play FreeCell on my phone, but all of the websites for it were bloated. This is a lightweight implementation that doesn\'t spy on you, and it also works well on vertical screens.',
        shot: freeandopencellShot,
        links: [
          { label: 'Play', href: 'https://freecell.saxon.zone/' },
          { label: 'Source', href: 'https://github.com/saxonthune/FreeAndOpenCell' },
        ],
      },
      {
        name: 'Wordle DIY',
        body: 'Make a Wordle and send it to your loved ones. Make a diabolical Wordle and send it to your frenemies.',
        shot: wordlediyShot,
        links: [
          { label: 'Make a Puzzle', href: 'https://wow.saxon.zone/wordle/diy' },
          { label: 'Play Sample', href: 'https://wow.saxon.zone/wordle/?code=MTYwMGExRklFUll8U2F4b24'},
          { label: 'Source', href: 'https://github.com/saxonthune/wordle-diy' },
        ],
      },
      {
        name: 'saxon.zone',
        body: 'Wait a sec...',
        shot: saxonzoneShot,
        links: [
          { label: 'Hmm...', href: 'https://saxon.zone' },
          { label: 'Source', href: 'https://github.com/saxonthune/saxon.zone' },
        ],
      },
    ],
  },
];
