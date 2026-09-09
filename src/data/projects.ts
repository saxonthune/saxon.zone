import type { ImageMetadata } from 'astro';
import computationShot from '../assets/computation.png';
import subwhereShot from '../assets/subwhere.png';
import braincrawlShot from '../assets/braincrawl.png';
import freeandopencellShot from '../assets/freeandopencell.png';
import wordlediyShot from '../assets/wordlediy.png';
import saxonzoneShot from '../assets/saxonzone.png';
import luminousCanvas from '../assets/luminous-canvas.png';
import luminousFifaTest from '../assets/luminous-fifa-test.png';
import luminousCustomersApi from '../assets/luminous-customers-api.png';
import mesopotamiaSimulation from '../assets/mesopotamia-simulation.png';
import mesopotamiaVisualization from '../assets/mesopotamia-visualization.png';
import fifaBracketingDesktop from '../assets/fifa-bracketing-desktop.png';
import fifaBracketingMobile from '../assets/fifa-bracketing-mobile.jpeg';
import ranktheplanetMap from '../assets/ranktheplanet-map.png';
import ranktheplanetReview from '../assets/ranktheplanet-review.jpeg';
import rhidocWorkspaceTree from '../assets/rhidoc-workspace-tree.png';

export interface GalleryImage {
  image: ImageMetadata;
  alt: string;
  caption?: string;
}

export interface Project {
  name: string;
  body: string;
  /** Imported from src/assets/ so Astro can optimize it. Omit for a placeholder. */
  shot?: ImageMetadata;
  /** Add this for a crossfading, navigable image gallery. */
  gallery?: GalleryImage[];
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
        body: 'Writings on AI and software. I write to sharpen my thinking and to start conversations.',
        shot: computationShot,
        links: [
          { label: 'A piece I\'m proud of', href: 'https://computation.saxon.zone/blog/260530-software-as-coloring-book/' },
          { label: 'Blog', href: 'https://computation.saxon.zone/blog' },
          { label: 'Source', href: 'https://github.com/saxonthune/computation-site' },
        ],
      },
    ],
  },

  {
    id: 'tools',
    heading: 'Developer Tools',
    projects: [
      {
        name: 'Rhidoc',
        body: 'A filesystem-based knowledge graph with a robust, agent-first CLI. Lightweight and flexible, I use Rhidoc in all of my projects to make spec-driven development persistent, and to design concepts and terminology before AI makes poor choices for me. (It also helps coordinate knowledge in a small team setting!)',
        shot: rhidocWorkspaceTree,
        links: [
          { label: 'Source', href: 'https://github.com/saxonthune/rhidoc' },
          { label: 'PyPI', href: 'https://pypi.org/project/rhidoc/' },
        ],
      },
      {
        name: 'Luminous',
        body: 'A series of prototypes for graph-driven software design; I\'m trying to invent the missing link between vibe coding and professional engineering practice.',
        gallery: [
          {
            image: luminousFifaTest,
            alt: 'Luminous graph showing a FIFA bracket project with UI transitions and requirements.',
            caption: 'FIFA test project',
          },
          {
            image: luminousCustomersApi,
            alt: 'Luminous graph showing a Customers API document with controllers, services, repositories, and contracts.',
            caption: 'Customers API graph',
          },
          {
            image: luminousCanvas,
            alt: 'Luminous canvas showing a large connected graph of modules, units, concepts, and relationships.',
            caption: 'Canvas overview',
          },
        ],
        links: [
          { label: 'Prototype Demos', href: 'https://luminousdemo.saxon.zone' },
          { label: 'Source', href: 'https://github.com/saxonthune/Luminous' },
        ],
      },
    ],
  },
  {
    id: 'projects',
    heading: 'Passion Projects',
    projects: [
      {
        name: 'Braincrawl',
        body: 'Are you tired of LLM hallucinations and stale book recommendations? Connect an agent to open-access research or your own PDF library, and transform it from an unreliable narrator to a star research assistant.',
        shot: braincrawlShot,
        links: [{ label: 'Source', href: 'https://github.com/saxonthune/braincrawl' }],
      },
      {
        name: 'SubWhere',
        body: 'Where\'s the train? Find out with this live NYC subway map, built on data from the world\'s most reliable transit authority. Now including live Citi Bike data.',
        shot: subwhereShot,
        links: [
          { label: 'See the Map', href: 'https://subwhere.saxon.zone'},
          { label: 'Source', href: 'https://github.com/saxonthune/nyc-subwhere' }
        ],
      },
      {
        name: 'RankThePlanet',
        body: 'Your fast, private, debloated geo diary.',
        gallery: [
          {
            image: ranktheplanetMap,
            alt: 'RankThePlanet map showing a selected place and nearby locations.',
            caption: 'RTP map',
          },
          {
            image: ranktheplanetReview,
            alt: 'RankThePlanet review for Luna La Mer showing a score, tasting notes, and verdict.',
            caption: 'RTP review',
          },
        ],
        links: [{ label: 'Source', href: 'https://github.com/saxonthune/RankThePlanet' }],
      },
      {
        name: 'Mesopotamia',
        body: 'Visual demos and simulations.',
        gallery: [
          {
            image: mesopotamiaSimulation,
            alt: 'Mesopotamia simulation showing a pixel-art map with biomass controls and overlays.',
            caption: 'Simulation map',
          },
          {
            image: mesopotamiaVisualization,
            alt: 'Mesopotamia visualization showing colored clusters on a dark field.',
            caption: 'Visualization',
          },
        ],
        links: [
          { label: 'Explore', href: 'https://mesopotamia.saxon.zone' },
          { label: 'Source', href: 'https://github.com/saxonthune/mesopotamia' },
        ],
      },
      {
        name: 'FIFA Bracketing',
        body: 'An archived bracket competition I ran during the 2026 World Cup.',
        gallery: [
          {
            image: fifaBracketingDesktop,
            alt: 'FIFA World Cup Bracket Challenge displaying a full tournament bracket.',
            caption: 'Desktop bracket',
          },
          {
            image: fifaBracketingMobile,
            alt: 'FIFA World Cup Bracket Challenge displayed on a phone with a bracket score summary.',
            caption: 'Mobile bracket',
          },
        ],
        links: [
          { label: 'Visit', href: 'https://fifa.saxon.zone' },
          { label: 'Source', href: 'https://github.com/saxonthune/fifa-bracketing' },
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
