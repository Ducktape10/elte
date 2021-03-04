# Kliensoldali webprogramozás csoportzh

## 1. Landing page (10 pont)
- Ha elgördült az oldal **200px**-nyit, akkor alkalmazzuk a `navbar-scrolled` stílusosztályt a `nav` elemen. Ügyelj arra, hogy a **scroll** esemény nagyon sokszor hívódik meg! Ehhez érdemes használni a `lodash` függvénykönyvtárat! (3 pont)
  - Megfelelő stílusosztály használata (1 pont)
  - A sokszor meghívódás megoldása (2 pont)
- Helyezz el egy olvasási folyamatsávot az oldal tetején. A gördítés mértéke szerint változzon **0** és **100%** között a szélessége! (3 pont)
  Ez lehet:
  - Egy div, aminek a méretét módosítod
  - `<progress>` elem
  - bármi más
- Oldd meg, hogy az oldalon ha egy elemnek van `data-scroll` attribútuma, akkor amint beér a képernyőre (`IntersectionObserver`) alkalmazd rá a következő osztályokat: `animate__animated` és `animate__${ATTR}`, ahol a `${ATTR}` a `data-scroll-animation` értéke. (4 pont)
  - Az IntersectionObserver csak a data-scroll-t tartalmazó elemekre működik (2 pont)
  - Alkalmazódnak a stílusosztályok (2 pont)

## 2. Animal facts - PE (9 pont)
Az **animal-facts** mappában állati tények olvashatóak. Oldd meg, hogy akinek aktiválva van a javascript, tudja milyen állatról van szó!

- Minden `animal-name` osztályú elem után megjelenik az elemben lévő szöveghez tartozó állat képe. (4 pont)
  - Csak `animal-name` osztályú elemeknél múködik (1 pont)
  - Az elem után jelenik meg a kép (2 pont)
  - Jó kép jelenik meg (1 pont)
Például: ha van egy `<span class="animal-name">Monkey</span>` akkor a `monkeyImage` id-jú kép jelenjen meg.
- Ha rákattintok a képre, akkor az legyen nagyobb. Nincs megszabva hogy szélesség vagy magasság, illetve pontos arány sem. (3 pont)
  - Figyelve van a kattintás esemény (1 pont)
  - Megnövekedik a kép (2 pont)
- Valamilyen módon egységbe van zárva (2 pont)
  Ezek lehetnek:
  - osztály
  - komponens

## 3. Dialógusablak (11 pont)
Készíts egy komponenst, amely egy gombot használ/generál, amelyre kattintva egy dialógusablak jelenik meg. Legyen lehetőség egyedi tartalmat a dialógusablakba tenni.

- A komponens DOM-ból való eltüntetésekor jelenjen meg a `Goodbye cruel world!` üzenet a konzolon (1 pont)
- A gombra kattintáskor a dialog megjelenik (2 pont)
- A dialog a megfelelő elemeket tartalmazza. (3 pont)
  Ezek lehetnek:
  - `<template>`-ből szedett elemek
  - kód által generált elemek
- Webkomponens van használva (3 pont)
  Ez lehet:
  - `<template>` segítségével
  - `is` attribútum
  - vagy más tanult/hasonló módszer
- A komponensnek legyen egy `data-is-visible` attribútuma, ami `true`, ha látszódik az ablak és `false` ha nem látszódik. (2 pont)

Segítség:
- A dialog láthatóságát érdemes a `display` css propertyvel módosítani.
- A HTML-ben van egy `dialog` osztály, amit lehet használni.