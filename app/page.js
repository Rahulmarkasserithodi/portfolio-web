"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo-text">Welcome!</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="mailto:rahul4nair35@gmail.com" className="button">
                Contact Me
              </a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M5 7h14M5 12h14M5 17h10"
              />
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="hero container">
          <div className="hero-blue">
            <div>
              <h1>
                <small>Hi I'm</small>
                Rahul Markasserithodi
              </h1>
              <p>
                A Software engineering student at UNSW with a passion for
                Artificial Intelligence and Business analytics. I also hold a
                deep interest in public speaking and music.
                <span>
                  I'm deeply interested in AI and Machine Learning and how it
                  would shape our upcoming future.
                </span>
              </p>
              <div className="call-to-action">
                <a href="./rahulResume.pdf" className="button black">
                  {" "}
                  View Resume{" "}
                </a>
                <a
                  href="mailto:rahul4nair35@gmail.com"
                  className="button white"
                >
                  Contact Me
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/Rahulmarkasserithodi">
                  <img src="./imgs/github.png" alt="GitHub" width="48" />
                </a>
                <a href="https://www.linkedin.com/in/rahul-markasserithodi-a79750225/">
                  <img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-grey">
            <img src="./imgs/hero-image.png" alt="Adrian Twarog" width="60%" />
          </div>
        </section>
        <section className="logos container">
          <div className="marquee">
            <div className="track">
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JS" width="128" />
              <img src="./imgs/aws.png" width="128" alt="AWS" />
              <img src="./imgs/react.png" width="128" alt="React" />
              <img src="./imgs/typescript.png" width="128" alt="TS" />
              <img src="./imgs/haskell.png" width="128" alt="HS" />
              <img src="./imgs/vscode.png" width="128" alt="VS Code" />
              <img src="./imgs/python.png" width="128" alt="Python" />
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JS" width="128" />
              <img src="./imgs/aws.png" width="128" alt="AWS" />
              <img src="./imgs/react.png" width="128" alt="React" />
              <img src="./imgs/typescript.png" width="128" alt="TS" />
              <img src="./imgs/haskell.png" width="128" alt="HS" />
              <img src="./imgs/vscode.png" width="128" alt="VS Code" />
              <img src="./imgs/python.png" width="128" alt="Python" />
            </div>
          </div>
        </section>
        <section id="skills" className="skills container">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Technical</h3>
              <ul>
                <li>Python</li>
                <li>C</li>
                <li>JavaScript</li>
                <li>Haskell</li>
                <li>SQL</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Shell</li>
                <li>React</li>
                <li>Typescript</li>
              </ul>
              <h3>Tools</h3>
              <ul>
                <li>Github</li>
                <li>Gitlab</li>
                <li>Wireshark</li>
                <li>Figma</li>
                <li>VSCode</li>
                <li>Arduino</li>
                <li>Canva</li>
                <li>Jira & Confluence</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
                Hi I'm Rahul, a designer and developer, currently in the
                penultimate year of my Undergraduate degree in Software
                Engineering
              </p>
              <p>
                I'm currently working on multiple AI based projects and learning
                cloud based skills. I would love to contribute to the
                ever-expanding world of AI.
              </p>
            </div>
          </div>
        </section>
        <section className="work-experience container">
          <h2>
            <small>Recent</small>
            Work Experience
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img
                    src="./imgs/wpp1.jpg"
                    alt="Workplace 1 - CodeUnity"
                    width="100%"
                  />
                  <figcaption>Workplace - 1 CodeUnity</figcaption>
                </div>
              </figure>
              <h3>Front End Web developer Intern @ CodeUnity</h3>
              <div>July 2022 - August 2022</div>
              <p>
                Directed development of web application implementing React
                Native framework, Designed and implemented responsive webpages
                using HTML, CSS and JavaScript
              </p>
            </article>
            <article>
              <figure>
                <div>
                  <img
                    src="./imgs/wp2.png"
                    alt="Workplace 2 -HeadStarter"
                    width="100%"
                  />
                  <figcaption>Workplace - HeadStarter AI</figcaption>
                </div>
              </figure>
              <h3>Software engineering Fellow @ HeadStarter</h3>
              <div>July 2024 - September 2024</div>
              <p>
                Upskilling myself by developing 7 AI based projects over seven
                weeks
              </p>
            </article>
          </div>
        </section>
        <section id="projects" className="bento container">
          <h2>
            <small> Previous </small>
            Completed Projects
          </h2>
          <div className="bento-grid">
            <a
              href="https://github.com/Rahulmarkasserithodi/Redback-Autonomous-car"
              className="bento-item"
            >
              <img src="./imgs/redback.jpeg" alt="BGCCI" width="100%" />
            </a>
            <a
              href="https://pantry-tracker-xi-indol.vercel.app"
              className="bento-item"
            >
              <img src="./imgs/pantry.png" alt="Churhview" width="100%" />
            </a>
            <a
              href="https://github.com/Rahulmarkasserithodi/Football-match-predictor"
              className="bento-item"
            >
              <img src="./imgs/plp.jpeg" alt="Harley" width="100%" />
            </a>
            <a
              href="https://github.com/Rahulmarkasserithodi/Bank-Management-System"
              className="bento-item"
            >
              <img src="./imgs/bms.png" alt="Bunbury" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/kht.jpeg" alt="Running" width="100%" />
            </a>
            <a
              href="https://harmony-ai-sepia.vercel.app"
              className="bento-item"
            >
              <img src="./imgs/harmony.png" alt="School" width="100%" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
