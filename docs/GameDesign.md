# Paměťová hra – dokumentace

## Popis hry

Aplikace implementuje paměťovou hru založenou na zapamatování pozic objektů.

Hra probíhá na herním poli tvořeném mřížkou čtverců.  
Všechny čtverce jsou ve výchozím stavu otočeny do původní (zakryté) pozice.


## Průběh hry

Hra probíhá v kolech.  
Každé kolo se skládá ze dvou kroků: **kroku zobrazení** a **kroku výběru**.


### ▶ Krok zobrazení

- Na začátku kola je náhodně vybrán určitý počet čtverců  
  (počet je dán aktuálním levelem).
- Vybrané čtverce se na omezený čas otočí do viditelné polohy.
- Úkolem hráče je zapamatovat si **pozice těchto čtverců**.
- Po uplynutí časového limitu se všechny čtverce vrátí do původního stavu.


### ▶ Krok výběru

- Herní pole je ve stejném vizuálním stavu jako na začátku kola.
- Hráč kliknutím označuje čtverce, které se podle jeho paměti v kroku zobrazení otočily.
- Cílem je označit **všechny a pouze ty čtverce**, které byly v kroku zobrazení zobrazeny.


## Vyhodnocení kola

- Kolo je považováno za úspěšné, pokud hráč:
  - označí všechny správné čtverce
  - a zároveň neoznačí žádný nesprávný
- Při úspěšném dokončení kola hráč postupuje do dalšího levelu.


## Obtížnost

S rostoucí úrovní obtížnosti se může:
- zvyšovat počet zobrazených čtverců
- zkracovat čas jejich zobrazení

Konkrétní nastavení obtížnosti je závislé na herní konfiguraci.

