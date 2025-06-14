const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});

// Line Chart Previews Data
const previewData = {
  assault: [523, 819, 1215, 1769, 2339, 3025, 3719, 4205],
  burglary: [349, 429, 752, 1194, 1981, 3191, 4801, 6203],
  robbery: [128, 178, 329, 597, 1024, 1903, 3104, 3583],
  vehicleTheft: [223, 308, 529, 869, 1498, 2578, 3776, 4359]
};

function createPreviewChart(canvasId, data, color) {
  const ctx = document.getElementById(canvasId).getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["2000", "2003", "2006", "2009", "2012", "2015", "2018", "2020"],
      datasets: [{
        data: data,
        borderColor: color,
        borderWidth: 2,
        fill: false,
        tension: 0.3,
        pointRadius: 3,
        pointBackgroundColor: color
      }]
    },
    options: {
      plugins: { legend: { display: false }},
      scales: {
        x: { title: { display: true, text: "Year" }},
        y: { title: { display: true, text: "Cases" }}
      }
    }
  });
}

// Render all line chart previews
createPreviewChart('assaultPreview', previewData.assault, '#e74c3c');
createPreviewChart('burglaryPreview', previewData.burglary, '#2980b9');
createPreviewChart('robberyPreview', previewData.robbery, '#f1c40f');
createPreviewChart('vehicleTheftPreview', previewData.vehicleTheft, '#9b59b6');
