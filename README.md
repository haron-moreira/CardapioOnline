# Cardápio Online – Frontend

Este é o frontend do projeto **Cardápio Online**, construído com **Next.js (App Router)** e **Tailwind CSS**, com foco em responsividade e performance.

## ✨ Funcionalidades atuais

- Login de usuários
- Cadastro de novos usuários
- Visualização pública de cardápio via `/cardapio/:uuid`
- Gestão simples de cardápio para o dono do restaurante via `/restaurante/:uuid`

## 📁 Estrutura de Pastas (simplificada)

```
app/
├── login/page.tsx             → tela de login
├── cadastro/page.tsx          → tela de cadastro
├── cardapio/[uuid]/page.tsx   → visualização pública do cardápio
├── restaurante/[uuid]/page.tsx → gestão do restaurante
components/                    → componentes reutilizáveis
styles/                        → CSS global
```

## 🧑‍💻 Tecnologias usadas

- [Next.js 14+](https://nextjs.org/docs) com App Router
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript

## 🚀 Deploy

### Frontend
Será hospedado na **[Vercel](https://vercel.com/)**, ideal para projetos com Next.js, CI/CD integrado e excelente performance global.

### Backend
Será construído com **NestJS** e hospedado na **[Railway](https://railway.app/)**, uma excelente escolha para APIs REST com PostgreSQL ou MySQL e deploy simplificado.

## 📦 Como rodar localmente

```bash
# Instale dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev

# Acesse em
http://localhost:3000
```

## 🔮 Próximas funcionalidades

- Integração com backend NestJS
- Upload de imagens (ex: S3)
- Autenticação protegida por JWT
- Tela de dashboard para restaurante
- Responsividade completa

---

> Criado por [@haron-moreira](https://github.com/haron-moreira) • Projeto em andamento 🚧
