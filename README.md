# Grupo: Filipe Maciel, Jesseh Albuquerque, João Henrique e Antônio Neto.
# Agenda Multitarefas (Tasker) - Landing Page

## 1. Introdução ao Projeto

**Tasker:** Agenda Multitarefas - Landing Page

**Objetivo:**
Esta aplicação web serve como uma página de destino (landing page) para o produto fictício "Tasker". O principal objetivo é apresentar o produto, destacar seus benefícios e funcionalidades-chave, e persuadir os visitantes a considerarem a aquisição da agenda. A página foi projetada para ser visualmente atraente, informativa e fácil de navegar.

**Tipo de Aplicação:**
É uma Single Page Application (SPA) construída utilizando React e TypeScript, com estilização realizada através do framework Tailwind CSS.

**Público-Alvo:**
Indivíduos e equipes que buscam melhorar sua organização pessoal, produtividade e colaboração em projetos.

## 2. Tecnologias Utilizadas

A construção desta landing page envolveu o uso das seguintes tecnologias e bibliotecas:

*   **React (v19.1.0):** Biblioteca JavaScript fundamental para a construção da interface do usuário de forma declarativa e baseada em componentes. Foi escolhido pela sua eficiência na criação de UIs dinâmicas e reutilizáveis.
*   **ReactDOM (v19.1.0):** Pacote complementar ao React, responsável por interagir com o Document Object Model (DOM) do navegador, renderizando os componentes React na página.
*   **TypeScript:** Um superset do JavaScript que adiciona tipagem estática ao código. Sua utilização visa aumentar a robustez, a manutenibilidade e a clareza do código, permitindo a detecção de erros em tempo de desenvolvimento.
*   **Tailwind CSS:** Um framework CSS "utility-first" que permite a estilização rápida e customizável diretamente no HTML/JSX. Foi escolhido pela sua flexibilidade e pela capacidade de criar designs responsivos complexos com classes utilitárias, sem a necessidade de escrever CSS customizado extensivamente.
    *   A configuração do Tailwind CSS é feita diretamente no arquivo `index.html` através de uma tag `<script>`, onde cores personalizadas (ex: `brand-teal`) e animações (ex: `fadeIn`) são definidas e estendidas.
*   **Heroicons:** Uma coleção de ícones SVG de alta qualidade. Para este projeto, os SVGs dos ícones selecionados foram embutidos diretamente como componentes React no arquivo `constants.tsx`, permitindo fácil reutilização e estilização.
*   **Pexels.com (via URL):** As imagens utilizadas no carrossel da `HeroSection` são carregadas de URLs externas do Pexels, servindo como placeholders visuais.
*   **`importmap`:** Utilizado no `index.html` para gerenciar as dependências do React (React e ReactDOM), carregando-as diretamente de um Content Delivery Network (CDN) como `esm.sh`. Isso simplifica o setup inicial, eliminando a necessidade de um bundler (como Webpack ou Parcel) para este projeto específico.

## 3. Estrutura do Projeto e Arquivos

O projeto é organizado da seguinte forma:

```
.
├── README.md                   // Este arquivo de documentação
├── index.html                  // Ponto de entrada HTML da aplicação
├── index.tsx                   // Ponto de entrada da aplicação React (TypeScript)
├── metadata.json               // Metadados da aplicação
├── App.tsx                     // Componente React principal da aplicação
├── components/                 // Diretório para componentes React reutilizáveis
│   ├── ActionButton.tsx        // Componentes de botão de ação e botão de ícone
│   ├── DarkFeatureSection.tsx  // Seção com tema escuro para destacar funcionalidades
│   ├── FooterCTASection.tsx    // Seção de Call-to-Action no rodapé (atualmente um placeholder)
│   ├── Header.tsx              // Componente de cabeçalho da página
│   ├── HeroSection.tsx         // Seção principal de "boas-vindas" com carrossel
│   ├── OrganizationSection.tsx // Seção reutilizável para apresentar funcionalidades
│   └── WhyUseSection.tsx       // Seção destacando os motivos para usar a agenda
└── constants.tsx               // Definição dos ícones SVG como componentes React
```

### Descrição Detalhada dos Arquivos Principais:

*   **`index.html`**:
    *   É o arquivo HTML raiz que o navegador carrega.
    *   Inclui a importação do Tailwind CSS via CDN.
    *   Contém a configuração customizada do Tailwind CSS (cores, animações).
    *   Utiliza `importmap` para declarar as dependências do React, apontando para CDNs, o que permite o uso de `import` de módulos ES6 diretamente no navegador.
    *   Define o `div` com `id="root"` onde a aplicação React será montada.
    *   Carrega o script principal da aplicação (`index.tsx`) como um módulo ES6.

