# WebStart - Template para Projetos Web

**WebStart** é um template básico e altamente personalizável para começar rapidamente qualquer projeto web. Ele é projetado para ser simples, eficiente e fácil de usar, com suporte completo para responsividade e otimização de SEO.

## Incluso

- Bootstrap (CSS and JS)
- Indentação 4 Tabs
- Suporte para Social Widgets
- Suporte para Progressive Web Apps
- Suporte para Dados Estruturados
- Suporte para Sitemap

## Pré-requisitos

Este projeto utiliza o [Bootstrap](https://getbootstrap.com/) para o design responsivo e tem suporte para algumas bibliotecas externas. Certifique-se de ter uma conexão com a internet para carregar os recursos do CDN.

## Instalação

1. **Baixe ou clone o repositório:**

	Para baixar o template, use o botão **Download** na interface do GitHub ou clone o repositório:

	```bash
	git clone https://github.com/gmasson/webstart.git
	```

2. **Adicione suas próprias personalizações:**

	- **Logo**: Substitua a imagem do logo em `assets/img/logo.png` com a sua.
	- **Ícones**: Personalize o ícone da página substituindo o arquivo `assets/img/favicon.png`.
	- **Conteúdo**: Atualize as seções de conteúdo no arquivo `index.html` para refletir o seu conteúdo e estrutura de página.

### Estrutura de Diretórios

- `assets/`
  - `css/`: Arquivos de estilo. Contém os arquivos CSS personalizados, incluindo o `styles.css`, que define o estilo visual do template.
  - `img/`: Imagens, incluindo o logo e ícones. Armazena as imagens utilizadas no projeto, como o logo, ícones de favicon e outras imagens de mídia.
  - `js/`: Scripts JavaScript. Contém os scripts JavaScript usados para adicionar interatividade e funcionalidades ao template.
- `.editorconfig`: Arquivo de configuração para garantir consistência de estilo de código em diferentes editores e IDEs. Define regras para indentação, espaçamento, e outros estilos de código.
- `.gitignore`: Arquivo usado para especificar quais arquivos ou pastas não devem ser monitorados pelo Git.
- `htaccess.txt`: Arquivo de configuração para o servidor Apache. Contém regras de reescrita de URL, controle de cache, segurança, e outras configurações do servidor. Para usar, basta renomear o arquivo para `.htaccess` no servidor.
- `index.html`: Página principal do template. Arquivo HTML onde o layout e conteúdo básico do site estão definidos, com estrutura básica de navegação, seções de conteúdo, e rodapé.
- `manifest.json`: Arquivo de manifesto para web apps. Usado para configurar o comportamento e aparência do site quando acessado em dispositivos móveis como um PWA (Progressive Web App). Ele inclui informações como o nome do app, ícones, cor de fundo e cor do tema.
- `robots.txt`: Arquivo de controle de indexação para motores de busca. Informa aos motores de busca (como Google, Bing, etc.) quais páginas ou diretórios devem ser indexados e quais devem ser ignorados. Essencial para SEO.
- `sitemap.xml`: Arquivo de mapa do site. Utilizado para informar aos motores de busca a estrutura das páginas do seu site e facilitar a indexação das mesmas. Contém URLs do site e a frequência com que as páginas são atualizadas.

## Contribuindo

Se você gostaria de contribuir para este projeto, fique à vontade para enviar pull requests. As contribuições são bem-vindas!

### Como Contribuir

1. **Fork este repositório.**
2. **Crie uma branch** para sua funcionalidade (`git checkout -b minha-nova-funcionalidade`).
3. **Commit suas alterações** (`git commit -am 'Adiciona nova funcionalidade'`).
4. **Push para a branch** (`git push origin minha-nova-funcionalidade`).
5. Abra uma **pull request** para revisão.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
