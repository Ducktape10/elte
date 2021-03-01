//! ide jöjjön a chart
const canvas = document.querySelector('canvas');

//? erre nem feltétlenül van így szükség, csak nem akartam hogy a results tömb is megváltozzon
const sortedResults = [...results].sort((a, b) => a.points - b.points);

const chart = new Chart(canvas, {
  type: 'bar',
  data: {
    labels: sortedResults.map((result) => result.name),
    datasets: [{
      label: 'Eredmény',
      data: sortedResults.map((result) => result.points),
      backgroundColor: sortedResults.map((result) => result.points < 8 ? 'rgb(255, 0, 0)' : 'rgb(0, 255, 0)')
    }]
  }
});