/* Definição de Variáveis de Cores e Configurações Globais */
:root {
    --primary-blue: #0A3663;      /* Azul escuro profissional */
    --light-blue: #2A75D3;        /* Azul metálico moderno */
    --sky-blue: #EBF3FC;          /* Azul celeste fundo leve */
    --yellow-gold: #F2C94C;      /* Amarelo ouro para destaques */
    --dark-neutral: #1A1A1A;      /* Preto suave para textos */
    --white: #FFFFFF;
    --card-bg: #FFFFFF;
    --transition: all 0.3s ease;
}

/* Modo Alto Contraste */
body.high-contrast {
    --primary-blue: #000000;
    --light-blue: #FFFF00;
    --sky-blue: #000000;
    --yellow-gold: #FFFF00;
    --dark-neutral: #FFFFFF;
    --white: #000000;
    --card-bg: #121212;
}

body.high-contrast .card {
    border: 2px solid #FFFFFF;
}

body.high-contrast .btn-primary {
    background: #FFFF00;
    color: #000000;
    border: 2px solid #000000;
}

/* Reset básico e Acessibilidade */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: var(--dark-neutral);
}

body {
    background-color: var(--white);
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

/* Header */
.main-header {
    background-color: var(--primary-blue);
    color: var(--white);
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 15px;
}

.logo-text {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.5px;
}

.logo .highlight {
    color: var(--yellow-gold);
}

.nav-menu ul {
    display: flex;
    list-style: none;
    gap: 20px;
}

.nav-menu a {
    color: var(--white);
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
    transition: var(--transition);
}

.nav-menu a:hover, .nav-menu a:focus {
    color: var(--yellow-gold);
    outline: 2px solid var(--yellow-gold);
    outline-offset: 4px;
}

.contrast-toggle {
    background-color: transparent;
    color: var(--white);
    border: 2px solid var(--white);
    padding: 8px 16px;
    cursor: pointer;
    font-weight: 600;
    border-radius: 4px;
    transition: var(--transition);
}

.contrast-toggle:hover, .contrast-toggle:focus {
    background-color: var(--white);
    color: var(--primary-blue);
}

/* Hero Section */
.hero-section {
    background: linear-gradient(135deg, var(--primary-blue) 0%, var(--light-blue) 100%);
    color: var(--white);
    padding: 100px 0;
    text-align: center;
}

.hero-content h1 {
    font-size: 2.8rem;
    margin-bottom: 20px;
    line-height: 1.2;
}

.yellow-text {
    color: var(--yellow-gold);
}

.hero-content p {
    font-size: 1.25rem;
    margin-bottom: 40px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    opacity: 0.9;
}

.btn-primary {
    display: inline-block;
    background-color: var(--yellow-gold);
    color: #1A1A1A;
    text-decoration: none;
    padding: 15px 32px;
    font-weight: 700;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: var(--transition);
}

.btn-primary:hover, .btn-primary:focus {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
    outline: 3px solid var(--white);
}

/* About Section */
.about-section {
    padding: 80px 0;
    background-color: var(--white);
}

.grid-2 {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    align-items: center;
}

@media(min-width: 768px) {
    .grid-2 {
        grid-template-columns: 1.2fr 0.8fr;
    }
}

.about-text h2 {
    font-size: 2rem;
    color: var(--primary-blue);
    margin-bottom: 20px;
}

body.high-contrast .about-text h2 {
    color: var(--dark-neutral);
}

.lead {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 15px;
}

.about-stat-card {
    background-color: var(--sky-blue);
    padding: 40px;
    border-radius: 8px;
    text-align: center;
    border-left: 5px solid var(--light-blue);
}

.stat-number {
    font-size: 4.5rem;
    font-weight: 800;
    color: var(--primary-blue);
    line-height: 1;
    margin-bottom: 10px;
}

body.high-contrast .stat-number {
    color: var(--yellow-gold);
}

.stat-label {
    font-size: 1.1rem;
    font-weight: 600;
}

/* Pillars Section */
.pillars-section {
    padding: 80px 0;
    background-color: var(--sky-blue);
}

.section-title {
    text-align: center;
    margin-bottom: 50px;
}

.section-title h2 {
    font-size: 2.2rem;
    color: var(--primary-blue);
    margin-bottom: 10px;
}

body.high-contrast .section-title h2 {
    color: var(--dark-neutral);
}

.section-title p {
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
}

.grid-3 {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
}

@media(min-width: 768px) {
    .grid-3 {
        grid-template-columns: repeat(3, 1fr);
    }
}

.card {
    background-color: var(--card-bg);
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    transition: var(--transition);
}

.card:hover {
    transform: translateY(-5px);
}

.card-icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
}

.card h3 {
    font-size: 1.4rem;
    color: var(--primary-blue);
    margin-bottom: 15px;
}

body.high-contrast .card h3 {
    color: var(--light-blue);
}

/* Footer */
.main-footer {
    background-color: var(--dark-neutral);
    color: var(--white);
    padding: 40px 0;
    text-align: center;
    font-size: 0.95rem;
}

body.high-contrast .main-footer {
    border-top: 2px solid #FFFFFF;
}

.footer-content p + p {
    margin-top: 10px;
    opacity: 0.7;
}
