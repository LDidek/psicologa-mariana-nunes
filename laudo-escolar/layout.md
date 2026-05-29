# Layout - Psicóloga Mariana Nunes

**Aesthetic Identity:** Warm Thread Therapy — A página deve parecer uma carta manuscrita entregue com cuidado: orgânica, humana e cheia de intenção. A metáfora visual do fio percorre toda a experiência — o emaranhado que se resolve, a conexão que se forma, o cuidado que organiza o caos.

---

## 1. CORE DESIGN SYSTEM

### Palette
- **Primary (Teal):** #3ABFB5 — Verde-azulado da logo — CTAs principais, destaques, ícones, bordas de acento
- **Primary Dark:** #2A9E95 — Versão mais profunda do teal — hover states, títulos em destaque
- **Accent (Sage):** #4A7C6F — Verde-musgo do nome na logo — headings principais, âncoras visuais
- **Warm Rose:** #E8A598 — Rosa dos corações na logo — micro-detalhes, pontos de calor emocional, ilustrações
- **Background (Cream):** #FAF8F5 — Creme off-white levemente quente — fundo principal da página
- **Background Alt:** #F2EDE8 — Bege suave — fundo de seções alternadas, cards
- **Text/Dark:** #2C3E35 — Verde-escuro quase preto — corpo de texto principal
- **Text/Medium:** #5C6B63 — Verde-acinzentado — texto secundário, legendas
- **White:** #FFFFFF — Fundo de cards, modais, formulário

### Typography
- **Headings:** "Cormorant Garamond" Italic 300-400 — tracking 0.01em — elegância editorial que ecoa a caligrafia da logo
- **Display/Nome:** "Cormorant Garamond" Regular 400 — para momentos onde o nome da Mariana aparece em destaque tipográfico
- **Body:** "Jost" Regular 400 — line-height 1.75 — legibilidade suave e moderna
- **UI/Labels:** "Jost" Medium 500 — letras maiúsculas com letter-spacing 0.08em — botões, tags, rótulos de steps

**Declaração de fonte:** Cormorant Garamond + Jost — Categoria Editorial & High-End Luxury

### Visual Texture
- Noise overlay SVG com turbulência a 0.04 opacity em todo o background — sensação de papel levemente texturizado
- Ilustrações SVG do fio percorrendo seções (derivadas da metáfora da logo) — linha contínua de espessura 1.5px cor #3ABFB5 opacity 0.25
- **Border-radius system:** 4px (elementos UI), 12px (cards), 24px (containers grandes), 999px (pills/tags)
- **Shadow system:** `0 2px 12px rgba(58,191,181,0.08)` (cards em repouso), `0 8px 32px rgba(58,191,181,0.16)` (hover/destaque)
- **Spacing base:** 8px grid — seções com padding vertical de 96px desktop / 64px mobile

---

## 2. COMPONENT ARCHITECTURE & BEHAVIOR

### A. HERO — "The Unraveling"

**Arquétipo:** Hero Dominante + Split Assimétrico (60/40 conteúdo/visual)
**Constraints:** Imagem com Overlay Gradiente + Texto com Gradiente + Float Loop

**Visuals:** Altura 100svh. Background #FAF8F5. À direita (40% da tela), uma ilustração SVG animada derivada da logo — o novelo emaranhado que vai gradualmente se desfazendo em um fio que percorre para a esquerda, conectando-se ao texto. Nenhum fundo fotográfico — a ilustração é a âncora visual. Noise overlay a 0.03 opacity sobre tudo.

**Layout:** Grid de 12 colunas. Conteúdo textual ocupa colunas 1-6, posicionado verticalmente centralizado com leve inclinação para baixo (padding-top 120px). A ilustração SVG ocupa colunas 7-12, posicionada absolutamente e sangrando levemente pela borda direita da viewport.

**Typography:**
- Pré-headline: "Jost" Medium 500, 13px, letter-spacing 0.12em, uppercase, cor #3ABFB5 — texto: "PSICÓLOGA ESPECIALISTA EM DESENVOLVIMENTO INFANTIL"
- Headline: "Cormorant Garamond" Italic 300, 64px desktop / 40px mobile, cor #2C3E35, line-height 1.15 — "Seu filho merece um olhar que vai além do diagnóstico"
- A palavra "além" em Cormorant Garamond Regular (não italic), cor #3ABFB5, como ponto de ênfase visual
- Subheadline: "Jost" Regular 400, 17px, cor #5C6B63, line-height 1.75, max-width 480px
- CTA: "Agendar avaliação" — botão pill, fundo #3ABFB5, texto branco "Jost" Medium 500, 15px, padding 16px 36px. Abaixo do botão: texto "Ou envie uma mensagem" em "Jost" 13px #5C6B63 com ícone WhatsApp inline

