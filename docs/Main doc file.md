# Paměťová hra – dokumentace

## Popis hry

Aplikace implementuje paměťovou hru založenou na zapamatování pozic objektů.

Hra probíhá na herním poli tvořeném mřížkou čtverců.  
Všechny čtverce jsou ve výchozím stavu otočeny do původní (zakryté) pozice.

---

## Průběh hry

Hra probíhá v kolech.  
Každé kolo se skládá ze dvou kroků: **kroku zobrazení** a **kroku výběru**.

---

### ▶ Krok zobrazení

- Na začátku kola je náhodně vybrán určitý počet čtverců  
  (počet je dán aktuálním levelem).
- Vybrané čtverce se na omezený čas otočí do viditelné polohy.
- Úkolem hráče je zapamatovat si **pozice těchto čtverců**.
- Po uplynutí časového limitu se všechny čtverce vrátí do původního stavu.

---

### ▶ Krok výběru

- Herní pole je ve stejném vizuálním stavu jako na začátku kola.
- Hráč kliknutím označuje čtverce, které se podle jeho paměti v kroku zobrazení otočily.
- Cílem je označit **všechny a pouze ty čtverce**, které byly v kroku zobrazení zobrazeny.

---

## Vyhodnocení kola

- Kolo je považováno za úspěšné, pokud hráč:
  - označí všechny správné čtverce
  - a zároveň neoznačí žádný nesprávný
- Při úspěšném dokončení kola hráč postupuje do dalšího levelu.

---

## Obtížnost

S rostoucí úrovní obtížnosti se může:
- zvyšovat počet zobrazených čtverců
- zkracovat čas jejich zobrazení

Konkrétní nastavení obtížnosti je závislé na herní konfiguraci.

---

## Terminologie

| Pojem | Význam |
|------|--------|
| Původní stav | Výchozí vizuální stav herního pole |
| Zobrazený čtverec | Čtverec dočasně otočený během kroku zobrazení |
| Level | Herní úroveň určující obtížnost kola |


---

### Popis

Jedná se o jednoduchou paměťovou hru, která je rozdělena do 2 fází. V 1. fázi se na krátký čas odhalí několik základních útvarů a několik lišících se od ostatních. Úkolem hráče je zapamatovat si útvary, které se liší. Ve 2. fázi se lišící se útvary přemění na útvary základní, a úkol hráče je naklikat všechny útvary, které se v 1. fázi lišily.

**FE**: React, TypeScript, CSS  
**BE**: Express, MongoDB?

### Features

- ✅ Již přidané featury do projektu - zatím žádné
- 🟨 Featury k přidání - zatím žádné

### Struktura

```txt
public/                                   -> obrázky + další veřejné věci
docs/                                     -> dokumentace
src/                                      -> frontend
 ├─ components/                           -> komponenty
 │    └─ nazev-komponenty/                -> název konkrétní komponenty
 │        ├─ NazevKomponenty.tsx          -> tsx soubor dané komponenty
 │        └─ NazevCssKeKomponente.css     -> css soubor dané komponenty
 ├─ types/                                -> přednastavené typy
 ├─ App.tsx                               -> root komponenta
 └─ main.tsx                              -> vstupní bod Reactu
```

### Tasky na [github issues](https://github.com/CodeFusionChallenge/ColorRecall/issues)