*   **`index.tsx`**:
    *   Ponto de entrada da lógica JavaScript/TypeScript da aplicação.
    *   Importa `React`, `ReactDOM` e o componente principal `App`.
    *   Utiliza `ReactDOM.createRoot()` para criar uma raiz de renderização e monta o componente `App` dentro do elemento `#root` do `index.html`.
    *   Envolve o `App` com `<React.StrictMode>` para verificações e avisos adicionais durante o desenvolvimento.

*   **`metadata.json`**:
    *   Armazena metadados sobre a aplicação, como nome, descrição, e permissões que a aplicação pode solicitar ao frame em que está embutida (atualmente nenhuma).

*   **`App.tsx`**:
    *   O componente React raiz que define a estrutura geral da landing page.
    *   Importa e organiza a renderização sequencial dos diversos componentes de seção que compõem a página (`Header`, `HeroSection`, etc.).
    *   Aplica estilos globais básicos, como a cor de fundo, fonte padrão e altura mínima da tela.
    *   Define um contêiner de largura máxima (`max-w-6xl`) e espaçamento lateral para o conteúdo principal.

*   **`constants.tsx`**:
    *   Centraliza a definição de todos os ícones SVG utilizados na aplicação.
    *   Cada ícone é exportado como um componente React funcional (`React.FC<SVGProps>`), encapsulando o código SVG. Isso promove a reutilização e facilita a aplicação de estilos e outros atributos via props.

## 4. Detalhamento dos Componentes React (`components/`)

A interface do usuário é construída a partir de uma série de componentes React, cada um responsável por uma parte específica da página.

### 4.1. `Header.tsx`

*   **Propósito:** Exibir o cabeçalho da página.
*   **Funcionalidades:**
    *   Mostra o logo da aplicação (um ícone de calendário - `CalendarIcon`).
    *   Apresenta o nome "AGENDA MULTITAREFAS" e um slogan.
*   **Estilização:** Tailwind CSS para layout flexível, tipografia e cores.

### 4.2. `ActionButton.tsx`

*   **Propósito:** Fornecer componentes de botão reutilizáveis.
*   **Componentes Exportados:**
    *   **`ActionButton`**: Um botão de texto, geralmente com um ícone à direita.
        *   **Props:** `text` (string), `onClick` (função opcional), `className` (string opcional), `size` ('normal' ou 'large').
        *   **Visual:** Inclui um ícone `ChevronRightIcon` que se move sutilmente ao passar o mouse (`hover`), indicando interatividade.
    *   **`IconButton`**: Um botão que contém apenas um ícone.
        *   **Props:** `icon` (React.ReactNode), `onClick` (função opcional), `className` (string opcional), `ariaLabel` (string para acessibilidade).
*   **Estilização:** Tailwind CSS para aparência (cores, preenchimento, bordas arredondadas, sombras) e transições suaves.

### 4.3. `HeroSection.tsx`

*   **Propósito:** A seção principal e mais proeminente da landing page, projetada para capturar a atenção do usuário imediatamente.
*   **Funcionalidades:**
    *   **Layout Responsivo:** Em telas maiores, é dividida em duas colunas (texto à esquerda, carrossel de imagens à direita). Em telas menores, o conteúdo é empilhado verticalmente.
    *   **Conteúdo Textual:** Apresenta um título principal chamativo ("Cresça. Organize. Evolua."), um subtítulo e um parágrafo descritivo sobre a Agenda Multitarefas.
    *   **Call-to-Action (CTA):** Inclui botões `ActionButton` ("QUERO MINHA AGENDA!") e `IconButton`.
    *   **Carrossel de Imagens:**
        *   Exibe uma série de imagens que se alternam automaticamente.
        *   **Estado:** Utiliza `useState` para rastrear o índice da imagem atual (`currentIndex`).
        *   **Lógica de Intervalo:** `useEffect` e `useRef` são usados para gerenciar um `setInterval` que troca as imagens a cada 5 segundos. O intervalo é limpo e reiniciado durante interações do usuário (navegação manual) ou ao desmontar o componente para evitar vazamentos de memória.
        *   **Interatividade:** O carrossel pausa a troca automática de imagens quando o cursor do mouse está sobre ele.
        *   **Controles de Navegação:** Botões "anterior" e "próximo" (ícones `ChevronLeftIcon`, `ChevronRightIcon`) permitem a navegação manual.
        *   **Indicadores de Posição (Dots):** Pequenos círculos na parte inferior do carrossel indicam o número total de imagens e a imagem atual, permitindo também a navegação direta.
        *   **Acessibilidade:** Atributos ARIA (`role`, `aria-roledescription`, `aria-label`) são utilizados para melhorar a acessibilidade do carrossel para leitores de tela.
*   **Estilização:** Tailwind CSS para layout, tipografia, cores, sombras e uma animação `fadeIn` customizada para a transição suave das imagens do carrossel.

