const timelineButton = document.getElementById('timelineButton');
const visualizationButton = document.getElementById('visualizationButton');
const timelineDiv = document.getElementById('timeline');
const visualizationDiv = document.getElementById('visualization');

function setActiveButton(activeButton, inactiveButton) {
  activeButton.classList.add('active');
  inactiveButton.classList.remove('active');
}

timelineButton.addEventListener('click', async () => {
  setActiveButton(timelineButton, visualizationButton);
  visualizationDiv.style.display = 'none';
  timelineDiv.style.display = 'block';
  timelineDiv.innerHTML = '';
  const { loadTimelineData } = await import('./utils/timelineLoader.js');
  await loadTimelineData();

  const timelineTitle = document.createElement('h1');
  timelineTitle.textContent = 'План';
  timelineTitle.classList.add('content__title');
  timelineDiv.insertBefore(timelineTitle, timelineDiv.firstChild);
});

visualizationButton.addEventListener('click', async () => {
  setActiveButton(visualizationButton, timelineButton);
  timelineDiv.style.display = 'none';
  visualizationDiv.style.display = 'block';
  visualizationDiv.innerHTML = '';
  const { loadVisualizationData } = await import('./utils/visualizationLoader.js');
  await loadVisualizationData();
});
