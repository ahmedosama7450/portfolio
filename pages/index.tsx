import type { NextPage } from "next";
import Head from "next/head";
import { Section } from "../components/Section";
import { Project } from "../components/Project";
import {
  title,
  bio,
  links,
  openSourceProjects,
  miniProjects,
  education,
  skills,
} from "../utils/data";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="personal portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="p-4 max-w-5xl mx-auto">
        <header className="mt-2">
          <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>

          <p className="text-sm max-w-2xl mt-2 leading-relaxed text-gray-600">
            {bio}
          </p>

          <div className="flex items-center text-gray-600 gap-4 mt-2">
            {links.map(({ href, icon }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-5 h-5"
              >
                {icon}
              </a>
            ))}
          </div>
        </header>

        <main className="mt-7">
          <Section
            title="Projects"
            icon={
              <svg
                className="text-gray-600 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-4 11.25c0 .414-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75zm0-3.248c0 .414-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75zm0-3.252c0 .414-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75z" />
              </svg>
            }
          >
            <div className="text-gray-600 font-semibold text-sm">
              Open source libraries I am proud of
            </div>

            <div className="flex items-start flex-wrap gap-6 mr-10 mt-3">
              {openSourceProjects.map((project, index) => (
                <Project key={index} {...project} />
              ))}
            </div>

            <div className="text-gray-600 font-semibold text-sm mt-5">
              Mini projects in various frameworks and technologies
            </div>

            <ul className="marker:text-gray-500 mt-3 list-disc pl-5 space-y-3 text-gray-600 text-sm">
              {miniProjects.map(({ title, href }, index) => (
                <li key={index}>
                  <a
                    className="hover:underline"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </Section>

          <Section
            title="Education"
            icon={
              <svg
                className="text-gray-600 w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 21h-3l1-3h1l1 3zm-12.976-4.543l8.976-4.575v6.118c-1.007 2.041-5.607 3-8.5 3-3.175 0-7.389-.994-8.5-3v-6.614l8.024 5.071zm11.976.543h-1v-7.26l-10.923 5.568-11.077-7 12-5.308 11 6.231v7.769z" />
              </svg>
            }
          >
            <div className="text-sm text-gray-600 leading-loose">
              {education}
            </div>
          </Section>

          <Section
            title="Skills"
            icon={
              <svg
                className="text-gray-600 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 2c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6zm12 5h-18c-1.657 0-3 1.343-3 3v9c0 1.657 1.343 3 3 3h18c1.657 0 3-1.343 3-3v-9c0-1.657-1.343-3-3-3zm-.5 11h-17c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h17c.276 0 .5.224.5.5s-.224.5-.5.5zm0-3h-17c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h17c.276 0 .5.224.5.5s-.224.5-.5.5zm0-3h-17c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h17c.276 0 .5.224.5.5s-.224.5-.5.5z" />
              </svg>
            }
          >
            <div className="text-sm text-gray-600 leading-loose">{skills}</div>
          </Section>
        </main>
      </div>
    </div>
  );
};

export default Home;
