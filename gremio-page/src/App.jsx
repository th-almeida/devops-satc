import './App.css'

function App() {
  return (
    <div className="app">
      <header className="hero">
        <div className="logo-container">
          <img
            src="/logo-gremio.png"
            alt="Grêmio Foot-Ball Porto Alegrense"
            className="logo logo-img"
            onError={(e) => {
              e.target.classList.add('logo-img-hidden')
              e.target.nextElementSibling?.classList.remove('logo-fallback-hidden')
            }}
          />
          <div className="logo-fallback logo-fallback-hidden" aria-hidden="true">
            <span className="year">1903</span>
            <span className="name">GRÊMIO</span>
            <span className="initials">FBPA</span>
          </div>
        </div>
        <div className="stars" aria-hidden="true">
          <span className="star">★</span>
          <span className="star">★</span>
          <span className="star">★</span>
        </div>
        <h1>Grêmio Foot-Ball Porto Alegrense</h1>
        <p className="subtitle">Tradição, raça e amor desde 1903</p>
      </header>

      <main className="content">
        <section className="section">
          <h2>Nossa História</h2>
          <p>
            O Grêmio Foot-Ball Porto Alegrense foi fundado em 15 de setembro de 1903,
            em Porto Alegre, Rio Grande do Sul. Surgiu da paixão pelo futebol trazida
            por Cândido Dias da Silva, que após assistir a uma partida em São Paulo
            decidiu fundar um clube na capital gaúcha. As cores preto, azul e branco
            representam a seriedade, a grandeza e a paz.
          </p>
          <p>
            Ao longo de mais de 120 anos, o Grêmio conquistou a admiração do Brasil e
            do mundo, com títulos continentais e uma torcida apaixonada conhecida como
            a "Grenal" quando se enfrenta ao rival Internacional.
          </p>
        </section>

        <section className="section">
          <h2>Conquistas em Destaque</h2>
          <div className="highlights">
            <div className="card">
              <span className="number">3</span>
              <span className="label">Copa Libertadores</span>
            </div>
            <div className="card">
              <span className="number">2</span>
              <span className="label">Copa do Brasil</span>
            </div>
            <div className="card">
              <span className="number">1</span>
              <span className="label">Mundial de Clubes</span>
            </div>
            <div className="card">
              <span className="number">38</span>
              <span className="label">Campeonatos Gaúchos</span>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Arena do Grêmio</h2>
          <p>
            O estádio Arena do Grêmio, inaugurado em 2012, é a casa do clube e um dos
            mais modernos estádios da América do Sul. Com capacidade para mais de
            55 mil torcedores, o ambiente de "Gigante da Beira-Rio" (referência ao
            estádio antigo) foi substituído por uma arena de padrão internacional,
            palco de grandes jogos e emoções.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p><strong>Grêmio FBPA</strong> — 1903 · Porto Alegre, RS</p>
        <p>Página criada em React · Tributo ao Imortal Tricolor</p>
        <p>Desenvolvido por Thiago Almeida</p>
      </footer>
    </div>
  )
}

export default App
