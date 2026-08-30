# Resto Cucina

Landing page premium para um restaurante italiano ficticio em Gramado, RS. O projeto apresenta a experiencia do Resto Cucina com visual sofisticado, secoes institucionais, menu interativo, galeria, avaliacoes, mapa e fluxo de reserva simulado.

## Preview

Site publicado pelo GitHub Pages:

https://eduardodebarba.github.io/resto-cucina/

## Funcionalidades

- Hero visual com imagem personalizada do restaurante.
- Navegacao responsiva com menu mobile.
- Secoes sobre o restaurante, experiencia, chef, galeria e avaliacoes.
- Menu por categorias com scroll personalizado.
- Modal de menu completo com valores em reais.
- Modal de reserva com formulario simulado.
- Limpeza automatica do formulario apos envio e fechamento do modal.
- Secao de contato com mapa do centro de Gramado, RS.
- Links para Instagram, Facebook e TripAdvisor.
- Favicon personalizado relacionado ao tema gastronomico.
- Deploy automatico no GitHub Pages via GitHub Actions.

## Tecnologias

- React 19
- Vinext
- TypeScript
- Tailwind CSS
- Lucide React
- GitHub Actions
- GitHub Pages

## Como rodar localmente

Instale as dependencias:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois acesse:

```text
http://localhost:3000/
```

## Scripts disponiveis

```bash
npm run dev
```

Inicia o ambiente local de desenvolvimento.

```bash
npm run build
```

Gera a build de producao.

```bash
npm run start
```

Inicia a build gerada em ambiente local de producao.

```bash
npm run lint
```

Executa a verificacao de qualidade do codigo.

```bash
npm run format
```

Formata os arquivos do projeto.

## Estrutura principal

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/site/
  header.tsx
  hero.tsx
  menu-preview.tsx
  reservation-modal.tsx
  location.tsx
  footer.tsx
lib/
  site-content.ts
public/
  favicon.svg
  hero-casa-bellini-clean.png
.github/workflows/
  deploy.yml
```

## Observacao

Este e um projeto demonstrativo. O formulario de reserva simula o envio no navegador e nao grava dados em um banco ou servico externo.
