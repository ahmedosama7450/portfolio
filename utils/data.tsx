import { ComponentProps, ReactNode } from "react";
import { Project } from "../components/Project";

export const title = "Assalamu alaikum, I'm ahmed osama";

export const bio =
  "Aspiring full stack web developer that is passionate about the web and all new technologies. What makes me special the most is that I am a quick learner and I have tremendous desire to understand things not just take them for granted. I love open source and contribute as much as I can. I am currently pursuing a degree in electronics and communication engineering.";

export const education = (
  <>
    2018 - present <br />
    Zagazig University <br />
    <span className="font-medium">
      Electronics and communication engineering
    </span>
  </>
);

export const skills = (
  <>
    Javascript / Typescript
    <br />
    Python / Java / C / C++
    <br />
    Node.js / SQL / GraphQl
    <br />
    Django / Flask
    <br />
    React / Next.js
    <br />
    Tailwind CSS / Bootstrap
    <br />
    CI CD / Github actions
    <br />
    Git / Github
  </>
);

export const links: { href: string; icon: ReactNode }[] = [
  // Github
  {
    href: "https://github.com/ahmedosama7450",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },

  // Linkedin
  {
    href: "https://www.linkedin.com/in/ahmed-osama-7450/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },

  // Twitter
  {
    href: "https://twitter.com/ahmedosama7450",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    ),
  },

  // Mail
  {
    href: "mailto:a.osama7450@gmail.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
      </svg>
    ),
  },
];

export const openSourceProjects: ComponentProps<typeof Project>[] = [
  {
    title: "Nexus args validator",
    description:
      "GraphQL validation library with type-safety, transformation pipeline and great performance powered by Nexus",
    codeLink: "https://github.com/ahmedosama7450/nexus-args-validator",
  },
  {
    title: "Rich Slate",
    description:
      "Rich text editor on top of slate framework which abstracts away all the complexity of slate while providing common rich text editing features",
    codeLink: "https://github.com/ahmedosama7450/rich-slate",
    previewLink: "https://rich-slate.vercel.app/",
  },
  {
    title: "Overwind UI",
    description:
      "Opinionated React components built on top of Tailwind CSS, Headless UI, Next.js and React Hook Form",
    codeLink: "https://github.com/ahmedosama7450/overwind-ui",
    previewLink: "https://ahmedosama7450.github.io/overwind-ui/",
  },
];

export const miniProjects: { title: string; href: string }[] = [
  {
    title: "Angry birds clone using JavaFX",
    href: "https://github.com/ahmedosama7450/angry-birds-clone",
  },
  {
    title: "A simple game using JavaFX",
    href: "https://github.com/ahmedosama7450/super-ball-game",
  },
  {
    title:
      " Circuit solver android app which currently only supports drawing electrical circuits",
    href: "https://github.com/ahmedosama7450/circuit-solver-android",
  },
  {
    title:
      "  Expo app that utilizes the twitter API to like or retweet your tweet",
    href: "https://github.com/ahmedosama7450/test-expo",
  },
];
