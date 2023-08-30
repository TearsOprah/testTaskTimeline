const visualizationButton = document.getElementById('visualizationButton');
const cesiumButton = document.getElementById('cesiumButton');
const visualizationDiv = document.getElementById('visualization');
const cesiumDiv = document.getElementById('cesiumContainer');

visualizationButton.addEventListener('click', async () => {
  cesiumDiv.style.display = 'none';
  visualizationDiv.style.display = 'block';
  visualizationDiv.innerHTML = '';
  const { loadVisualizationData } = await import('./utils/timelineLoader.js');
  await loadVisualizationData();
});

cesiumButton.addEventListener('click', async () => {
  visualizationDiv.style.display = 'none';
  cesiumDiv.style.display = 'block';
  cesiumDiv.innerHTML = '';
  const { loadCesiumData } = await import('./utils/cesiumLoader.js');
  await loadCesiumData();
});
