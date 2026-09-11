import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const depop = 'https://www.depop.com/wildfairyvintagee/'
const instagram = 'https://www.instagram.com/wildfairyvintage'

const pieces = [
  {
    title: 'The green room',
    note: 'A study in colour, texture and old-world romance.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85',
    className: 'piece-wide',
  },
  {
    title: 'Soft armour',
    note: 'Lace, structure, a little bit of mischief.',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=1100&q=85',
    className: 'piece-tall',
  },
  {
    title: 'After dark',
    note: 'Pieces with a story still left to tell.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1100&q=85',
    className: 'piece-square',
  },
]

function App() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '32%'])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <main>
      <header className="nav">
        <a className="wordmark" href="#top" aria-label="Wild Fairy Vintage home">
          WFV
        </a>
        <nav>
          <a href="#archive">Archive</a>
          <a href="#about">About</a>
          <a href={instagram} target="_blank" rel="noreferrer">Instagram</a>
        </nav>
        <a className="nav-shop" href={depop} target="_blank" rel="noreferrer">Shop on Depop ↗</a>
      </header>

      <section ref={heroRef} id="top" className="hero">
        <motion.div className="hero-image" style={{ y: imageY }} />
        <div className="hero-wash" />
        <motion.div className="hero-copy" style={{ y: titleY, opacity: titleOpacity }}>
          <p className="eyebrow">A vintage wardrobe / found in the wild</p>
          <h1>
            <span>Wild</span>
            <span>Fairy</span>
            <span>Vintage</span>
          </h1>
          <div className="hero-bottom">
            <p>Old clothes. New stories.<br />Pieces that refuse to disappear.</p>
            <a className="circle-link" href="#archive" aria-label="Explore the archive">↓</a>
          </div>
        </motion.div>
        <div className="hero-index">01 / 04</div>
      </section>

      <section className="intro" id="about">
        <div className="section-marker">01 <span>THE CURATION</span></div>
        <div className="intro-grid">
          <p className="display-copy">A wardrobe assembled<br /><em>piece by piece.</em></p>
          <div className="intro-body">
            <p>Wild Fairy Vintage is a collection of clothing found because it felt worth finding. The good stuff is rarely loud. It lives in the cut, the fabric, the strange little detail you notice twice.</p>
            <p>This is a visual home for the pieces. The shop stays on Depop, where every available find can be explored and purchased.</p>
            <a className="text-link" href={depop} target="_blank" rel="noreferrer">Enter the shop <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="archive" id="archive">
        <div className="section-marker">02 <span>THE ARCHIVE</span></div>
        <div className="archive-heading">
          <h2>Current<br /><em>finds.</em></h2>
          <p>Selected visual studies.<br />Availability lives on Depop.</p>
        </div>
        <div className="piece-grid">
          {pieces.map((piece, index) => (
            <motion.a
              className={`piece ${piece.className}`}
              href={depop}
              target="_blank"
              rel="noreferrer"
              key={piece.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="piece-image" style={{ backgroundImage: `url(${piece.image})` }} />
              <div className="piece-meta">
                <span>{piece.title}</span>
                <span>View on Depop ↗</span>
              </div>
              <p>{piece.note}</p>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-orbit" aria-hidden="true"><span>WILD · FAIRY · VINTAGE · WILD · FAIRY · VINTAGE ·</span></div>
        <div className="manifesto-copy">
          <p className="eyebrow">03 / THE DETAILS</p>
          <h2>Keep the<br /><em>interesting</em><br />things.</h2>
          <p>Not everything needs to be new. Some things get better with a little history.</p>
        </div>
      </section>

      <section className="shop-section">
        <div className="section-marker">04 <span>THE SHOP</span></div>
        <div className="shop-card">
          <div>
            <p className="eyebrow">The collection lives elsewhere</p>
            <h2>Find your<br /><em>next piece.</em></h2>
          </div>
          <a className="shop-button" href={depop} target="_blank" rel="noreferrer">Shop Wild Fairy Vintage <span>↗</span></a>
        </div>
      </section>

      <footer>
        <div className="footer-mark">WILD<br />FAIRY<br /><em>VINTAGE</em></div>
        <div className="footer-links">
          <a href={depop} target="_blank" rel="noreferrer">Depop ↗</a>
          <a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
        <p>© {new Date().getFullYear()} Wild Fairy Vintage</p>
      </footer>
    </main>
  )
}

export default App
