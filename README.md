## Development

# npm install se spouští jen ve složce, kde pracuješ:
    -> FE: cd web && npm install
    -> BE: cd api && npm install
Root nemá package.json → v rootu nespouštět npm install.

### Frontend
cd web
npm install     -> pouze poprvé nebo při změně web/package(-lock).json
npm run dev

---

### Backend
cd api
npm install     -> pouze poprvé nebo při změně api/package(-lock).json

# Terminál A (TypeScript compiler)
npm run dev:ts

# Terminál B (server restart)
nodemon


# Po git pull koukni, jestli se změnil package-lock.json. Pokud ano, dej npm install.