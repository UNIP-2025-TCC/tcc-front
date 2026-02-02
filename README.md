# 🚗 MEGA - Monitoramento de Tráfego

<div align="center">
  <img src="public/img/mega_logo.png" alt="MEGA Logo" width="120" />
  
  ### Monitoramento Eficiente e Gestão Automatizada de Tráfego
  
  **Trabalho de Conclusão de Curso**  
  Universidade Paulista - UNIP (Ribeirão Preto)  
  Bacharelado em Ciência da Computação
  
  ![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=flat-square&logo=next.js)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
  ![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat-square&logo=react)
  ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.16-38B2AC?style=flat-square&logo=tailwind-css)
</div>

---

## 📋 Sobre o Projeto

O **MEGA** é um sistema de monitoramento de tráfego urbano em tempo real desenvolvido como Trabalho de Conclusão de Curso. O sistema utiliza visão computacional para analisar vídeos de câmeras de rodovias, detectando veículos, contabilizando travessias e identificando condições de tráfego pesado.

Este repositório contém o **frontend** da aplicação, desenvolvido em Next.js com TypeScript. O sistema se comunica com um backend Python (repositório separado) que processa os vídeos utilizando técnicas de inteligência artificial.

### 🎯 Funcionalidades Principais

- ✅ **Visualização em tempo real** de vídeos processados de câmeras rodoviárias
- 📊 **Métricas ao vivo**: contagem de veículos, travessias, veículos parados
- 🚦 **Detecção de tráfego pesado** com indicadores visuais
- 📈 **Estatísticas de desempenho**: FPS, tempo de atividade da câmera
- 🔄 **Comunicação WebSocket** para atualizações em tempo real
- 🎨 **Interface responsiva e intuitiva** com design moderno

---

## 🛠️ Tecnologias Utilizadas

