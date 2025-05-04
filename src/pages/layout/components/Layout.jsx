import styles from './Layout.module.scss';

function Layout() {
  return (
    <div className={styles.layoutScreen}>
      <header className="header container">
        <a className="header__link" href="https://tetianazaporozhets.eu/">
          Ayyan Amir
        </a>

        <nav className="header__nav">
          <button className="header__nav-btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul id="menu-main-menu-en" className="header__list">
            <li className="menu-item">
              <a href="#technologies" className="header__item-link">
                Technologies
              </a>
            </li>
            <li className="menu-item">
              <a href="#portfolio" className="header__item-link">
                Portfolio
              </a>
            </li>
            <li className="menu-item">
              <a href="#contact" className="header__item-link">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="home" className="main">
        <div className="main__block container">
          <div className="main__text-block loaded">
            <h1 className="main__title">Software Engineer</h1>
            <p className="main__text">
              Hi, I’m Ayyan, a passionate <span className="highlight">Frontend Software Engineer</span>. I specialize in
              creating modern, responsive, and user-friendly websites.
            </p>
            {/* <a href="#portfolio" className="button main__button">
              View My Works
            </a> */}
          </div>

          <div className="main__photo-block">
            {/* <img
              className="main__photo"
              src="https://tetianazaporozhets.eu/wp-content/themes/myportfolio/assets/img/main-photo.png"
              alt="Portrait of Tetiana Zaporozhets"
              loading="lazy"
            /> */}
            <img
              className="main__gradient"
              src="https://tetianazaporozhets.eu/wp-content/themes/myportfolio/assets/img/main-gradient.png"
              alt=""
              loading="lazy"
              aria-hidden="true"
            />
          </div>
        </div>
      </main>

      <section id="technologies" className="skills container">
        <h2 className="subtitle skills__subtitle">Skills</h2>
        <h4 className="skills__content-subtitle">The skills, tools, and technologies I use:</h4>
        <div className="skills__icons">
          {[
            'html-icon',
            'css-icon',
            'js-icon',
            'tailwindcss-icon',
            'npm-icon',
            'figma-icon',
            'react-icon',
            'git-icon',
            'scss-icon',
          ].map(icon => (
            <img
              key={icon}
              src={`https://tetianazaporozhets.eu/wp-content/themes/myportfolio/assets/img/${icon}.svg`}
              alt={`${icon.replace('-icon', '').toUpperCase()} icon`}
            />
          ))}
        </div>
      </section>

      {/* <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="subtitle">Portfolio</h2>
          <div className="portfolio__block loaded">
            <div className="portfolio__box">
              <img
                src="https://tetianazaporozhets.eu/wp-content/uploads/2024/12/FireShot-Capture-023-Title-tetianazaporozhets.github.io-1.png"
                alt="HTML, SCSS, JS Project"
                className="portfolio__img"
              />
              <p className="portfolio__box-text">Website Coding (HTML, SCSS, JS)</p>
              <a
                href="https://tetianazaporozhets.github.io/minimal/dist/"
                className="portfolio__link"
                target="_blank"
                aria-label="View Minimal Project"
              >
                <img
                  src="https://tetianazaporozhets.eu/wp-content/themes/myportfolio/assets/img/link-icon.svg"
                  alt="Link icon"
                  className="icon"
                />
              </a>
            </div>

            <div className="portfolio__box">
              <img
                src="https://tetianazaporozhets.eu/wp-content/uploads/2025/01/coach-benneth.jpg"
                alt="React App for Fitness Coach"
                className="portfolio__img"
              />
              <p className="portfolio__box-text">React App Design</p>
              <a
                href="https://www.behance.net/gallery/217212593/React-App-Design-for-Fitness-Coach"
                className="portfolio__link"
                target="_blank"
                aria-label="View React App Project"
              >
                <img
                  src="https://tetianazaporozhets.eu/wp-content/themes/myportfolio/assets/img/link-icon.svg"
                  alt="Link icon"
                  className="icon"
                />
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section id="services" className="container services">
        <h2 className="subtitle services__subtitle">My Services</h2>
        <div className="services__cards">
          <div className="services__card">
            <div className="services__card-header">
              <img
                className="services__icon"
                src="https://tetianazaporozhets.eu/wp-content/themes/myportfolio/assets/img/icon-dev.svg"
                alt="Development Icon"
              />
              <h4 className="services__card-subtitle">Custom Website Development</h4>
            </div>
            <p className="services__card-text">
              I will create your website based on your design or develop a unique one using code and Figma. It will be
              responsive, beautifully displayed on all devices, and ready for publishing.
            </p>
            <p className="services__card-text">
              Cost: <span>from 400 €</span> (depending on complexity and scope)
            </p>
          </div>

          <div className="services__card services__card-item">
            <div className="services__card-header">
              <img
                className="services__icon"
                src="https://tetianazaporozhets.eu/wp-content/themes/myportfolio/assets/img/icon-design.svg"
                alt="Design Icon"
              />
              <h4 className="services__card-subtitle">Web Design</h4>
            </div>
            <p className="services__card-text">
              Creating a unique and modern design tailored to your business and audience. Aesthetically pleasing and
              user-friendly.
            </p>
            <p className="services__card-text">
              Cost: <span>from 250 €</span> (depending on complexity and scope)
            </p>
          </div>

          <div className="services__card">
            <div className="services__card-header">
              <img
                className="services__icon"
                src="https://tetianazaporozhets.eu/wp-content/themes/myportfolio/assets/img/icon-wordpress.svg"
                alt="WordPress Icon"
              />
              <h4 className="services__card-subtitle">WordPress Development</h4>
            </div>
            <p className="services__card-text">
              Developing websites on WordPress, whether using custom themes or optimizing existing ones for performance
              and functionality.
            </p>
            <p className="services__card-text">
              Cost: <span>Contact for pricing</span>
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Layout;
