# Projekt – přehled

### Technologie

**FE**: React, TypeScript, CSS  
**BE**: Node.js (Express), TypeScript, PostgreSQL


### Features

- ✅ Již přidané featury do projektu - zatím žádné
- 🟨 Featury k přidání - zatím žádné


### Struktura

```txt

.gitignore                                -> ignorované soubory (společné)
public/                                   -> obrázky + další veřejné věci (pokud je sdílené; jinak patří do frontend/public)
docs/                                     -> dokumentace

frontend/                                 -> frontend aplikace
 ├─ package.json                          -> FE dependencies + scripts
 ├─ .env                                  -> FE proměnné prostředí (např. API URL)
 ├─ .env.example                          -> ukázka FE env proměnných
 ├─ public/                               -> FE veřejné soubory (favicon, obrázky pro FE, atd.)
 └─ src/                                  -> frontend (React)
    ├─ components/                        -> komponenty
    │    └─ nazev-komponenty/             -> název konkrétní komponenty
    │        ├─ NazevKomponenty.tsx       -> tsx soubor dané komponenty
    │        └─ NazevCssKeKomponente.css  -> css soubor dané komponenty
    ├─ types/                             -> přednastavené typy
    ├─ App.tsx                            -> root komponenta
    └─ main.tsx                           -> vstupní bod Reactu

backend/                                  -> backend aplikace
 ├─ package.json                          -> BE dependencies + scripts
 ├─ .env                                  -> BE tajné proměnné (DB, tokeny)
 ├─ .env.example                          -> ukázka BE env proměnných
 └─ src/                                  
    ├─ server.ts                          -> start serveru (Express)
    ├─ routes/                            -> definice endpointů (routery)
    ├─ controllers/                       -> logika pro jednotlivé endpointy
    ├─ middleware/                        -> auth, validace, rate limit, atd.
    ├─ db/                                -> připojení DB + migrace/seed (podle potřeby)
    ├─ config/                            -> BE konfigurace (např. db.ts)
    ├─ services/                          -> servisní logika (např. tokeny, výpočty)
    └─ types/                             -> typy pro backend 

```

### Tasky na [github issues](https://github.com/CodeFusionChallenge/ColorRecall/issues)