**Animation (HERO — sem animação de entrada, conforme regra):**
- A ilustração SVG do novelo tem um Float Loop sutil: `transform: translateY(-6px)` → `translateY(6px)` com `animation: float 4s ease-in-out infinite`
- O fio que conecta o novelo ao conteúdo tem um `stroke-dashoffset` animado em loop, criando sensação de fio "respirando"
- Cursor custom: círculo de 20px borda #3ABFB5 opacity 0.6 que segue o mouse com lag (transition 0.12s)

**Interaction:** Botão CTA com hover: scale 1.03, box-shadow `0 8px 32px rgba(58,191,181,0.35)`, transition 0.3s cubic-bezier(0.34, 1.56, 0.64, 1).

**Responsividade:** Mobile (375px): layout single-column. Ilustração move para acima do texto, altura reduzida a 180px. Headline 38px. Padding-top 60px. Subheadline 15px.

---

### B. SECAO: O PESO QUE VOCÊ CARREGA — "The Weight of Not Knowing"

**Arquétipo:** Single Focus + Container Narrow
**Constraints:** Texto Revelar (AOS fade-up) + Gradiente Linear de fundo + Wave Divider superior

**Visuals:** Background #F2EDE8 (bege suave). Wave divider SVG no topo da seção, cor #FAF8F5, criando transição orgânica. À esquerda do bloco de texto, uma linha vertical de 2px cor #3ABFB5 opacity 0.4 com altura 80px — elemento gráfico que evoca o fio. Padding vertical 96px.

**Layout:** Container centralizado, max-width 720px. Bloco de texto com padding-left 32px (para criar espaço junto à linha vertical decorativa). O parágrafo final ("O que muda com o diagnóstico certo...") recebe destaque tipográfico: fundo #3ABFB5 opacity 0.08, border-left 3px solid #3ABFB5, padding 20px 24px, border-radius 4px.

**Typography:**
- Título: "Cormorant Garamond" Italic 300, 44px desktop / 30px mobile, cor #2C3E35
- Body: "Jost" Regular 400, 17px, cor #5C6B63, line-height 1.8
- Parágrafo de destaque (o que muda): "Jost" Regular 400, 17px, cor #2C3E35 (mais escuro para contraste)

**Animation:** `data-aos="fade-up"` no título (delay 0), no primeiro parágrafo (delay 100ms), no segundo (delay 200ms), no bloco de destaque (delay 300ms). AOS com `duration: 700, easing: ease-out`.

**Responsividade:** Mobile: padding horizontal 24px, linha vertical some, título 28px.

---

### C. SECAO: O ATENDIMENTO DA MARIANA — "The Specialist's Hand"

**Arquétipo:** Split Assimétrico (45/55) + Overlapping Grid
**Constraints:** Imagem Recortada com clip-path + Glassmorphism (card sobre imagem) + Sticky Element lateral

**Visuals:** Fundo #FAF8F5. À esquerda (45%): imagem da Mariana (foto profissional) com clip-path: `polygon(0 0, 100% 0, 100% 92%, 88% 100%, 0 100%)` criando corte diagonal sutil no canto inferior direito. Border-radius 12px. A imagem recebe um overlay gradiente `linear-gradient(to right, transparent 60%, #FAF8F5 100%)` criando transição suave para o texto à direita. À direita (55%): texto com overlap de 40px sobre a imagem via negative margin.

**Nota para o desenvolvedor:** Imagem da Mariana deve ser fornecida pela cliente. Placeholder temporário: `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80` (profissional em consultório, tons suaves).

**Layout:** Flexbox. Imagem à esquerda, conteúdo à direita com padding-left 60px. Padding vertical da seção: 96px.

**Typography:**
- Título: "Cormorant Garamond" Italic 300, 44px, cor #2C3E35, max-width 520px
- Body: "Jost" Regular 400, 16px, cor #5C6B63, line-height 1.8
- Destaque de formações (lista inline): tags pill com fundo #3ABFB5 opacity 0.12, texto #2A9E95, "Jost" Medium 500, 12px, letter-spacing 0.06em, uppercase. Tags: ABA, TCC, Neuropsicopedagogia, Psicomotricidade, Avaliação Neuropsicológica

