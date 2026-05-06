import React from "react";
import "./maison-arquitetura-interiores.css";

const MaisonArquiteturaInteriores: React.FC = () => {
  return (
    <div className="maison-root">
      <nav className="maison-nav">
        <div className="maison-nav-brand">
          <div className="maison-nav-logo">MAISON</div>
          <div className="maison-nav-tagline">Arquitetura & Interiores</div>
        </div>
        <div className="maison-nav-links">
          <a href="#portfolio">Portfólio</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </div>
        <button className="maison-nav-cta" type="button">
          Solicitar orçamento
        </button>
      </nav>

      <section className="maison-hero">
        <div className="maison-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=85"
            alt="Interior luxo"
          />
        </div>
        <div
          className="maison-hero-overlay"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg,rgba(12,12,10,0.82) 0%,rgba(12,12,10,0.65) 100%)",
            zIndex: 1,
          }}
        />
        <div className="maison-hero-pattern" />

        <div className="maison-hero-content">
          <div className="maison-hero-left">
            <div className="maison-hero-ornament">
              <div className="maison-ornament-line" />
              <span className="maison-ornament-text">
                Arquitetura de excelência · São Paulo
              </span>
            </div>

            <h1>
              Espaços que <em>contam histórias</em> inesquecíveis
            </h1>
            <p className="maison-hero-sub">
              Projetos residenciais e comerciais com design de alto padrão. Da
              planta à entrega, criamos ambientes que refletem quem você é.
            </p>

            <div className="maison-hero-btns">
              <a href="#portfolio" className="maison-btn-gold">
                Ver portfólio
              </a>
              <a href="#contato" className="maison-btn-ghost-gold">
                Falar com arquiteto
              </a>
            </div>
          </div>

          <div className="maison-hero-right">
            <div className="maison-hero-stat-stack">
              <div className="maison-hero-stat">
                <div className="maison-stat-big">15+</div>
                <div className="maison-stat-desc">Anos de experiência</div>
              </div>

              <div className="maison-hero-divider" />

              <div className="maison-hero-stat">
                <div className="maison-stat-big">240</div>
                <div className="maison-stat-desc">Projetos entregues</div>
              </div>
            </div>

            <div className="maison-hero-divider" />

            <div className="maison-award-row">
              <div className="maison-award">
                <div className="maison-award-year">2023</div>
                <div className="maison-award-name">Casa Vogue Award</div>
              </div>
              <div className="maison-award">
                <div className="maison-award-year">2022</div>
                <div className="maison-award-name">Best Luxury Design</div>
              </div>
              <div className="maison-award">
                <div className="maison-award-year">2021</div>
                <div className="maison-award-name">AD100 Brazil</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="maison-portfolio" id="portfolio">
        <div className="maison-section-intro">
          <div>
            <div className="maison-section-ornament">
              <div className="maison-section-line" />
              <span className="maison-section-tag-text">
                Portfólio selecionado
              </span>
            </div>
            <h2 className="maison-section-h2">Projetos recentes</h2>
          </div>
          <a
            href="#contato"
            className="maison-btn-ghost-gold"
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--gold)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
            }}
          >
            Ver todos os projetos
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr",
            gap: "1.5rem",
          }}
        >
          <div className="maison-proj" style={{ gridRow: "span 2" }}>
            <div className="maison-proj-inner" style={{ paddingBottom: "90%" }}>
              <div className="maison-proj-bg">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85"
                  alt="Residência luxo"
                />
              </div>
              <div className="maison-proj-overlay">
                <div className="maison-proj-tag">
                  Residencial · Alto de Pinheiros
                </div>
                <div className="maison-proj-name">
                  Residência Família Moreira
                </div>
                <div className="maison-proj-meta">720m² · Entregue 2024</div>
              </div>
            </div>
          </div>

          <div className="maison-proj">
            <div className="maison-proj-inner" style={{ paddingBottom: "70%" }}>
              <div className="maison-proj-bg">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=85"
                  alt="Escritório moderno"
                />
              </div>
              <div className="maison-proj-overlay">
                <div className="maison-proj-tag">Comercial · Itaim</div>
                <div className="maison-proj-name">Escritório Jurídico BRS</div>
                <div className="maison-proj-meta">380m² · Entregue 2024</div>
              </div>
            </div>
          </div>

          <div className="maison-proj">
            <div className="maison-proj-inner" style={{ paddingBottom: "70%" }}>
              <div className="maison-proj-bg">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=85"
                  alt="Cobertura luxo"
                />
              </div>
              <div className="maison-proj-overlay">
                <div className="maison-proj-tag">Residencial · Jardins</div>
                <div className="maison-proj-name">Cobertura Duplex JK</div>
                <div className="maison-proj-meta">340m² · Entregue 2023</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="maison-services" id="servicos">
        <div className="maison-section-ornament">
          <div className="maison-section-line" />
          <span className="maison-section-tag-text">O que oferecemos</span>
        </div>
        <h2 className="maison-section-h2">Nossos serviços</h2>

        <div className="maison-services-grid">
          <div className="maison-svc-card">
            <div className="maison-svc-num">01 — —</div>
            <h3>Projeto Arquitetônico</h3>
            <p>
              Concepção completa do espaço, desde o conceito até a aprovação em
              prefeitura. Projetos residenciais e comerciais de alto padrão.
            </p>
            <ul className="maison-svc-includes">
              <li>Estudo preliminar</li>
              <li>Anteprojeto e projeto legal</li>
              <li>Projeto executivo completo</li>
              <li>Compatibilização de projetos</li>
            </ul>
            <div className="maison-price-from">A partir de</div>
            <div className="maison-price-val">R$ 120/m²</div>
          </div>

          <div className="maison-svc-card">
            <div className="maison-svc-num">02 — —</div>
            <h3>Design de Interiores</h3>
            <p>
              Curadoria completa de materiais, mobiliário e iluminação.
              Ambientes que equilibram estética e funcionalidade com elegância.
            </p>
            <ul className="maison-svc-includes">
              <li>Conceito e moodboard</li>
              <li>Especificação de materiais</li>
              <li>Projeto de marcenaria</li>
              <li>Acompanhamento de obra</li>
            </ul>
            <div className="maison-price-from">A partir de</div>
            <div className="maison-price-val">R$ 85/m²</div>
          </div>

          <div className="maison-svc-card">
            <div className="maison-svc-num">03 — —</div>
            <h3>Projeto Completo</h3>
            <p>
              Arquitetura + interiores + gestão de obra. Entregamos o imóvel
              pronto para morar, sem que você precise se preocupar com nada.
            </p>
            <ul className="maison-svc-includes">
              <li>Arquitetura e interiores</li>
              <li>Gestão completa de obra</li>
              <li>Compra de itens e mobiliário</li>
              <li>Entrega chave in mano</li>
            </ul>
            <div className="maison-price-from">A partir de</div>
            <div className="maison-price-val">R$ 180/m²</div>
          </div>
        </div>
      </section>

      <section className="maison-testimonial-section">
        <div
          className="maison-section-ornament"
          style={{ justifyContent: "center" }}
        >
          <div className="maison-section-line" />
          <span className="maison-section-tag-text">Depoimento</span>
          <div className="maison-section-line" />
        </div>
        <h2 className="maison-section-h2">O que nossos clientes dizem</h2>
        <p className="maison-big-quote">
          Contratar a MAISON foi a melhor decisão que tomamos. Eles
          transformaram nossa casa em algo que vai além do que imaginávamos
          possível. Cada detalhe foi pensado com um cuidado e uma precisão que
          não encontramos em nenhum outro escritório.
        </p>
        <div className="maison-quote-source">
          ROBERTO & CLAUDIA ALVES · RESIDÊNCIA ALTO DE PINHEIROS, 2024
        </div>
      </section>

      <section className="maison-cta-section" id="contato">
        <div className="maison-cta-inner">
          <div>
            <h2>
              Vamos criar algo <em>extraordinário</em> juntos?
            </h2>
            <p>
              Entre em contato para uma conversa inicial sobre seu projeto. Sem
              compromisso, apenas uma troca de ideias para entendermos como
              podemos ajudá-lo.
            </p>
          </div>

          <div className="maison-cta-right">
            <div className="maison-cta-form">
              <div className="maison-form-row">
                <input
                  className="maison-cta-input"
                  type="text"
                  placeholder="Seu nome"
                />
                <input
                  className="maison-cta-input"
                  type="email"
                  placeholder="Seu e-mail"
                />
              </div>
              <input
                className="maison-cta-input"
                type="tel"
                placeholder="Telefone / WhatsApp"
              />
              <textarea
                className="maison-cta-input"
                placeholder="Fale um pouco sobre seu projeto..."
              />
              <button
                className="maison-btn-gold"
                style={{
                  width: "100%",
                  padding: "1.1rem",
                  fontSize: "0.75rem",
                }}
              >
                Solicitar orçamento
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="maison-footer">
        <div className="maison-footer-logo">MAISON</div>
        <p>© 2025 Maison Arquitetura · CAU A000000-0 · São Paulo, Brasil</p>
      </footer>
    </div>
  );
};

export default MaisonArquiteturaInteriores;
