# Diretrizes para IA em Projetos Web

Use estas instruções como base universal e compacta para qualquer projeto web. Aplique apenas o que for relevante à stack e ao escopo do projeto.

## Prioridades

1. Segurança por padrão.
2. Acessibilidade por design.
3. Código simples, legível e reutilizável.
4. Boa performance em desktop e mobile.
5. SEO e metadados quando houver páginas públicas.

## Conduta

- Entenda a estrutura antes de alterar arquivos.
- Preserve estilo, padrões e APIs existentes.
- Prefira mudanças pequenas, coesas e fáceis de revisar.
- Não invente requisitos, domínios, credenciais ou dados reais.
- Não crie arquivos extras de documentação, configuração ou testes sem solicitação.
- Evite dependências novas; adicione apenas quando houver benefício claro.
- Não exponha segredos, tokens, chaves, rastros de pilha ou dados sensíveis.
- Em templates, dados de exemplo são aceitáveis; deixe claro o que deve ser substituído.

## Segurança

- Nunca confie em dados do cliente; valide no frontend por UX e no backend por segurança.
- Escape saída conforme o contexto: HTML, atributo, URL, JavaScript, SQL ou shell.
- Evite `eval`, `new Function`, `innerHTML` com dados dinâmicos e comandos com input direto.
- Use consultas parametrizadas em bancos de dados.
- Proteja ações sensíveis com autenticação, autorização, CSRF quando aplicável e limite de requisições.
- Configure cabeçalhos de segurança conforme o ambiente: CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
- Não use `upgrade-insecure-requests` em ambientes locais sem HTTPS.
- Mensagens de erro devem ser úteis ao usuário sem revelar detalhes internos.

## Acessibilidade

- Use HTML semântico antes de ARIA.
- Mantenha hierarquia correta de títulos.
- Todo controle interativo deve funcionar por teclado e ter foco visível.
- Formulários precisam de `label`, validação clara e mensagens acessíveis.
- Imagens informativas precisam de `alt`; imagens decorativas devem ter `alt=""`.
- Garanta contraste mínimo WCAG AA.
- Inclua skip link quando houver navegação extensa.
- Respeite `prefers-reduced-motion` em animações e transições.

## Frontend

- Prefira HTML, CSS e JavaScript nativos quando suficientes.
- Use framework/biblioteca somente se já existir no projeto ou se for solicitado.
- Organize CSS com variáveis, unidades relativas e abordagem responsiva consistente.
- Evite seletores excessivamente específicos e `!important` sem necessidade.
- Em JavaScript, use `'use strict'`, modularização, delegação de eventos quando útil e tratamento de erros.
- Evite poluir o escopo global.
- Trate APIs do navegador com fallback quando necessário.
- Remova código morto, logs de depuração e componentes não usados antes de produção.

## Performance

- Otimize imagens: dimensões corretas, compressão, `loading="lazy"` quando adequado e formatos modernos quando possível.
- Priorize conteúdo acima da dobra e evite layout shift.
- Reduza requisições, scripts bloqueantes e CSS/JS não utilizado.
- Use CDN ou assets locais conforme o contexto do projeto.
- Para SPAs, aplique carregamento sob demanda, divisão de código e estados de carregamento quando fizer sentido.

## SEO e Metadados

- Páginas públicas devem ter `title`, `description`, viewport, canonical quando aplicável e idioma correto.
- Configure Open Graph e Twitter/X para compartilhamento social.
- Use JSON-LD apenas quando representar dados reais da página.
- Mantenha `robots.txt` e `sitemap.xml` alinhados ao domínio final.
- Evite excesso de palavras-chave; priorize conteúdo útil.

## Backend e APIs

- Separe responsabilidades e use abstrações para serviços externos.
- Valide permissões em cada requisição, não apenas no login.
- Use status HTTP corretos e respostas de erro padronizadas.
- Implemente paginação em listas grandes.
- Use transações para operações críticas e idempotência quando necessário.
- Configure CORS de forma restritiva; nunca use curinga em produção sem justificativa.
- Documente endpoints somente quando solicitado ou quando o projeto já adotar documentação de API.

## PWA e Publicação

- Manifest, service worker, cache offline e notificações devem existir apenas se o projeto realmente precisar.
- Revise `start_url`, `scope`, ícones e cores antes de publicar.
- Configure cache, redirecionamentos e cabeçalhos no provedor real de hospedagem.
- Considere diferenças entre Apache, Nginx, Cloudflare Pages, GitHub Pages, Netlify e Vercel.

## Documentação e Comentários

- Escreva código autoexplicativo; comente o motivo, não o óbvio.
- Mantenha README, changelog e instruções apenas quando existirem ou forem solicitados.
- Não adicione documentação automática para alterações pontuais.

## Revisão Final

- Verifique erros, links quebrados, assets inexistentes e inconsistências de idioma.
- Confirme responsividade, acessibilidade básica, SEO essencial e ausência de dados sensíveis.
- Informe no chat o que foi alterado e qualquer pendência real.