**Animation:** `data-aos="fade-right"` na imagem (delay 0), `data-aos="fade-left"` no conteúdo (delay 150ms).

**Interaction:** Cada tag de formação tem hover: fundo #3ABFB5 opacity 0.25, transition 0.2s ease.

**Responsividade:** Mobile: stack vertical. Imagem vem primeiro, largura 100%, altura 260px, object-fit cover. Clip-path simplificado. Texto abaixo com padding 24px.

---

### D. SECAO: SERVIÇOS — "The Four Threads"

**Arquétipo:** Bento Box + Floating Cards
**Constraints:** Card Stack com hover lift + Hover Reveal + Selective Color

**Visuals:** Fundo #F2EDE8. Grid de 4 cards em layout Bento — 2 cards maiores (largura 2 unidades) e 2 menores (largura 1 unidade) na linha seguinte. Cada card: fundo #FFFFFF, border-radius 16px, padding 32px, box-shadow `0 2px 12px rgba(58,191,181,0.08)`. No topo de cada card, um ícone SVG minimalista de linha fina (1.5px) cor #3ABFB5, tamanho 32px. O fio decorativo da identidade visual passa atrás dos cards, visível nos espaços entre eles.

**Cards:**
1. **Psicoterapia Individual** (card grande) — ícone: figura humana com ondas cerebrais
2. **Orientação Parental** (card grande) — ícone: duas figuras adultas e uma pequena
3. **Avaliação Psicológica** (card médio) — ícone: documento com lupa
4. **Apoio Escolar e Familiar** (card médio) — ícone: escola/casa conectadas

**Typography em cards:**
- Número/ícone: topo do card
- Título: "Cormorant Garamond" Italic 400, 22px, cor #2C3E35
- Body: "Jost" Regular 400, 15px, cor #5C6B63, line-height 1.7

**Animation:** `data-aos="fade-up"` com stagger 80ms entre cards.

