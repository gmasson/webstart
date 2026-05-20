# WebStart - Template para Projetos Web

![Versão](https://img.shields.io/badge/versão-2.0-blue.svg)
![Licença](https://img.shields.io/badge/licença-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

WebStart é um template estático para iniciar rapidamente projetos web com HTML semântico, Tailwind CSS via CDN e JavaScript leve. Ele mantém dados de exemplo de propósito, para servir como ponto de partida em novos sites, landing pages, páginas institucionais, páginas de produto, MVPs e protótipos.

## Recursos

- 🎨 **Tema claro/escuro** com preferência salva localmente.
- ⚡ **Tailwind CSS via CDN** para prototipagem rápida, sem etapa de build.
- 📱 **Base PWA** com manifest, ícones e screenshots.
- 🔍 **SEO inicial** com canonical, descrição, Open Graph, Twitter/X e JSON-LD.
- ♿ **Acessibilidade** com HTML semântico, skip link, foco visível e formulário com labels.
- 🧭 **Arquivos de publicação** com robots, sitemap, página 404 e modelo de configuração Apache.
- 🧩 **Componentes de exemplo** para cards, checklist, formulário e chamada para ação.

## Estrutura

```text
index.html
404.html
manifest.json
robots.txt
sitemap.xml
assets/
  css/styles.css
  js/scripts.js
  img/
```

## Como usar

1. Baixe o template ou use-o como base para um novo repositório.
2. Substitua textos, links, imagens e chamadas para ação pelos dados reais do projeto.
3. Troque `https://site.com/` pelo domínio final em HTML, sitemap e robots.
4. Atualize `title`, `description`, Open Graph, Twitter/X e JSON-LD.
5. Revise o manifest com nome, descrição, cores, ícones e screenshots do projeto final.
6. Remova componentes de exemplo que não forem usados.
7. Configure cabeçalhos, redirecionamentos e cache no provedor de hospedagem.

## Observações sobre Tailwind via CDN

O uso via CDN é prático para começar rápido e editar arquivos estáticos diretamente. Para projetos maiores ou com requisitos rígidos de performance, considere migrar para uma etapa de build do Tailwind para gerar apenas o CSS usado em produção.

## Checklist antes de publicar

- [ ] Conteúdo real no lugar dos textos de exemplo.
- [ ] Domínio final aplicado em canonical, Open Graph, Twitter/X, JSON-LD, sitemap e robots.
- [ ] Imagens otimizadas e com textos alternativos adequados.
- [ ] Contraste, navegação por teclado e foco visível testados.
- [ ] Formulários conectados a uma API segura com validação no servidor.
- [ ] Cabeçalhos de segurança configurados no ambiente final.
- [ ] Componentes, comentários e assets não utilizados removidos.
- [ ] Sitemap enviado aos mecanismos de busca quando aplicável.

## Publicação

O projeto pode ser publicado como site estático em serviços como GitHub Pages, Cloudflare Pages, Netlify, Vercel ou hospedagens tradicionais. Em servidores Apache, o arquivo `htaccess.txt` pode ser usado como referência para criar um `.htaccess` conforme o ambiente.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.