import Image from 'next/image';

const previewBooks = [
  { title: 'The Atlas of Elsewhere', author: 'M. Rowan', cover: 'cover-rust' },
  { title: 'A Field Guide to Wonder', author: 'I. Vale', cover: 'cover-moss' },
  { title: 'Letters from the Lake', author: 'N. Ellis', cover: 'cover-ochre' },
  { title: 'The Long Way Home', author: 'A. Mercer', cover: 'cover-blue' },
  { title: 'Notes for Tomorrow', author: 'S. Hart', cover: 'cover-plum' },
  { title: 'The Last Garden', author: 'R. Bell', cover: 'cover-green' },
];

const platforms = [
  {
    name: 'Windows',
    detail: 'Windows 10 and later',
    mark: 'W',
    downloadUrl: 'https://github.com/Ahmed775c6/Shelve/releases/download/v0.1.0/Shleve.Setup.0.1.0.exe',
  },
  { name: 'macOS', detail: 'Apple silicon and Intel', mark: '⌘' },
  { name: 'Linux', detail: 'AppImage for desktop', mark: 'L' },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M10 3.5v9m0 0 3.5-3.5M10 12.5 6.5 9M4.5 16h11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="landing-page">
      <div className="notice-bar">
        <span className="notice-dot" />
        <span>A calmer corner for your reading life.</span>
        <a href="#download">
          Meet Shelve
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="page-container">
        <header className="site-nav">
          <a href="#" className="brand" aria-label="Shelve home">
            <span className="brand-mark"><Image src="/icon.png" alt="" width={36} height={36} /></span>
            <span>Shelve</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#features">Why Shelve 0.1.0</a>
            <a href="#preview">The app</a>
            <a className="nav-download" href="#download">Download</a>
          </nav>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-icon"><Image src="/icon.png" alt="" width={36} height={36} /></span> YOUR PERSONAL LIBRARY</p>
            <h1 id="hero-title">A little space for your <em>whole library.</em></h1>
            <p className="hero-description">
              Gather your books, keep your place, and make reading feel like yours again.
              Shelve brings your reading life together in one thoughtful desktop app.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#download">
                Explore downloads
                <span className="button-icon"><ArrowIcon /></span>
              </a>
            </div>
            <div className="hero-footnote">
              <span><span className="tiny-check">✓</span> A home for every book</span>
              <span><span className="tiny-check">✓</span> Built for unhurried reading</span>
            </div>
          </div>

          <div className="preview-wrap" id="preview">
            <div className="preview-glow" />
            <div className="app-window" role="img" aria-label="Preview of the Shelve library app">
              <div className="app-window-bar">
                <div className="window-lights"><i /><i /><i /></div>
                <span className="window-title">Shelve <span>/</span> My library</span>
                <span className="window-profile">A</span>
              </div>
              <div className="app-window-content">
                <aside className="app-sidebar">
                  <div className="app-brand">
                    <span className="mini-mark"><Image src="/icon.png" alt="" width={23} height={23} /></span>
                    <span>Shelve</span>
                  </div>
                  <div className="app-side-label">YOUR SPACE</div>
                  <div className="app-side-link selected"><span>▦</span> Overview</div>
                  <div className="app-side-link"><span>▤</span> My library <small>24</small></div>
                  <div className="app-side-link"><span>◷</span> Reading now</div>
                  <div className="app-side-link"><span>⌑</span> Reading notes</div>
                  <div className="sidebar-bottom">
                    <div className="avatar">A</div>
                    <div><b>Your reading space</b><small>Just for you</small></div>
                  </div>
                </aside>

                <div className="app-library">
                  <div className="library-heading">
                    <div>
                      <p className="app-overline">TUESDAY, 17 NOVEMBER</p>
                      <h2>Your library</h2>
                      <p className="library-subtitle">A good day to get lost in a book.</p>
                    </div>
                    <span className="add-book">＋ <span>Add a book</span></span>
                  </div>

                  <div className="continue-card">
                    <div className="continue-cover"><span>THE<br />ATLAS<br /><small>OF ELSEWHERE</small></span></div>
                    <div className="continue-info">
                      <span className="app-overline">PICK UP WHERE YOU LEFT OFF</span>
                      <strong>The Atlas of Elsewhere</strong>
                      <span className="byline">M. Rowan · Chapter 8</span>
                      <span className="progress-track"><i /></span>
                      <span className="progress-caption">42% complete</span>
                    </div>
                    <span className="continue-arrow">↗</span>
                  </div>

                  <div className="shelf-heading">
                    <div><h3>On your shelf</h3><span>6 books</span></div>
                    <span className="view-all">View all →</span>
                  </div>
                  <div className="bookshelf-grid">
                    {previewBooks.map((book) => (
                      <div className="preview-book" key={book.title}>
                        <div className={`book-cover ${book.cover}`}>
                          <span className="cover-rule" />
                          <strong>{book.title}</strong>
                          <small>{book.author}</small>
                        </div>
                        <span className="book-title">{book.title}</span>
                        <span className="book-author">{book.author}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="preview-caption"><span /> A little look inside Shelve</div>
          </div>
        </section>

        <section className="features-section" id="features" aria-labelledby="features-title">
          <div className="section-intro">
            <p className="eyebrow">MADE FOR THE WAY YOU READ</p>
            <h2 id="features-title">Your books deserve<br /><em>a place of their own.</em></h2>
            <p>Less juggling between apps. More settling into the next chapter.</p>
          </div>
          <div className="feature-grid">
            <article className="feature-card">
              <span className="feature-number">01</span>
              <span className="feature-icon icon-shelf">▤</span>
              <h3>One thoughtful shelf</h3>
              <p>Bring your collection together and find a book by title, author, or the mood you’re in.</p>
            </article>
            <article className="feature-card">
              <span className="feature-number">02</span>
              <span className="feature-icon icon-book">◫</span>
              <h3>Pick up right here</h3>
              <p>Keep track of what you’re reading and return to the page where the story paused.</p>
            </article>
            <article className="feature-card">
              <span className="feature-number">03</span>
              <span className="feature-icon icon-note">✳</span>
              <h3>Make it your own</h3>
              <p>Save notes, build your reading list, and shape a quiet space that feels like yours.</p>
            </article>
          </div>
        </section>

        <section className="download-section" id="download" aria-labelledby="download-title">
          <div className="download-copy">
            <p className="eyebrow">A NEW CHAPTER STARTS HERE</p>
            <h2 id="download-title">Make yourself<br /><em>at home.</em></h2>
            <p>Shelve is coming to desktop. Choose your platform and check back for the first release.</p>
          </div>
          <div className="download-panel" id="download-options">
            <div className="download-panel-heading">
              <div>
                <span className="panel-kicker">SHELVE FOR DESKTOP</span>
                <h3>Choose your platform</h3>
              </div>
              <span className="release-status"><i /> Builds in progress</span>
            </div>
            <div className="platform-list">
              {platforms.map((platform) => (
                <article className="platform-card" key={platform.name}>
                  <span className="platform-mark">{platform.mark}</span>
                  <span className="platform-copy"><strong>{platform.name}</strong><small>{platform.detail}</small></span>
                  {platform.downloadUrl ? (
                    <a
                      className="platform-download"
                      href={platform.downloadUrl}
                      download
                      aria-label={`Download Shelve for ${platform.name}`}
                    >
                      Download
                    </a>
                  ) : (
                    <button type="button" disabled aria-label={`${platform.name} download coming soon`}>
                      Soon
                    </button>
                  )}
                </article>
              ))}
            </div>
            <p className="download-note">Installer links will appear here when the first builds are ready.</p>
          </div>
        </section>

        <footer className="site-footer">
          <a href="#" className="brand footer-brand">
            <span className="brand-mark"><Image src="/icon.png" alt="" width={36} height={36} /></span>
            <span>Shelve</span>
          </a>
          <p>Make room for a good story.</p>
          <a href="#download">Desktop downloads <span aria-hidden="true">↑</span></a>
          <span className="copyright">© 2026 Shelve</span>
        </footer>
      </div>
    </main>
  );
}