**Interaction:** Hover no card: `transform: translateY(-6px)`, box-shadow `0 8px 32px rgba(58,191,181,0.16)`, transition `0.35s cubic-bezier(0.34, 1.56, 0.64, 1)`. Borda superior do card aparece (border-top 3px solid #3ABFB5) no hover com transition `width 0→100%` via pseudo-element.

**Responsividade:** Mobile: grid single-column, todos os cards iguais. Gap 16px.

---

### E. SECAO: AUTORIDADE — "The Curriculum of Care"

**Arquétipo:** Editorial + Type Hero
**Constraints:** Texto com Gradiente + Timeline + Diagonal Divider superior e inferior

**Visuals:** Fundo #2C3E35 (verde-escuro). Seção com `clip-path: polygon(0 3%, 100% 0, 100% 97%, 0 100%)` criando corte diagonal. Noise overlay a 0.06 opacity. À esquerda: bloco de texto. À direita: lista de formações como timeline vertical com linha de #3ABFB5.

**Layout:** Grid 50/50. Padding vertical 120px (compensar o clip-path). Max-width 1200px.

**Typography:**
- Label superior: "Jost" Medium 500, 12px, letter-spacing 0.12em, uppercase, cor #3ABFB5
- Título: "Cormorant Garamond" Italic 300, 52px, cor #FAF8F5, line-height 1.2 — "Mariana Nunes, Psicóloga em Florianópolis"
- Body: "Jost" Regular 400, 16px, cor rgba(250,248,245,0.75), line-height 1.8
- Formações (timeline items): "Jost" Medium 500, 14px, cor #FAF8F5, com dot #3ABFB5 de 8px e linha conectora #3ABFB5 opacity 0.3

**Animation:** `data-aos="fade-up"` no título. Timeline items com stagger 100ms cada.

**Responsividade:** Mobile: stack vertical. Clip-path simplificado. Título 34px.

---

### F. SECAO: COMO FUNCIONA — "Three Knots in the Thread"

**Arquétipo:** Scroll Storytelling + Single Focus por step
**Constraints:** Stagger Animation + Linha conectora SVG entre steps + Fade Up

**Visuals:** Fundo #FAF8F5. 3 steps em layout horizontal no desktop. Conectados por uma linha pontilhada horizontal #3ABFB5 opacity 0.4 (espessura 1.5px, dash 6px gap 4px). Cada step: número grande em "Cormorant Garamond" 120px cor #3ABFB5 opacity 0.15 posicionado atrás do conteúdo (decorativo). Ícone SVG de linha fina acima do número.

**Layout:** Flexbox row, 3 colunas iguais, gap 48px. Cada step tem: número decorativo, ícone, título, corpo. A linha conectora é um SVG posicionado absolutamente entre os steps.

**Typography:**
- Número decorativo: "Cormorant Garamond" Regular 400, 120px, cor #3ABFB5 opacity 0.15
- Título do step: "Cormorant Garamond" Italic 300, 24px, cor #2C3E35
- Body: "Jost" Regular 400, 15px, cor #5C6B63, line-height 1.75

**Animation:** `data-aos="fade-up"` com stagger 150ms entre steps. Linha conectora tem `stroke-dashoffset` animado (draw SVG) quando a seção entra no viewport — via Intersection Observer.

**Responsividade:** Mobile: stack vertical, linha conectora vira vertical à esquerda dos steps.

---

### G. SECAO: LOCAL — "Where Care Lives"

**Arquétipo:** Split Vertical 50/50
**Constraints:** Imagem Fullbleed (mapa ou foto do consultório) + Glassmorphism (card de info sobre imagem)

**Visuals:** À esquerda: iframe do Google Maps embedado, border-radius 0, altura 480px, largura 100%. À direita: fundo #F2EDE8, padding 64px. Bloco de informações com ícone de localização #3ABFB5, endereço, e badge "Atendimento Online Disponível" em pill #3ABFB5 opacity 0.15, texto #2A9E95.

**Typography:**
- Título: "Cormorant Garamond" Italic 300, 40px, cor #2C3E35
- Endereço: "Jost" Regular 400, 16px, cor #5C6B63
- Badge online: "Jost" Medium 500, 13px, uppercase, letter-spacing 0.08em

**Animation:** `data-aos="fade-left"` no bloco de info.

**Responsividade:** Mobile: stack vertical. Mapa em cima (altura 260px), info abaixo.

---

### H. FAQ — "Questions Without Judgment"

**Arquétipo:** Accordion + Container Narrow
**Constraints:** Clip Reveal no conteúdo + Hover Fill na pergunta + Wave Divider superior

**Visuals:** Fundo #FAF8F5. Container max-width 720px centralizado. Cada item do accordion: border-bottom 1px solid rgba(58,191,181,0.2). Sem borda superior (exceto no primeiro item). Ícone + / − à direita, cor #3ABFB5.

**Behavior:** Ao clicar: conteúdo expande com `max-height: 0 → auto` via JS (usando `scrollHeight`). Transição `max-height 0.4s ease, opacity 0.3s ease`. Ícone rotaciona 45deg com `transition: transform 0.3s ease`. Apenas um item aberto por vez.

**Typography:**
- Pergunta: "Jost" Medium 500, 17px, cor #2C3E35
- Resposta: "Jost" Regular 400, 15px, cor #5C6B63, line-height 1.75, padding 0 0 20px 0

**Animation:** `data-aos="fade-up"` no container do FAQ.

**Responsividade:** Mobile: padding horizontal 24px.

---

### I. CTA FINAL — "The First Step"

**Arquétipo:** Contained Center + Hero Dominante (mini)
**Constraints:** Gradiente Mesh de fundo + Formulário + Ambient Motion

**Visuals:** Fundo: gradiente mesh com `radial-gradient(ellipse at 20% 50%, #3ABFB5 opacity 0.15, transparent 50%), radial-gradient(ellipse at 80% 50%, #E8A598 opacity 0.12, transparent 50%), #FAF8F5`. Duas esferas de cor suave flutuando no fundo. Container centralizado max-width 640px. Padding vertical 120px.

**Layout:** Título + subtítulo + formulário centralizado. Formulário com campos: Nome, Telefone (com intl-tel-input), E-mail, Mensagem (opcional), botão CTA. Campos com estilo: borda 1.5px solid rgba(58,191,181,0.3), border-radius 8px, padding 14px 16px, fundo branco, focus: borda #3ABFB5 com box-shadow `0 0 0 3px rgba(58,191,181,0.15)`.

**Typography:**
- Título: "Cormorant Garamond" Italic 300, 48px desktop / 32px mobile, cor #2C3E35
- Subtítulo: "Jost" Regular 400, 16px, cor #5C6B63
- Label dos campos: "Jost" Medium 500, 13px, uppercase, letter-spacing 0.06em, cor #5C6B63
- Botão: "Jost" Medium 500, 15px, uppercase, letter-spacing 0.08em, fundo #3ABFB5, cor branca, padding 16px 40px, border-radius 999px

**Animation:** As esferas de fundo têm Float Loop: `animation: floatBg 8s ease-in-out infinite alternate`. Botão tem hover: scale 1.03, box-shadow `0 8px 32px rgba(58,191,181,0.35)`.

**Responsividade:** Mobile: padding 64px 24px. Título 30px. Campos 100% width.

---

### J. FOOTER — "The End of the Thread"

**Visuals:** Fundo #2C3E35. Padding 48px. Logo da Mariana (versão clara/branca) à esquerda. À direita: links (Como funciona, Serviços, Contato) em "Jost" Regular 400, 14px, cor rgba(250,248,245,0.6), hover: cor #3ABFB5 transition 0.2s. Abaixo: linha divisória 1px rgba(255,255,255,0.1), copyright em "Jost" Regular 400, 13px, cor rgba(250,248,245,0.4).

**Responsividade:** Mobile: stack vertical, logo centralizada, links centralizados.

---

## 3. TECHNICAL REQUIREMENTS

### Bibliotecas CDN
- **AOS:** `https://unpkg.com/aos@2.3.4/dist/aos.css` e `https://unpkg.com/aos@2.3.4/dist/aos.js`
  - Init: `AOS.init({ duration: 700, easing: 'ease-out', once: true, disableMutationObserver: true })`
- **intl-tel-input:** `https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/css/intlTelInput.css` e `https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/intlTelInput.min.js`
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@400;500;600&display=swap`

### Micro-interações globais
- Todos os links de texto: underline animado via `::after` com `width: 0 → 100%`, `transition: width 0.3s ease`, cor #3ABFB5
- Scroll suave nativo: `html { scroll-behavior: smooth }`
- Custom cursor (desktop only): `<div id="cursor">` com `position: fixed`, `width: 20px`, `height: 20px`, `border: 1.5px solid #3ABFB5`, `border-radius: 50%`, `pointer-events: none`, `transition: transform 0.12s ease, opacity 0.3s ease`. Esconde em hover sobre links/botões (troca por cursor padrão)
- Botão WhatsApp flutuante: canto inferior direito, fundo #25D366, ícone SVG branco, border-radius 50%, tamanho 56px, box-shadow `0 4px 16px rgba(37,211,102,0.4)`, `animation: pulse 2s infinite` (scale 1 → 1.08 → 1)

### Diretiva de qualidade
A página deve sentir-se como um consultório: acolhedora, sem pressa, onde cada elemento tem propósito. Nenhum elemento deve parecer genérico ou template. O fio como metáfora visual deve ser perceptível mas nunca literal demais — sugestivo, não explicativo.

---

## 4. DETALHES DE CRAFT

### Transições entre seções
- Hero → O Peso: wave divider SVG #F2EDE8 sobre #FAF8F5 — ondulação suave de 60px de altura
- O Peso → Atendimento: transição por cor (ambos no mesmo background, separados por espaço generoso)
- Atendimento → Serviços: wave divider invertido, #F2EDE8
- Serviços → Autoridade: diagonal clip-path na seção de Autoridade cria a transição
- Autoridade → Como Funciona: diagonal clip-path fecha, retorna ao #FAF8F5
- Como Funciona → Local: transição limpa por espaço
- Local → FAQ: wave divider sutil
- FAQ → CTA Final: gradiente mesh de fundo começa a aparecer gradualmente

### Micro-interações únicas
- **O fio decorativo SVG** que aparece em algumas seções tem `stroke-dasharray` e `stroke-dashoffset` animados via `requestAnimationFrame` no scroll — o fio "se desenrola" conforme o usuário desce a página
- **Tags de formação** na seção de Atendimento reagem ao hover com um bounce sutil (scale 1.06, cubic-bezier elástico)
- **Steps numerados** na seção Como Funciona: ao entrar no viewport, o número decorativo faz counter-up de 0 ao número real (animação 600ms)
- **Campo de formulário**: ao focar, o label flutua para cima com `transform: translateY(-20px) scale(0.85)` — label flutuante (floating label pattern)

### Easter eggs visuais
- A linha decorativa vertical na seção "O Peso" pulsa levemente (`opacity: 0.4 → 0.7 → 0.4`) em loop de 3s — como um batimento cardíaco
- O ícone do WhatsApp flutuante, ao ser hovereado, exibe um tooltip com "Resposta em até 1h" que aparece à esquerda com fade-in 0.2s
- No footer, o copyright year é gerado via JS (`new Date().getFullYear()`) — nunca desatualiza