### 4.4. `WhyUseSection.tsx`

*   **Propósito:** Destacar os principais benefícios ou razões pelas quais um usuário deveria escolher a Agenda Multitarefas.
*   **Funcionalidades:**
    *   Apresenta um título centralizado, precedido por um `RocketLaunchIcon`.
    *   Exibe uma grade de `FeatureCard` (componente interno).
    *   **`FeatureCard` (Componente Interno):**
        *   **Props:** `title` (string), `description` (string).
        *   **Visual:** Cada cartão contém um ícone `CheckCircleIconSolid`, um título e uma breve descrição da funcionalidade ou benefício.
*   **Estilização:** Tailwind CSS para o layout em grade (responsivo), tipografia e cores.

### 4.5. `OrganizationSection.tsx`

*   **Propósito:** Um componente de seção versátil e reutilizável, projetado para apresentar conjuntos de funcionalidades ou benefícios de forma clara e ilustrada.
*   **Funcionalidades:**
    *   **Props:**
        *   `title`: Título da seção.
        *   `buttonText`: Texto para o botão de ação (`ActionButton`).
        *   `features`: Um array de objetos, onde cada objeto define `icon`, `title`, e `description` para um `IllustrativeCard`.
        *   `className`: Classes CSS adicionais para customizar o espaçamento da seção (padrão: `py-16`).
    *   Exibe um título centralizado e um `ActionButton`.
    *   Renderiza uma grade de `IllustrativeCard` (componente interno).
    *   **`IllustrativeCard` (Componente Interno):**
        *   **Props:** `icon` (React.ReactNode), `title` (string), `description` (string).
        *   **Visual:** Cada cartão apresenta um ícone, um título e uma descrição, com um leve efeito de sombra ao passar o mouse.
*   **Reutilização:** Este componente é utilizado duas vezes em `App.tsx` com diferentes conteúdos (`features`) e classes de espaçamento, demonstrando sua flexibilidade.
*   **Estilização:** Tailwind CSS para layout, tipografia, cores, e estilização dos cartões.

### 4.6. `DarkFeatureSection.tsx`

*   **Propósito:** Uma seção com um tema visual escuro, projetada para destacar funcionalidades-chave de uma maneira mais sofisticada e impactante.
*   **Funcionalidades:**
    *   Apresenta um título centralizado, acompanhado de um `SparklesIconSolid`.
    *   Renderiza uma grade de `DarkCard` (componente interno).
    *   Inclui botões de ação (`ActionButton` e `IconButton`) na parte inferior da seção.
    *   **`DarkCard` (Componente Interno):**
        *   **Props:** `icon` (React.ReactNode), `title` (string), `description` (string).
        *   **Visual:** Cartões com fundo escuro (`bg-brand-teal-700`), ícone, título e descrição em cores claras para contraste. São projetados para ocupar toda a altura disponível no contêiner da grade (`h-full`) e utilizam flexbox para alinhamento interno.
*   **Estilização:**
    *   A seção principal utiliza um fundo `bg-brand-teal-900` (um tom de verde-azulado bem escuro).
    *   **Cantos Arredondados:** Possui cantos superiores (`rounded-t-3xl md:rounded-t-[60px]`) e inferiores (`rounded-b-3xl md:rounded-b-[60px]`) arredondados. O raio de arredondamento é maior em telas médias (`md`) e superiores, criando um efeito de "cartão" proeminente para a seção inteira.
    *   **Margens Negativas e Padding:** Utiliza margens laterais negativas (`-mx-4 sm:-mx-6 lg:-mx-8`) para que o fundo da seção se estenda até as bordas do contêiner principal (`max-w-6xl`), e padding correspondente (`px-4 sm:px-6 lg:px-8`) para alinhar o conteúdo interno com o restante da página. Isso cria um efeito de "largura total" para o fundo da seção dentro do layout principal.
    *   Tailwind CSS para layout, tipografia, cores e sombras.

### 4.7. `FooterCTASection.tsx`

*   **Propósito:** Originalmente concebido como uma seção de Call-To-Action (CTA) para o rodapé da página.
*   **Status Atual:** Conforme indicado em um comentário no `App.tsx`, este componente foi substituído pela reutilização do `OrganizationSection`. O arquivo `FooterCTASection.tsx` permanece como um placeholder, caso uma seção de rodapé distinta seja necessária no futuro.
*   **Funcionalidades (se ativo):** Similar ao `OrganizationSection`, apresentaria um título, um `ActionButton` e uma grade de cartões de funcionalidades.
*   **Estilização:** Tailwind CSS, com um fundo `bg-gray-50` planejado.

## 5. Processo de Desenvolvimento e Decisões de Design

