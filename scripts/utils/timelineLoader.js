import { convertDate } from './dateConverter.js';

export async function loadVisualizationData() {
  const container = document.getElementById('visualization');

  try {
    const response = await fetch('data/shoot.json');
    const jsonData = await response.json();

    const shootItems = jsonData.map(event => {
      const start = convertDate(event.startTimePeriod);
      const end = convertDate(event.endTimePeriod);
      return {
        id: event.id,
        content: `${event.satellite} point ${event.point}`,
        start: start,
        end: end
      };
    });

    const items = new vis.DataSet(shootItems);
    const options = {};
    const timeline = new vis.Timeline(container, items, options);
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
}
