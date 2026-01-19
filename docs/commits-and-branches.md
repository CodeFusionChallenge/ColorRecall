## General message

```bash
type: description
```

## Commit types

**✨ feat** – tvorba nové featury  
**🎨 style** – úprava vzhledu / CSS  
**🔧 fix** – oprava bugu  
**🧩 refactor** – úprava struktury kódu bez změny funkce nebo vzhledu  
**🧹 chore** – soubory, assety a změny nesouvisející s kódem  
**📝 docs** – dokumentace

## Commit description

Popis funkce by měl být vždy psaný česky.

### Examples

```txt
feat: přidání počítání skóré
fix: opraven bug v kalkulačce
refactor: zkrácení kódu a zjednodušení logiky v Home.tsx
chore: přidání profilové fotky
```

## Branches

V projektu máme stabilně větev produkční a větev developerskou. Ostatní větve jsou featury:

- main - prorukční větev. Do mainu se merguje dev větev, pokud jsou všechny změny v ní dokončeny a po review
- dev - developerská větev. Do devu se mergují všechny feature větve, které se zároveň labelují v gh issues jako waiting for review
- feature - feature větev ponese název featury, na které se v ní pracuje. Když je featura dokončená, větev se merguje do devu a zároveň se maže.