A criação desta landing page seguiu uma abordagem modular e iterativa:

1.  **Configuração Inicial e Ambiente:**
    *   O `index.html` foi estabelecido como o container da aplicação.
    *   Tailwind CSS foi integrado via CDN para agilizar a estilização e prototipagem.
    *   React e ReactDOM foram configurados para carregamento via `importmap` a partir de CDNs (`esm.sh`). Esta abordagem foi escolhida para simplificar o setup, dispensando um sistema de build complexo (como Webpack ou Vite) para este escopo de projeto, focando na rapidez de desenvolvimento e na facilidade de demonstração.
    *   `index.tsx` foi criado como o ponto de montagem da aplicação React.

2.  **Arquitetura Baseada em Componentes:**
    *   A interface foi decomposta em componentes React funcionais, cada um com uma responsabilidade clara (ex: `Header`, `HeroSection`).
    *   TypeScript foi utilizado desde o início para garantir a tipagem das props e do estado, melhorando a previsibilidade e a detecção de erros.
    *   O componente `App.tsx` atua como o orquestrador, definindo o layout geral e a sequência das seções.

3.  **Estilização com Tailwind CSS:**
    *   A filosofia "utility-first" do Tailwind CSS foi adotada para aplicar estilos diretamente no JSX. Isso permitiu um desenvolvimento ágil e a criação de um design consistente.
    *   Uma paleta de cores personalizada (`brand-teal`) foi definida na configuração do Tailwind para alinhar-se com a identidade visual da "Agenda Multitarefas".
    *   Animações sutis (como `fadeIn` para o carrossel e transições em botões) foram adicionadas para melhorar a experiência do usuário.

4.  **Lógica e Interatividade:**
    *   Hooks do React (`useState`, `useEffect`, `useRef`) foram empregados para gerenciar o estado local e os efeitos colaterais, principalmente no carrossel de imagens da `HeroSection` (controle de índice, temporizador para troca automática, pausa ao pairar o mouse).

5.  **Gerenciamento de Ícones:**
    *   Ícones SVG (predominantemente do Heroicons) foram transformados em componentes React dedicados no arquivo `constants.tsx`. Essa abordagem melhora a organização, permite a reutilização e facilita a customização dos ícones (cor, tamanho) via props.

6.  **Reutilização e Abstração:**
    *   Componentes como `ActionButton`, `OrganizationSection`, e os diversos tipos de "cartões" (`FeatureCard`, `IllustrativeCard`, `DarkCard`) foram projetados para serem reutilizáveis, aceitando props para customizar seu conteúdo e aparência. Isso reduz a duplicação de código e promove a consistência visual.

7.  **Responsividade:**
    *   Um foco importante foi garantir que a landing page fosse totalmente responsiva. As classes responsivas do Tailwind CSS (prefixos como `sm:`, `md:`, `lg:`) foram usadas extensivamente para adaptar o layout, o tamanho da fonte e a visibilidade dos elementos em diferentes tamanhos de tela (mobile, tablet, desktop).

8.  **Acessibilidade (Considerações Iniciais):**
    *   Foram feitos esforços iniciais para melhorar a acessibilidade, como o uso de atributos ARIA (`aria-label`, `aria-roledescription`, `role`) em elementos interativos como o carrossel e os botões de ícone.

## 6. Funcionalidades Chave da Landing Page

*   **Design Responsivo:** Adapta-se a diversos dispositivos e tamanhos de tela.
*   **Clareza e Foco:** Apresenta as informações de forma concisa e direta.
*   **Chamadas para Ação (CTAs) Estratégicas:** Botões "QUERO MINHA AGENDA!" e outros são posicionados para incentivar a conversão.
*   **Destaque Visual de Benefícios:** Seções como `WhyUseSection` e `DarkFeatureSection` utilizam design e iconografia para comunicar valor.
*   **Carrossel de Imagens Interativo:** Na `HeroSection`, oferece uma forma dinâmica de apresentar aspectos visuais do produto ou conceitos relacionados.
*   **Tema Consistente:** Uso da cor `brand-teal` e de um estilo visual coeso em toda a página.
*   **Estrutura Modular:** Facilita a manutenção e futuras expansões.

## 7. Como Visualizar o Projeto

Como este projeto está configurado para carregar dependências (React, ReactDOM, Tailwind CSS) via CDN e utiliza `importmap`, ele pode ser visualizado diretamente em um navegador moderno que suporte essas tecnologias.

1. Entre na pasta do projeto
2. Abra um terminal na pasta e execute o comando:
   ```npm run dev```

Este projeto demonstra a criação de uma landing page moderna e responsiva utilizando React, TypeScript e Tailwind CSS, com uma abordagem que prioriza a componentização, a reutilização de código e uma experiência de desenvolvimento ágil para prototipagem rápida.
