# Diretrizes Universais para Desenvolvimento Web com IA

Este documento estabelece diretrizes abrangentes para desenvolvimento web com IA, priorizando segurança, acessibilidade e qualidade de código. As práticas aqui definidas seguem os padrões OWASP para segurança e WCAG para acessibilidade, garantindo que projetos desenvolvidos com assistência de IA mantenham os mais altos padrões da indústria.

## Princípios Fundamentais

### Princípio Central
Todo código gerado deve ser seguro por padrão, acessível por design e mantível a longo prazo.

### Integridade e Confiabilidade
* Não invente, especule ou deduza fatos. Admita quando não houver certeza
* Sempre verificar compatibilidade entre versões de dependências antes de sugerir integrações
* Validar informações técnicas com documentação oficial da linguagem/framework
* Considerar retrocompatibilidade ao sugerir soluções
* Informar sobre deprecações conhecidas e alternativas recomendadas

### Qualidade e Revisão
* Aplicar princípio DRY (Don't Repeat Yourself) rigorosamente
* Revisar: ortografia, gramática, fluidez e legibilidade
* Verificar lógica e fluxo antes de apresentar solução
* Considerar edge cases e cenários de erro
* Validar acessibilidade e usabilidade em todas as sugestões

## Segurança - Camadas de Proteção

### Validação e Sanitização
* **Dupla validação obrigatória**: client-side (usabilidade) + server-side (segurança)
* Nunca confiar em dados vindos do cliente, mesmo que validados no frontend
* Sanitizar ANTES de processar e DEPOIS antes de exibir
* Validar tipos de dados, tamanhos e formatos em todas as entradas
* Escapar caracteres especiais apropriados para cada contexto (HTML, SQL, JS, URL, Shell)
* Implementar rate limiting em todas as operações sensíveis
* Nunca expor informações sensíveis em mensagens de erro
* Sempre comunicar erros ao usuário de forma amigável sem vazar detalhes internos

### Prevenção de Vulnerabilidades Comuns
* **XSS**: Escapar toda saída, usar CSP headers, evitar eval() e innerHTML com dados dinâmicos
* **SQL Injection**: Usar sempre prepared statements, nunca concatenar queries
* **CSRF**: Implementar tokens únicos por sessão, validar origem das requisições
* **SSRF**: Validar e sanitizar URLs, implementar whitelist de domínios
* **Path Traversal**: Nunca usar input direto em caminhos, validar contra padrões maliciosos
* **XXE**: Desabilitar entidades externas em parsers XML
* **Insecure Deserialization**: Validar e sanitizar dados antes de deserializar
* **Command Injection**: Nunca passar input direto para comandos do sistema
* **LDAP Injection**: Escapar caracteres especiais LDAP em queries
* **NoSQL Injection**: Validar tipos e sanitizar antes de queries NoSQL

### Autenticação e Autorização
* Implementar política de senhas fortes (mínimo 8 caracteres, complexidade)
* Usar hashing seguro para senhas (bcrypt, scrypt, argon2) com salt único
* Implementar 2FA/MFA quando possível
* Tokens devem ter expiração apropriada e refresh tokens quando aplicável
* Implementar princípio de menor privilégio
* Validar permissões em cada requisição, não apenas no login
* Proteger contra ataques de força bruta com captcha e bloqueio temporário
* Implementar logout seguro (invalidar tokens server-side)

### Gerenciamento de Sessão
* Gerar IDs de sessão aleatórios e únicos
* Regenerar ID de sessão após login bem-sucedido
* Implementar timeout de sessão por inatividade
* Usar flags de cookie seguros (Secure, HttpOnly, SameSite)
* Invalidar sessões antigas ao fazer novo login
* Implementar detecção de sessões concorrentes

### Headers e Configurações de Segurança
* Configurar todos os security headers relevantes (CSP, HSTS, X-Frame-Options, etc.)
* Desabilitar informações desnecessárias (versões de servidor, stack traces em produção)
* Implementar HTTPS obrigatório com certificados válidos
* Configurar CORS apropriadamente, nunca usar wildcard em produção
* Remover headers que expõem informações do servidor
* Implementar rate limiting global e por endpoint

## Frontend - Boas Práticas Universais

### Stacks e Dependências
* **Prioridade 1**: HTML5 semântico, CSS3 e JavaScript puro
* **Prioridade 2**: Frameworks/bibliotecas apenas quando:
  - Explicitamente solicitado pelo usuário
  - Complexidade justificar o overhead
  - Benefício claro superar o custo de manutenção
* Aplicar os mesmos princípios de qualidade independente da stack escolhida

### HTML Semântico e Acessível
* Usar tags HTML5 semânticas apropriadas para cada conteúdo
* Incluir lang no elemento HTML e charset UTF-8
* Garantir hierarquia correta de headings (h1-h6)
* Todos os elementos interativos devem ser acessíveis via teclado
* Formulários devem ter labels associados e mensagens de erro claras
* Imagens devem ter alt text descritivo ou vazio se decorativas
* Links devem ter texto descritivo, evitar "clique aqui"
* Implementar landmarks ARIA quando elementos semânticos não forem suficientes
* Garantir contraste adequado entre texto e fundo (WCAG AA mínimo)
* Implementar skip links para navegação por teclado
* Preferir fontes do sistema; se usar Google Fonts, incluir `display=swap`.
* Para imagens placeholder, usar serviços apropriados (ex: picsum.photos, placeholder.com)
* Considerar alternativas locais quando serviços externos não forem viáveis

### CSS e Estilos
* Usar variáveis CSS (custom properties) no topo do CSS para facilitar a manutenção e reutilização
* Implementar mobile-first ou desktop-first consistentemente
* Usar unidades relativas (rem, em, %) para melhor escalabilidade
* Evitar !important exceto quando absolutamente necessário
* Organizar CSS de forma modular e escalável
* Implementar fallbacks para propriedades CSS modernas
* Considerar performance ao usar animações e transições
* Evitar seletores muito específicos ou aninhados
* Implementar print styles quando relevante
* Considerar prefers-reduced-motion para acessibilidade

### JavaScript e Interatividade
* Seguir princípios de programação funcional quando possível
* Use variáveis no início do arquivo para facilitar manutenção
* Manter código modular e reutilizável
* Evitar global namespace pollution
* Evitar uso de eval() e new Function()
* Usar strict mode (`'use strict';`)
* Implementar event listeners de forma eficiente
* Usar event delegation quando apropriado para performance
* Implementar debounce/throttle em eventos frequentes
* Gerenciar memória adequadamente (remover listeners, limpar timers)
* Tratar erros gracefully com feedback ao usuário
* Evitar bloqueio da thread principal
* Usar async/await ao invés de callbacks aninhados
* Validar suporte a APIs antes de usar
* Implementar fallbacks para funcionalidades não suportadas
* Implemente polyfills apenas quando necessário, preferindo soluções nativas
* Não carregar polyfills desnecessários

### Performance e Design
* Configurar viewport e meta tags para mobile
* Implementar touch gestures apropriados
* Otimizar para performance em redes lentas
* Considerar integração com APIs nativas do dispositivo
* Implementar offline-first quando possível
* Minimizar número de requisições HTTP
* Otimizar imagens (formato, tamanho, lazy loading) conforme possível
* Usar CDN para assets estáticos quando apropriado
* Implementar code splitting quando aplicável
* Priorizar conteúdo above-the-fold
* Evitar layout shifts (CLS)
* Preferir ícones em SVG
* Implementar progressive enhancement para funcionalidades não essenciais
* Manter consistência de UI/UX entre páginas

### SEO e metadados
* Incluir meta viewport e metatags essenciais (`description`, `keywords`, `og:` quando aplicável)
* Estruturar conteúdo com títulos e subtítulos claros; usar atributos semanticamente relevantes
* Evitar excesso de palavras-chave, priorizar leitura e utilidade
* Incluir JSON-LD estruturado para dados relevantes (artigos, produtos, eventos)
* Garantir URLs amigáveis e descritivas
* Implementar sitemap.xml e robots.txt quando aplicável

## Backend - Boas Práticas Universais

### Arquitetura e Estrutura
* Usar injeção de dependência para baixo acoplamento
* Criar abstrações para operações externas
* Implementar padrões de design apropriados
* Manter responsabilidade única por módulo/classe
* Documentar decisões arquiteturais importantes

### Gerenciamento de Dados e Integrações
* Implementar transactions para operações críticas
* Usar índices apropriados no banco de dados
* Evitar N+1 queries
* Implementar paginação para grandes conjuntos de dados
* Versionar schema de banco de dados
* Validar webhooks e callbacks externos
* Documentar endpoints, parâmetros e respostas
* Padronizar formato de respostas de erro
* Implementar idempotência em operações críticas

## Qualidade e Configurações

### Qualidade de Código
* Seguir style guide consistente da linguagem/framework
* Evite dependências externas, prefira código puro
* Manter dependências atualizadas em suas últimas versões estáveis
* Refatorar código com alta complexidade
* Eliminar código morto regularmente
* Manter documentação atualizada
* Evitar redundâncias nos códigos, prefira abstrações e reutilização
* Realizar code reviews regulares

### Configuração e Secrets
* Usar variáveis de ambiente sempre que necessário
* Nunca hardcodar credenciais ou URLs
* Usar princípio de menor privilégio para acessos
* Documentar variáveis de ambiente necessárias

### Padrões de Indústria
* Seguir padrões W3C para web
* Implementar padrões WCAG para acessibilidade
* Seguir OWASP Top 10 para segurança
* Aderir a padrões ISO quando aplicável
* Implementar padrões de API da indústria (OpenAPI, JSON:API)
* Seguir semantic versioning para releases
* Usar formatos de data/hora ISO 8601

## Revisão
* Sempre revisar o código gerado para remover redundâncias e potenciais falhas
* Confirmar compatibilidade cross‑browser (desktop e mobile) e desempenho mínimo aceitável

## Documentação

### Comentários
* Escrever código autoexplicativo que minimize necessidade de comentários
* Documentar o "porquê", não o "como" em comentários
* Manter comentários atualizados com mudanças no código
* Documentar regras de negócio complexas
* Incluir exemplos de uso em documentação de APIs
* Documentar workarounds e suas razões
* Não incluir segredos, chaves ou dados sensíveis no código ou nos comentários

### Documentação de Projeto
* Manter README atualizado com instruções de setup
* Documentar arquitetura e decisões importantes
* Criar guias de contribuição para desenvolvedores
* Documentar processos de deploy e rollback
* Manter changelog de versões
* Documentar dependências e suas versões mínimas
* Incluir troubleshooting comum

### Diretrizes de Documentação Automática
* Não criar documentação adicional sobre alterações pontuais
* Documentar apenas quando solicitado ou para decisões arquiteturais críticas

## Considerações por Tipo de Projeto

### Single Page Applications (SPA) e Multi Page Applications (MPA)
* Implementar lazy loading de rotas e componentes
* Configurar roteamento client-side com fallback server-side
* Gerenciar estado global de forma consistente (Context API, Vuex, Redux, etc.)
* Implementar code splitting por rota/feature
* Configurar bundle splitting otimizado (vendor, app, chunks)
* Considerar Server-Side Rendering (SSR) ou Static Site Generation (SSG) para SEO
* Implementar loading states e skeleton screens
* Otimizar carregamento de assets compartilhados
* Implementar prefetching de páginas relacionadas
* Gerenciar dados compartilhados via localStorage/sessionStorage

### Progressive Web Apps (PWA)
* Implementar Service Worker para cache e offline
* Configurar Web App Manifest completo
* Implementar estratégias de cache (Cache First, Network First, Stale While Revalidate)
* Adicionar funcionalidades offline essenciais
* Implementar notificações push quando relevante
* Configurar ícones e splash screens para diferentes dispositivos
* Considerar Background Sync para ações offline

### APIs e Microserviços
* Implementar versionamento de API consistente (v1, v2 em URL ou headers)
* Documentar endpoints com OpenAPI/Swagger
* Configurar CORS apropriadamente
* Implementar health checks e métricas
* Usar status codes HTTP apropriados
* Implementar paginação padrão para listas
* Implementar circuit breakers para dependências externas

### Aplicações Serverless
* Otimizar cold starts (tamanho da função, dependências)
* Gerenciar limites de execução e memória
* Usar variáveis de ambiente para configuração
* Implementar retry logic para operações assíncronas
* Documentar arquitetura serverless e fluxos de dados
