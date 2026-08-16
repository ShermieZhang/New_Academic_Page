import { FormEvent, MouseEvent, useEffect, useState } from 'react';

/*
  THESIS: One academic identity unfolds as five chapters, replacing the generic one-page finance template.
  OWN-WORLD: Monet lavender-pink-blue fields, porcelain reading surfaces, fine rules, and one feathered mineral name brush.
  STORY: Meet Shimin, understand her research agenda and papers, inspect teaching and credentials, then make contact.
  FIRST VIEWPORT: English name and research identity lead beside a portrait; the primary action opens Research.
  FORM: A user-approved five-chapter atlas arranged as one continuous page; the navigation is a fast chapter index.
*/

const routes = ['home', 'research', 'teaching', 'cv', 'contact'] as const;
type Route = (typeof routes)[number];

type ContactFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function App() {
  const [activeSection, setActiveSection] = useState<Route>('home');
  const [contact, setContact] = useState<ContactFields>({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const updateActiveSection = () => {
      const readingLine = window.scrollY + Math.min(window.innerHeight * 0.36, 340);
      let current: Route = 'home';
      routes.forEach((item) => {
        const section = document.getElementById(item);
        if (section && section.offsetTop <= readingLine) current = item;
      });
      setActiveSection(current);
    };

    const followHash = () => {
      const value = window.location.hash.replace('#', '') as Route;
      if (!routes.includes(value)) return;
      window.requestAnimationFrame(() => document.getElementById(value)?.scrollIntoView({ block: 'start' }));
    };

    updateActiveSection();
    followHash();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('hashchange', followHash);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('hashchange', followHash);
    };
  }, []);

  const navigate = (event: MouseEvent<HTMLAnchorElement>, next: Route) => {
    event.preventDefault();
    window.history.pushState(null, '', `#${next}`);
    document.getElementById(next)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(next);
  };

  const updateContact = (field: keyof ContactFields, value: string) => {
    setContact((current) => ({ ...current, [field]: value }));
  };

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const body = `${contact.message}\n\nFrom: ${contact.name} (${contact.email})`;
    const mailto = `mailto:shimin@u.nus.edu?subject=${encodeURIComponent(contact.subject)}&body=${encodeURIComponent(body)}`;
    setFormStatus('Opening your email application…');
    window.location.href = mailto;
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#home" onClick={(event) => navigate(event, 'home')}>Shimin Zhang <span>张时敏</span></a>
        <div className="nav-scroller" aria-label="Page navigation">
          <nav className="site-nav">
            {routes.map((item) => (
              <a
                className="nav-link"
                key={item}
                href={`#${item}`}
                aria-current={activeSection === item ? 'location' : undefined}
                onClick={(event) => navigate(event, item)}
              >
                {item === 'cv' ? 'CV' : item[0].toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
          <section className="page page-home" id="home" aria-labelledby="home-title">
            <div className="home-stage">
              <img className="home-art" src="/art/monet-decentralized-research-map-v3.png" alt="" />
              <div className="page-inner home-grid">
                <div className="home-copy">
                  <div className="identity-line"><h1 className="home-name" id="home-title">Shimin Zhang</h1><span className="cn-name">张时敏</span></div>
                  <p className="name-origin">逊志时敏 <small>Humble in purpose · diligent in learning</small></p>
                  <p className="role">PhD Candidate · Digital Financial Technology</p>
                  <p className="home-lead">Researching the market structure and economic incentives of blockchain-based financial markets, with a focus on Bitcoin, cryptocurrencies, tokenization, stablecoins and AI agents in finance.</p>
                  <div className="affiliations"><span>National University of Singapore · AIDF</span></div>
                  <div className="action-row">
                    <a className="action primary" href="#research" onClick={(event) => navigate(event, 'research')}>View Research</a>
                    <a className="action" href="/ShiminZhang_resume202608.pdf" download>Download CV</a>
                  </div>
                </div>
                <figure className="portrait-frame"><img src="/photo.jpeg" alt="Portrait of Shimin Zhang" /></figure>
              </div>
            </div>
          </section>

          <section className="page page-research" id="research" aria-labelledby="research-title">
            <div className="page-inner chapter">
              <header className="chapter-head">
                <div><span className="chapter-index">Research chapter</span><p className="chapter-kicker">Dissertation & Working Papers</p><h1 className="chapter-title" id="research-title">Market structure and incentives in blockchain-based asset markets.</h1></div>
                <p className="chapter-intro">My research examines the economics of digital and decentralized financial markets, with a focus on blockchain, Bitcoin and cryptocurrencies, tokenized assets, stablecoins, and the emerging role of AI agents in finance.</p>
              </header>
              <section className="research-architecture" aria-label="Research agenda">
                <div className="research-row"><h2>Research domains</h2><ul className="research-terms"><li>Blockchain</li><li>Bitcoin & cryptocurrencies</li><li>Tokenized assets</li><li>Stablecoins</li><li>AI agents in finance</li></ul></div>
                <div className="research-row"><h2>Core economic questions</h2><ul className="research-terms"><li>Market structure</li><li>Protocol & contract design</li><li>Economic incentives</li><li>Strategic interaction</li></ul></div>
                <div className="research-row"><h2>Market outcomes</h2><ul className="research-terms"><li>Participant behavior</li><li>Price discovery</li><li>Liquidity</li><li>Adoption</li><li>Market efficiency</li><li>Welfare</li></ul></div>
                <div className="research-row"><h2>Research approaches</h2><ul className="research-terms"><li>Empirical analysis</li><li>Economic theory</li><li>Machine learning & NLP</li><li>Policy evaluation</li></ul></div>
              </section>
              <section className="working-papers" aria-labelledby="working-papers-title">
                <header><h2 id="working-papers-title">Working Papers</h2><p>Current research in progress</p></header>
                <div>
                  <article className="paper-record"><span className="paper-number">01</span><div><p className="paper-label">Bitcoin · Market Design</p><h3>Half Reward, Double Mischief: Miner Responses to Bitcoin Halving Event</h3><p className="paper-authors">with Alfred Lehar and Daniel Rabetti</p></div></article>
                  <article className="paper-record"><span className="paper-number">02</span><div><p className="paper-label">Bitcoin · Tokenization</p><h3>Non-Fungible and Fungible Tokens on Bitcoin: Inscriptions, Runes, and the Economics of Blockspace</h3></div></article>
                </div>
              </section>
              <div className="faculty-evidence">
                <div><h2>Academic engagement</h2><p>Subreviewer, Hawai'i Accounting Research Conference 2026. Conference participation includes CBER 2026, ABFER 13th, SFS 2025, SAIF 2025, CICF 2025 and Tokenomics 2024.</p></div>
                <div><h2>Supporting research experience</h2><p>Research assistant contributions have included projects on tokenized assets, smart contracts, prediction markets and open-source innovation.</p></div>
              </div>
            </div>
          </section>

          <section className="page page-teaching" id="teaching" aria-labelledby="teaching-title">
            <div className="page-inner chapter">
              <header className="chapter-head"><div><span className="chapter-index">Knowledge in motion</span><p className="chapter-kicker">Graduate Teaching</p><h1 className="chapter-title" id="teaching-title">Teaching machine learning through financial applications.</h1></div><p className="chapter-intro">Graduate-level teaching support in grading and tutorials for Machine Learning for Finance at the National University of Singapore.</p></header>
              <div className="teaching-spread">
                <article className="course-main"><span className="course-code">FT 5005 · Graduate · Teaching Assistant</span><h2>Machine Learning for Finance</h2><div className="course-meta"><span>National University of Singapore</span><span>Spring 2024</span><span>Grading & Tutorials</span></div><p className="course-description">The course covers foundation knowledge in machine learning and data mining for solving practical analytics problems and building AI applications at FinTech firms. Topics include supervised learning models, time series forecasting methods, basics of natural language processing, and unsupervised learning.</p></article>
                <aside className="course-side"><h2>Course structure</h2><ul className="topic-list"><li>Supervised learning models</li><li>Time series forecasting</li><li>Natural language processing</li><li>Unsupervised learning</li><li>FinTech applications</li></ul></aside>
              </div>
              <div className="teaching-note"><strong>Graduate teaching grounded in applied methods.</strong><p>The course connects technical models with financial problems, data-driven analysis and practical FinTech applications.</p></div>
            </div>
          </section>

          <section className="page page-cv" id="cv" aria-labelledby="cv-title">
            <div className="page-inner chapter">
              <div className="cv-top"><header><span className="chapter-index">Academic ledger</span><p className="chapter-kicker">Academic Credentials</p><h1 className="chapter-title" id="cv-title">Curriculum Vitae</h1></header><a className="action primary" href="/ShiminZhang_resume202608.pdf" download>Download Full CV (PDF)</a></div>
              <div className="ledger">
                <article className="ledger-entry"><div><h2>Ph.D. in Digital Financial Technology</h2><p className="ledger-place">National University of Singapore · Singapore</p><ul className="ledger-details"><li>Cumulative GPA: 4.17/5.0</li><li>Dissertation: Market Structure and Economic Incentives in Blockchain-Based Asset Markets</li></ul></div><time className="ledger-years">Expected 2027</time></article>
                <article className="ledger-entry"><div><h2>Master of Science in Financial Mathematics</h2><p className="ledger-place">Johns Hopkins University · Baltimore, Maryland</p><ul className="ledger-details"><li>Cumulative GPA: 3.70/4.0</li></ul></div><time className="ledger-years">08.2019–12.2020</time></article>
                <article className="ledger-entry"><div><h2>Bachelor of Arts in Applied Mathematics</h2><p className="ledger-place">University of Connecticut · Storrs, Connecticut</p><ul className="ledger-details"><li>Minor in Economics</li><li>Cumulative GPA: 3.68/4.0</li><li>Major GPA: 3.957/4.0 · Dean's List</li></ul></div><time className="ledger-years">08.2015–05.2019</time></article>
              </div>
              <div className="cv-support"><div><h2>Research toolkit</h2><p>AI Agent, Python, R, MATLAB, Stata, Solidity and LaTeX. Languages: Mandarin Chinese and English.</p></div><div><h2>Academic service & engagement</h2><p>Subreviewer for Hawai'i Accounting Research Conference 2026, with conference participation across blockchain economics, finance and tokenomics.</p><p className="ra-whisper"><strong>Supporting experience:</strong> Research Assistant, National University of Singapore, 09.2021–08.2022.</p></div></div>
            </div>
          </section>

          <section className="page page-contact" id="contact" aria-labelledby="contact-title">
            <div className="page-inner chapter">
              <header className="chapter-head"><div><span className="chapter-index">Open collaboration</span><p className="chapter-kicker">Get In Touch</p><h1 className="chapter-title" id="contact-title">Connect around research and teaching.</h1></div><p className="chapter-intro">For academic opportunities, research collaboration, seminars and teaching conversations, email is the clearest point of contact.</p></header>
              <div className="contact-stage">
                <section className="contact-details"><h2>Contact details</h2><dl className="contact-list"><div className="contact-item"><dt>Academic email</dt><dd><a href="mailto:shimin@u.nus.edu">shimin@u.nus.edu</a></dd></div><div className="contact-item"><dt>Additional email</dt><dd><a href="mailto:shiminzhang18@163.com">shiminzhang18@163.com</a></dd></div><div className="contact-item"><dt>Affiliation</dt><dd>National University of Singapore<br />Asian Institute of Digital Finance<br />Singapore</dd></div></dl></section>
                <section className="contact-form"><h2>Send a message</h2><form onSubmit={submitContact}><div className="form-grid"><div className="form-field"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" required value={contact.name} onChange={(event) => updateContact('name', event.target.value)} /></div><div className="form-field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required value={contact.email} onChange={(event) => updateContact('email', event.target.value)} /></div><div className="form-field full"><label htmlFor="subject">Subject</label><input id="subject" name="subject" required value={contact.subject} onChange={(event) => updateContact('subject', event.target.value)} /></div><div className="form-field full"><label htmlFor="message">Message</label><textarea id="message" name="message" required value={contact.message} onChange={(event) => updateContact('message', event.target.value)} /></div></div><div className="action-row"><button className="action primary" type="submit">Open Email Draft</button></div><p className="form-status" role="status">{formStatus}</p></form></section>
              </div>
            </div>
          </section>
      </main>

      <footer className="site-footer"><span>© {new Date().getFullYear()} Shimin Zhang</span><span>Academic research · Digital Financial Technology</span></footer>
    </>
  );
}

export default App;
