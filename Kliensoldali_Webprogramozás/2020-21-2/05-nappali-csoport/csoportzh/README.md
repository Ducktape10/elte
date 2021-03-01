# Kliensoldali webprogramozás csoportzh

## 1. Kliensoldali webprog eredmények (5 pont)
A **frontend-results** mappában egy csoport zh eredményei láthatóak. Elég nehezen állapítható meg bármilyen statisztika, mert nincs egy rendes összesítés, ezért újra meg újra össze kell adogatni az eredményeket. Készíts az `index.js`-ben lévő adatok alapján egy oszlopdiagrammot, a [Chart.js](https://www.chartjs.org/) segítségével!

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"></script>
```

- Chart megjelenik jó eredményekkel (2 pont)
- Valamilyen módon legyen rendezve a chart, pontszám alapján (csökkenő vagy növekvő) (1 pont)
- Legyen színes a chart! Ha valaki elérte a minimum ponthatárt (8 pont), akkor legyen zöld, amúgy piros. (2 pont)
  - 8 pont vagy afelett zöld (1 pont)
  - 8 pont alatt piros (1 pont)

[Arról, hogyan kell oszlopdiagrammot csinálni Chart.js segítségével](https://www.chartjs.org/docs/latest/charts/bar.html)

Kis segítség:
- Az options jelenleg nem kell
- A data felépítése:
  ```js
  data: {
    labels: ['a', 'b', 'c'], // a képen a nevek jelennek meg itt. ez az alsó sor
    datasets: [{ // elég lesz csak egy dataset, szóval ez akár másolható is innen
      label: 'Eredmény', // ezzel nem kell foglalkozni, legyen csak simán Eredmény
      data: [1, 2, 3], // itt vannak az adatok / a számosság tárolva
      backgroundColor: ['rgb(123, 32, 12)', 'rgb(14, 54, 23)'] // az oszlopok színei. ügyelni kell arra, hogy index alapján figyeli, tehát ha itt az ötödiket akarom hogy fekete legyen, akkor a data 5. eleméből készült oszlop lesz fekete
    }]
  }
  ```

## 2. Animal facts - PE (7 pont)
Az **animal-facts** mappában állati tények olvashatóak. Oldd meg, hogy akinek aktiválva van a javascript, sokkal élvezhetőbben tudjon olvasni! Minden `data-definition` attribútumot tartalmazó elem után illessz be egy gombot, amire kattintva megjelenik egy kis tooltip, aminek a szövege ez a data-definition értéke. A gomb ikonja legyen egy kérdőjel.

- A gomb szövegeként egy FontAwesome-os kérdőjel ikon van berakva (1 pont)
  - [Itt található az ikon + leírása](https://fontawesome.com/icons/question?style=solid)
- A gomb(ok) a megfelelő data- attribútumokat tartalmazzák (1 pont)
- Minden data-definition-t tartalmazó elem után íródik ki a gomb (3 pont):
  - Mindegyik olyan elemre működik, ami data-definition-t tartalmaz (2 pont)
  - Az elem után íródik ki (1 pont)
- Valamilyen módon egységbe van zárva (2 pont)
  Például:
  - osztály
  - komponens

Egy ilyen gombnak ez a HTML megfelelője, pontosan ilyennek kell lennie (kivéve persze a `{...}` részt. azt le kell cserélni!):
```html
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title={AZ_A_SZÖVEG_AMIT_MEG_AKAROK_JELENÍTENI}>
  <i {FONT_AWESOME_OSZTÁLY}></i>
</button>
```

## 3. Számláló gomb (8 pont)
A webkomponensek hello world-je, egy gomb, aminek a szövege egy szám. Amikor megjelenik a gomb az oldalon, a szövege **0** kell hogy legyen, aztán minden egyes kattintás növelje meg ezt a számlálót eggyel.


- A DOM-ba íráskor jelenjen meg a `How are you world?` üzenet a konzolon (1 pont)
- Múködjön jól a számláló (3 pont):
  - Kezdődjön **nulláról** (1 pont)
  - Minden kattintásra növelődjön meg a számláló (2 pont)
- Webkomponens van használva (2 pont)
  Ez lehet:
  - `<template>` segítségével
  - `is` attribútum
  - vagy más tanult/hasonló módszer
- A komponensnek legyen egy `data-number` attribútuma, ami szinkronizál a számlálóval, tehát minden kattintásra felveszi azt az értéket, ami a gomb szövegében van (2 pont)