### Core
- **[Next.js 15.5.2](https://nextjs.org/)** - Framework React com SSR e otimizações
- **[React 19.1.0](https://react.dev/)** - Biblioteca para construção de interfaces
- **[TypeScript 5.x](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática

### UI/UX
- **[TailwindCSS 4.1.16](https://tailwindcss.com/)** - Framework CSS utilitário
- **[HeroUI 2.8.3](https://heroui.com/)** - Biblioteca de componentes React
- **[Framer Motion 12.23.12](https://www.framer.com/motion/)** - Biblioteca de animações
- **[Lucide React](https://lucide.dev/)** - Ícones SVG

### Comunicação
- **[Socket.IO Client 4.8.1](https://socket.io/)** - WebSocket para comunicação em tempo real
- **[React Hot Toast 2.6.0](https://react-hot-toast.com/)** - Notificações toast

### DevOps
- **[Docker](https://www.docker.com/)** - Containerização da aplicação
- **[ESLint](https://eslint.org/)** - Linter JavaScript/TypeScript
- **[Prettier](https://prettier.io/)** - Formatador de código

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 20 ou superior)
- **npm** ou **yarn** ou **pnpm**
- **Docker** (opcional, para execução em container)
- **Backend Python** rodando em `http://localhost:5000`

---

## 🚀 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/tcc-front.git
cd tcc-front
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### 3. Configure as variáveis de ambiente (opcional)

Crie um arquivo `.env.local` na raiz do projeto se necessário:

```env
# Exemplo de configuração
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 4. Execute o projeto

#### Modo desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

#### Modo produção

```bash
npm run build
npm start
# ou
yarn build
yarn start
```

### 5. Executar com Docker

```bash
# Build da imagem
docker build -t mega-frontend .

# Executar o container
docker run -p 3000:3000 mega-frontend
```

---

## 📂 Estrutura do Projeto

```
tcc-front/
├── public/
│   └── img/                    # Imagens estáticas (logos, câmeras)
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal da aplicação
│   │   ├── page.tsx            # Página inicial (seleção de câmeras)
│   │   └── video/
│   │       └── page.tsx        # Página de visualização de vídeo
│   ├── assets/
│   │   ├── fonts/              # Fontes (Inter, Poppins)
│   │   ├── images/             # Imagens do projeto
│   │   └── svg/                # Ícones SVG
│   ├── components/
│   │   ├── cameraCard.tsx      # Card de seleção de câmera
│   │   ├── headerMenu.tsx      # Menu de navegação
│   │   └── videoPage.tsx       # Componente da página de vídeo
│   ├── global/
│   │   ├── globals.css         # Estilos globais
│   │   ├── HeroUiProvider.tsx  # Provider do HeroUI
│   │   └── hero.ts             # Configuração HeroUI
│   ├── lib/
│   │   └── heroui/             # Exports de componentes HeroUI
│   └── useWebsocket.ts         # Hook customizado para WebSocket
├── Dockerfile                  # Configuração Docker
├── next.config.ts              # Configuração Next.js
├── tailwind.config.ts          # Configuração TailwindCSS
├── tsconfig.json               # Configuração TypeScript
└── package.json                # Dependências e scripts
```

---

## 🎮 Como Usar

### 1. Página Inicial

Ao acessar a aplicação, você verá cards com as câmeras disponíveis:
- **SP125-KM093B** - Ubatuba-SP
- **SP008-KM095** - Bragança Paulista-SP
- **SP055-KM092** - Caraguatatuba-SP
- **VIDEO-GRAVADO** - Experimental

### 2. Seleção de Câmera

Clique em uma das câmeras para iniciar o monitoramento. O sistema enviará uma requisição ao backend para iniciar o processamento do vídeo.

### 3. Visualização em Tempo Real

Na página de monitoramento, você verá:

#### 📹 Stream de Vídeo
- Vídeo processado com detecção de veículos em tempo real
- Visualização de caixas delimitadoras (bounding boxes)
- Linha de travessia para contagem

#### 📊 Painel de Métricas

**Travessias**
- Número total de veículos que cruzaram a linha de contagem

**Veículos Parados**
- Quantidade e IDs dos veículos que pararam na via

**Veículos na Tela**
- Número atual de veículos detectados

**Situação do Tráfego**
- 🟢 Tráfego Normal
- 🔴 Tráfego Pesado (quando há congestionamento)

**Estatísticas da Câmera**
- FPS (Frames por segundo) do processamento
- Tempo de atividade em minutos

---

## 🔌 Integração com Backend

O frontend se comunica com o backend Python através de:

### HTTP REST API
```typescript
// Iniciar câmera
GET http://localhost:5000/start/{cameraCode}
```

### WebSocket (Socket.IO)
```typescript
// Conexão
const socket = io('http://localhost:5000');

// Eventos recebidos
socket.on('connect', () => { /* Conectado */ });
socket.on('stats_update', (data: Stats) => { /* Atualização de métricas */ });
socket.on('error', (error: string) => { /* Erro */ });
```

### Estrutura de Dados (Stats)
```typescript
interface Stats {
    total_objects: number;        // Veículos na tela
    crossing_count: number;        // Total de travessias
    stopped_vehicles: number[];    // IDs dos veículos parados
    traffic_detected: boolean;     // Tráfego pesado detectado
    fps: number;                   // Frames por segundo
    uptime_minutes: number;        // Tempo de atividade
}
```

---

## 🎨 Design System

### Paleta de Cores
- **Primária**: Amber (tons de amarelo/laranja)
- **Secundária**: Stone (tons de cinza)
- **Background**: Gradiente amber-50 → amber-400
- **Cartões**: White com opacity

### Tipografia
- **Principal**: Inter (100-900)
- **Secundária**: Poppins (400-700)

---

## 🐳 Docker

### Build da Imagem

O projeto utiliza multi-stage build para otimização:

```dockerfile
# Etapa 1: Build
FROM node:20-slim AS build
# ... instalação e build

# Etapa 2: Runtime
FROM node:20-slim
# ... apenas arquivos necessários
```

### Comandos Úteis

```bash
# Build
docker build -t mega-frontend .

# Run
docker run -p 3000:3000 mega-frontend

# Run com volumes (desenvolvimento)
docker run -p 3000:3000 -v $(pwd):/app mega-frontend
```

---

## 🧪 Scripts Disponíveis

```bash
# Desenvolvimento com Turbopack
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Linting
npm run lint
```

---

## 📸 Câmeras Disponíveis

| Código | Localização | Status |
|--------|-------------|--------|
| SP125-KM093B | Ubatuba-SP
| SP008-KM095 | Bragança Paulista-SP
| SP055-KM092 | Caraguatatuba-SP
| VIDEO-GRAVADO | Experimental

---

## 🔧 Configuração Avançada

### Next.js Config

```typescript
// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: "http",
      hostname: "localhost",
      port: "5000",
      pathname: "/**",
    }],
  },
  output: 'standalone', // Para Docker
};
```

### TailwindCSS

O projeto usa TailwindCSS v4 com configuração via CSS:

```css
/* globals.css */
@import 'tailwindcss';
@plugin './hero.ts';
@source '../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}';
```

---

## 🤝 Contribuindo

Este é um projeto acadêmico (TCC), mas sugestões e melhorias são bem-vindas!

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto foi desenvolvido como Trabalho de Conclusão de Curso para fins acadêmicos.

<div align="center">
  
  **Desenvolvido com ❤️ para melhorar a mobilidade urbana**
  
  ⭐ Se este projeto foi útil para você, considere dar uma estrela!
  
</div>
