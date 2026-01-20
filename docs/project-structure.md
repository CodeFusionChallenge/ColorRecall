# Projekt – přehled

### Technologie

**FE**: React, TypeScript, CSS  
**BE**: Node.js (Express), TypeScript, PostgreSQL


### Features

- ✅ Již přidané featury do projektu - zatím žádné
- 🟨 Featury k přidání - zatím žádné


# Project Structure

### Struktura

```txt

COLORRECALL/
├─ .prettierrc                   -> společný pro celý projekt 
├─ .gitignore                    -> společné ignorování (node_modules, dist, .env, apod.)
├─ README.md                     -> rychlý přehled projektu + jak spustit FE/BE
├─ docs/                         -> dokumentace (pravidla, design, issues workflow)
│  ├─ api.md
│  ├─ best-practices.md
│  ├─ commits-and-branches.md
│  ├─ game-design.md
│  ├─ gh-issues.md
│  └─ project-structure.md       
│
├─ web/                          -> frontend aplikace (Vite + React + TS)
│  ├─ package.json               -> FE dependencies + scripts
│  ├─ package-lock.json          -> lock pro FE (npm)
│  ├─ node_modules/              -> lokální FE balíčky (NECOMMITOVAT)
│  ├─ index.html                 -> vstupní HTML pro Vite
│  ├─ vite.config.ts             -> Vite konfigurace (proxy na API, aliasy, build nastavení)
│  ├─ tsconfig.json              -> základní TS konfigurace (reference)
│  ├─ tsconfig.app.json          -> TS config pro browser/React kód
│  ├─ tsconfig.node.json         -> TS config pro Node tooling (vite.config.ts) – není to backend
│  ├─ eslint.config.js           -> ESLint nastavení pro FE
│  ├─ public/                    -> statické soubory kopírované 1:1 do buildu
│  └─ src/                       -> zdrojový kód FE (React)
│     ├─ assets/                 -> assets importované z kódu (SVG, obrázky, fonty)
│     ├─ main.tsx                -> vstupní bod Reactu
│     ├─ App.tsx                 -> root komponenta
│     ├─ index.css               -> globální styly
│     └─ App.css                 -> styly pro App
│
└─ api/                          -> backend API (Node + Express + TS)
   ├─ package.json               -> BE dependencies + scripts
   ├─ package-lock.json          -> lock pro BE (npm)
   ├─ node_modules/              -> lokální BE balíčky (NECOMMITOVAT)
   ├─ tsconfig.json              -> TS překlad: src -> dist
   ├─ nodemon.json               -> nodemon config (hlídá dist a restartuje server)
   ├─ dist/                      -> vygenerovaný JS (NEEDITOVAT, obvykle necommitovat)
   └─ src/
      ├─ server.ts
      ├─ routes/            -> definice endpointů (routery)
      ├─ controllers/       -> logika pro jednotlivé endpointy
      ├─ middleware/        -> auth, validace, rate limit...
      ├─ services/          -> servisní logika (výpočty, doménová logika)
      ├─ db/                -> připojení DB, migrace/seed
      ├─ config/            -> konfigurace (env, constants)
      └─ types/             -> sdílené typy pro backend 

```
### (Plánovaná) struktura backendu
Tato struktura bude použita, jakmile API začne růst nad základní počet endpointů.


### Tasky na [github issues](https://github.com/CodeFusionChallenge/ColorRecall/issues)